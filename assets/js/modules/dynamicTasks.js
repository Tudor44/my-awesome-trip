/**
 * Dynamic Tasks module
 * Handles adding, editing, and removing itinerary tasks dynamically
 */

import Storage from './storage.js';
import ActivityManager from './activities.js';

const DynamicTaskManager = {
    customTasks: new Map(),
    taskIdCounter: 0,

    /**
     * Initialize dynamic task functionality
     */
    init() {
        this.loadCustomTasks();
        this.addTaskControls();
        this.bindEvents();
    },

    /**
     * Add task controls to each city section
     */
    addTaskControls() {
        const citySections = document.querySelectorAll('.city-section');
        citySections.forEach(section => {
            this.addCityTaskControls(section);
        });
    },

    /**
     * Add task controls to a specific city section
     * @param {HTMLElement} section - City section element
     */
    addCityTaskControls(section) {
        const cityName = this.getCityName(section);
        const activityList = section.querySelector('.activity-list');
        
        if (!activityList) return;

        // Create add task button
        const addTaskBtn = document.createElement('button');
        addTaskBtn.className = 'add-task-btn';
        addTaskBtn.innerHTML = '➕ Aggiungi Attività Personalizzata';
        addTaskBtn.setAttribute('data-city', cityName);

        // Insert button after activity list
        activityList.insertAdjacentElement('afterend', addTaskBtn);

        // Add task form (initially hidden)
        const taskForm = this.createTaskForm(cityName);
        addTaskBtn.insertAdjacentElement('afterend', taskForm);
    },

    /**
     * Create task form for adding new tasks
     * @param {string} cityName - Name of the city
     * @returns {HTMLElement} Task form element
     */
    createTaskForm(cityName) {
        const form = document.createElement('div');
        form.className = 'task-form hidden';
        form.setAttribute('data-city', cityName);
        
        form.innerHTML = `
            <div class="task-form-content">
                <h4>Aggiungi Nuova Attività</h4>
                <input type="text" class="task-title-input" placeholder="Titolo attività" required>
                <textarea class="task-description-input" placeholder="Descrizione (opzionale)" rows="2"></textarea>
                <input type="text" class="task-time-input" placeholder="Orario (es. 10:30 - Mattina)">
                <div class="task-form-buttons">
                    <button type="button" class="save-task-btn">💾 Salva</button>
                    <button type="button" class="cancel-task-btn">❌ Annulla</button>
                </div>
            </div>
        `;

        return form;
    },

    /**
     * Get city name from section element
     * @param {HTMLElement} section - City section element
     * @returns {string} City name
     */
    getCityName(section) {
        const classList = Array.from(section.classList);
        return classList.find(cls => cls !== 'city-section') || 'unknown';
    },

    /**
     * Bind events for dynamic task functionality
     */
    bindEvents() {
        // Add task button clicks
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('add-task-btn')) {
                this.showTaskForm(e.target);
            }

            if (e.target.classList.contains('save-task-btn')) {
                this.saveNewTask(e.target);
            }

            if (e.target.classList.contains('cancel-task-btn')) {
                this.hideTaskForm(e.target);
            }

            if (e.target.classList.contains('edit-task-btn')) {
                this.editTask(e.target);
            }

            if (e.target.classList.contains('delete-task-btn')) {
                this.deleteTask(e.target);
            }
        });
    },

    /**
     * Show task form for a specific city
     * @param {HTMLElement} button - Add task button
     */
    showTaskForm(button) {
        const cityName = button.getAttribute('data-city');
        const form = document.querySelector(`.task-form[data-city="${cityName}"]`);
        
        if (form) {
            form.classList.remove('hidden');
            form.querySelector('.task-title-input').focus();
        }
    },

    /**
     * Hide task form
     * @param {HTMLElement} button - Cancel button
     */
    hideTaskForm(button) {
        const form = button.closest('.task-form');
        if (form) {
            form.classList.add('hidden');
            this.clearForm(form);
        }
    },

    /**
     * Clear form inputs
     * @param {HTMLElement} form - Task form element
     */
    clearForm(form) {
        form.querySelector('.task-title-input').value = '';
        form.querySelector('.task-description-input').value = '';
        form.querySelector('.task-time-input').value = '';
    },

    /**
     * Save new task
     * @param {HTMLElement} button - Save button
     */
    saveNewTask(button) {
        const form = button.closest('.task-form');
        const cityName = form.getAttribute('data-city');
        
        const title = form.querySelector('.task-title-input').value.trim();
        const description = form.querySelector('.task-description-input').value.trim();
        const time = form.querySelector('.task-time-input').value.trim();

        if (!title) {
            alert('Il titolo è obbligatorio!');
            return;
        }

        const taskData = {
            id: `custom_${cityName}_${this.taskIdCounter++}`,
            title,
            description,
            time,
            cityName,
            isCustom: true,
            createdAt: new Date().toISOString()
        };

        this.addTaskToDOM(taskData);
        this.customTasks.set(taskData.id, taskData);
        this.saveCustomTasks();
        
        // Update activity manager
        ActivityManager.countTotalActivities();
        ActivityManager.updateProgress();

        this.hideTaskForm(button);
    },

    /**
     * Add task to DOM
     * @param {Object} taskData - Task data object
     */
    addTaskToDOM(taskData) {
        const citySection = document.querySelector(`.city-section.${taskData.cityName}`);
        if (!citySection) return;

        const activityList = citySection.querySelector('.activity-list');
        
        const taskElement = document.createElement('li');
        taskElement.className = 'activity-item custom-task';
        taskElement.setAttribute('data-task-id', taskData.id);
        
        taskElement.innerHTML = `
            <input type="checkbox" class="activity-checkbox" data-activity-id="${taskData.id}">
            <div class="activity-content">
                <div class="activity-title">
                    ${taskData.title}
                    <span class="custom-task-label">PERSONALIZZATA</span>
                </div>
                ${taskData.description ? `<div class="activity-description">${taskData.description}</div>` : ''}
                ${taskData.time ? `<div class="activity-time">${taskData.time}</div>` : ''}
                <div class="task-controls">
                    <button class="edit-task-btn" data-task-id="${taskData.id}">✏️ Modifica</button>
                    <button class="delete-task-btn" data-task-id="${taskData.id}">🗑️ Elimina</button>
                </div>
            </div>
        `;

        activityList.appendChild(taskElement);

        // Bind activity manager events to new checkbox
        const checkbox = taskElement.querySelector('.activity-checkbox');
        checkbox.addEventListener('click', () => {
            ActivityManager.toggleActivity(checkbox, taskData.id);
        });
    },

    /**
     * Edit existing task
     * @param {HTMLElement} button - Edit button
     */
    editTask(button) {
        const taskId = button.getAttribute('data-task-id');
        const taskData = this.customTasks.get(taskId);
        
        if (!taskData) return;

        const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
        const activityContent = taskElement.querySelector('.activity-content');

        // Create edit form
        const editForm = document.createElement('div');
        editForm.className = 'edit-task-form';
        editForm.innerHTML = `
            <input type="text" class="edit-title-input" value="${taskData.title}" required>
            <textarea class="edit-description-input" rows="2">${taskData.description || ''}</textarea>
            <input type="text" class="edit-time-input" value="${taskData.time || ''}">
            <div class="edit-form-buttons">
                <button type="button" class="save-edit-btn" data-task-id="${taskId}">💾 Salva</button>
                <button type="button" class="cancel-edit-btn">❌ Annulla</button>
            </div>
        `;

        // Replace content with form
        const originalContent = activityContent.innerHTML;
        activityContent.innerHTML = '';
        activityContent.appendChild(editForm);

        // Bind form events
        editForm.querySelector('.save-edit-btn').addEventListener('click', () => {
            this.saveTaskEdit(taskId, editForm, activityContent);
        });

        editForm.querySelector('.cancel-edit-btn').addEventListener('click', () => {
            activityContent.innerHTML = originalContent;
            this.rebindTaskEvents(taskElement);
        });
    },

    /**
     * Save task edit
     * @param {string} taskId - Task ID
     * @param {HTMLElement} form - Edit form
     * @param {HTMLElement} contentElement - Activity content element
     */
    saveTaskEdit(taskId, form, contentElement) {
        const title = form.querySelector('.edit-title-input').value.trim();
        const description = form.querySelector('.edit-description-input').value.trim();
        const time = form.querySelector('.edit-time-input').value.trim();

        if (!title) {
            alert('Il titolo è obbligatorio!');
            return;
        }

        // Update task data
        const taskData = this.customTasks.get(taskId);
        taskData.title = title;
        taskData.description = description;
        taskData.time = time;
        taskData.updatedAt = new Date().toISOString();

        // Update DOM
        contentElement.innerHTML = `
            <div class="activity-title">
                ${taskData.title}
                <span class="custom-task-label">PERSONALIZZATA</span>
            </div>
            ${taskData.description ? `<div class="activity-description">${taskData.description}</div>` : ''}
            ${taskData.time ? `<div class="activity-time">${taskData.time}</div>` : ''}
            <div class="task-controls">
                <button class="edit-task-btn" data-task-id="${taskData.id}">✏️ Modifica</button>
                <button class="delete-task-btn" data-task-id="${taskData.id}">🗑️ Elimina</button>
            </div>
        `;

        this.rebindTaskEvents(contentElement.closest('.activity-item'));
        this.saveCustomTasks();
    },

    /**
     * Delete task
     * @param {HTMLElement} button - Delete button
     */
    deleteTask(button) {
        const taskId = button.getAttribute('data-task-id');
        
        if (confirm('Sei sicuro di voler eliminare questa attività personalizzata?')) {
            // Remove from DOM
            const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
            if (taskElement) {
                taskElement.remove();
            }

            // Remove from storage
            this.customTasks.delete(taskId);
            this.saveCustomTasks();

            // Update activity manager
            ActivityManager.countTotalActivities();
            ActivityManager.updateProgress();
        }
    },

    /**
     * Rebind events to task element
     * @param {HTMLElement} taskElement - Task element
     */
    rebindTaskEvents(taskElement) {
        const editBtn = taskElement.querySelector('.edit-task-btn');
        const deleteBtn = taskElement.querySelector('.delete-task-btn');
        
        if (editBtn) {
            editBtn.addEventListener('click', (e) => this.editTask(e.target));
        }
        if (deleteBtn) {
            deleteBtn.addEventListener('click', (e) => this.deleteTask(e.target));
        }
    },

    /**
     * Save custom tasks to localStorage
     */
    saveCustomTasks() {
        const tasksArray = Array.from(this.customTasks.entries());
        Storage.save('travel_app_custom_tasks', tasksArray);
    },

    /**
     * Load custom tasks from localStorage
     */
    loadCustomTasks() {
        const saved = Storage.load('travel_app_custom_tasks', []);
        this.customTasks = new Map(saved);
        
        // Get highest ID to continue counter
        let maxId = 0;
        this.customTasks.forEach((task, id) => {
            const matches = id.match(/custom_\w+_(\d+)/);
            if (matches) {
                maxId = Math.max(maxId, parseInt(matches[1]));
            }
        });
        this.taskIdCounter = maxId + 1;

        // Render saved tasks
        this.customTasks.forEach(taskData => {
            this.addTaskToDOM(taskData);
        });
    },

    /**
     * Get all custom tasks for a city
     * @param {string} cityName - City name
     * @returns {Array} Array of tasks for the city
     */
    getTasksForCity(cityName) {
        return Array.from(this.customTasks.values())
            .filter(task => task.cityName === cityName);
    },

    /**
     * Export custom tasks
     * @returns {Object} Export data
     */
    exportTasks() {
        return {
            customTasks: Array.from(this.customTasks.entries()),
            taskIdCounter: this.taskIdCounter,
            exportDate: new Date().toISOString()
        };
    },

    /**
     * Import custom tasks
     * @param {Object} data - Import data
     */
    importTasks(data) {
        if (data.customTasks) {
            this.customTasks = new Map(data.customTasks);
            this.taskIdCounter = data.taskIdCounter || this.taskIdCounter;
            
            // Clear existing custom tasks from DOM
            document.querySelectorAll('.custom-task').forEach(el => el.remove());
            
            // Render imported tasks
            this.customTasks.forEach(taskData => {
                this.addTaskToDOM(taskData);
            });
            
            this.saveCustomTasks();
        }
    }
};

export default DynamicTaskManager;