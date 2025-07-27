/**
 * Tab navigation module
 * Handles switching between different sections of the app
 */

import Storage from './storage.js';

const TabManager = {
    activeTab: 'itinerary',
    
    /**
     * Initialize tab functionality
     */
    init() {
        this.bindEvents();
        this.loadActiveTab();
    },

    /**
     * Bind click events to tab buttons
     */
    bindEvents() {
        const tabButtons = document.querySelectorAll('.nav-tab');
        tabButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const tabName = e.target.getAttribute('data-tab');
                if (tabName) {
                    this.showTab(tabName);
                }
            });
        });
    },

    /**
     * Show a specific tab
     * @param {string} tabName - Name of the tab to show
     */
    showTab(tabName) {
        // Hide all tabs
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });

        // Remove active class from all nav tabs
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.classList.remove('active');
        });

        // Show selected tab
        const targetTab = document.getElementById(tabName);
        if (targetTab) {
            targetTab.classList.add('active');
        }

        // Add active class to clicked nav tab
        const activeNavTab = document.querySelector(`[data-tab="${tabName}"]`);
        if (activeNavTab) {
            activeNavTab.classList.add('active');
        }

        // Update active tab and save preference
        this.activeTab = tabName;
        this.saveActiveTab();

        // Emit custom event for other modules to listen
        document.dispatchEvent(new CustomEvent('tabChanged', { 
            detail: { tabName } 
        }));
    },

    /**
     * Save active tab to localStorage
     */
    saveActiveTab() {
        const preferences = Storage.load(Storage.KEYS.PREFERENCES, {});
        preferences.activeTab = this.activeTab;
        Storage.save(Storage.KEYS.PREFERENCES, preferences);
    },

    /**
     * Load and restore the last active tab
     */
    loadActiveTab() {
        const preferences = Storage.load(Storage.KEYS.PREFERENCES, {});
        const savedTab = preferences.activeTab || 'itinerary';
        this.showTab(savedTab);
    },

    /**
     * Get currently active tab
     * @returns {string} Active tab name
     */
    getActiveTab() {
        return this.activeTab;
    }
};

export default TabManager;