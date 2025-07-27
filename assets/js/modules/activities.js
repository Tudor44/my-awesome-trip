/**
 * Activities module
 * Handles activity checklist functionality and progress tracking
 */

import Storage from './storage.js';

const ActivityManager = {
    completedActivities: new Set(),
    totalActivities: 0,

    /**
     * Initialize activity functionality
     */
    init() {
        this.loadCompletedActivities();
        this.countTotalActivities();
        this.bindEvents();
        this.updateProgress();
    },

    /**
     * Bind click events to activity checkboxes
     */
    bindEvents() {
        const checkboxes = document.querySelectorAll('.activity-checkbox');
        checkboxes.forEach((checkbox, index) => {
            // Set unique ID for each activity
            const activityId = checkbox.getAttribute('data-activity-id') || `activity_${index}`;
            checkbox.setAttribute('data-activity-id', activityId);
            
            checkbox.addEventListener('click', () => {
                this.toggleActivity(checkbox, activityId);
            });
        });
    },

    /**
     * Toggle activity completion status
     * @param {HTMLElement} checkbox - Checkbox element
     * @param {string} activityId - Unique activity identifier
     */
    toggleActivity(checkbox, activityId) {
        checkbox.classList.toggle('checked');
        
        if (checkbox.classList.contains('checked')) {
            this.completedActivities.add(activityId);
        } else {
            this.completedActivities.delete(activityId);
        }

        this.updateProgress();
        this.saveCompletedActivities();

        // Emit custom event
        document.dispatchEvent(new CustomEvent('activityToggled', {
            detail: { 
                activityId, 
                completed: checkbox.classList.contains('checked'),
                totalCompleted: this.completedActivities.size,
                totalActivities: this.totalActivities
            }
        }));
    },

    /**
     * Update progress bar and text
     */
    updateProgress() {
        const percentage = Math.round((this.completedActivities.size / this.totalActivities) * 100);
        const progressBar = document.getElementById('progressBar');
        const progressText = document.getElementById('progressText');

        if (progressBar) {
            progressBar.style.width = percentage + '%';
        }

        if (progressText) {
            let message = this.getProgressMessage(percentage);
            progressText.textContent = message;
        }
    },

    /**
     * Get progress message based on percentage
     * @param {number} percentage - Completion percentage
     * @returns {string} Progress message
     */
    getProgressMessage(percentage) {
        if (percentage === 0) {
            return '0% completato - Il viaggio inizia tra poco! 🎒';
        } else if (percentage < 25) {
            return `${percentage}% completato - Primi passi verso l'avventura! 🚀`;
        } else if (percentage < 50) {
            return `${percentage}% completato - A metà strada! 💪`;
        } else if (percentage < 75) {
            return `${percentage}% completato - Stai facendo benissimo! 🌟`;
        } else if (percentage < 100) {
            return `${percentage}% completato - Quasi alla fine! 🎯`;
        } else {
            return '🎉 Complimenti! Hai completato tutto il viaggio! 🎉';
        }
    },

    /**
     * Count total number of activities
     */
    countTotalActivities() {
        this.totalActivities = document.querySelectorAll('.activity-checkbox').length;
    },

    /**
     * Save completed activities to localStorage
     */
    saveCompletedActivities() {
        const activitiesArray = Array.from(this.completedActivities);
        Storage.save(Storage.KEYS.ACTIVITIES, activitiesArray);
    },

    /**
     * Load completed activities from localStorage
     */
    loadCompletedActivities() {
        const saved = Storage.load(Storage.KEYS.ACTIVITIES, []);
        this.completedActivities = new Set(saved);
        
        // Update UI based on saved state
        document.querySelectorAll('.activity-checkbox').forEach((checkbox, index) => {
            const activityId = checkbox.getAttribute('data-activity-id') || `activity_${index}`;
            if (this.completedActivities.has(activityId)) {
                checkbox.classList.add('checked');
            }
        });
    },

    /**
     * Get completion statistics
     * @returns {Object} Stats object with completed, total, and percentage
     */
    getStats() {
        return {
            completed: this.completedActivities.size,
            total: this.totalActivities,
            percentage: Math.round((this.completedActivities.size / this.totalActivities) * 100)
        };
    },

    /**
     * Reset all activities (uncheck all)
     */
    resetAll() {
        this.completedActivities.clear();
        document.querySelectorAll('.activity-checkbox').forEach(checkbox => {
            checkbox.classList.remove('checked');
        });
        this.updateProgress();
        this.saveCompletedActivities();
    },

    /**
     * Mark all activities as completed
     */
    completeAll() {
        document.querySelectorAll('.activity-checkbox').forEach((checkbox, index) => {
            const activityId = checkbox.getAttribute('data-activity-id') || `activity_${index}`;
            checkbox.classList.add('checked');
            this.completedActivities.add(activityId);
        });
        this.updateProgress();
        this.saveCompletedActivities();
    }
};

export default ActivityManager;