/**
 * Main application entry point
 * Initializes all modules and handles global app functionality
 */

import TabManager from './modules/tabs.js';
import ActivityManager from './modules/activities.js';
import Storage from './modules/storage.js';

class TravelApp {
    constructor() {
        this.modules = {};
        this.isInitialized = false;
    }

    /**
     * Initialize the application
     */
    async init() {
        try {
            console.log('🚀 Initializing Travel App...');
            
            // Check if localStorage is available
            if (!Storage.isAvailable()) {
                console.warn('⚠️ localStorage not available. Some features may not work.');
            }

            // Initialize core modules
            this.initModules();
            
            // Bind global events
            this.bindGlobalEvents();
            
            // Add interactive effects
            this.addInteractiveEffects();
            
            this.isInitialized = true;
            console.log('✅ Travel App initialized successfully');
            
            // Emit app ready event
            document.dispatchEvent(new CustomEvent('appReady'));
            
        } catch (error) {
            console.error('❌ Error initializing Travel App:', error);
        }
    }

    /**
     * Initialize all app modules
     */
    initModules() {
        // Initialize tab management
        this.modules.tabs = TabManager;
        TabManager.init();

        // Initialize activity management
        this.modules.activities = ActivityManager;
        ActivityManager.init();
    }

    /**
     * Bind global application events
     */
    bindGlobalEvents() {
        // Handle browser back/forward navigation
        window.addEventListener('popstate', (e) => {
            if (e.state && e.state.tab) {
                TabManager.showTab(e.state.tab);
            }
        });

        // Handle visibility change (when user switches tabs/apps)
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden) {
                // App became visible again - could refresh data here
                console.log('App became visible');
            }
        });

        // Global keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            this.handleKeyboardShortcuts(e);
        });

        // Listen for module events
        document.addEventListener('tabChanged', (e) => {
            console.log('Tab changed to:', e.detail.tabName);
            // Update URL without page reload for better UX
            if (history.pushState) {
                const newUrl = `${window.location.pathname}#${e.detail.tabName}`;
                history.pushState({ tab: e.detail.tabName }, '', newUrl);
            }
        });

        document.addEventListener('activityToggled', (e) => {
            console.log('Activity toggled:', e.detail);
        });
    }

    /**
     * Handle keyboard shortcuts
     * @param {KeyboardEvent} e - Keyboard event
     */
    handleKeyboardShortcuts(e) {
        // Ctrl/Cmd + number keys to switch tabs
        if ((e.ctrlKey || e.metaKey) && e.key >= '1' && e.key <= '4') {
            e.preventDefault();
            const tabs = ['itinerary', 'photos', 'phrases', 'info'];
            const tabIndex = parseInt(e.key) - 1;
            if (tabs[tabIndex]) {
                TabManager.showTab(tabs[tabIndex]);
            }
        }

        // Escape key to close any open modals/overlays (for future use)
        if (e.key === 'Escape') {
            document.dispatchEvent(new CustomEvent('escapePressed'));
        }
    }

    /**
     * Add interactive effects to UI elements
     */
    addInteractiveEffects() {
        // Photo card click effects
        document.querySelectorAll('.photo-card').forEach(card => {
            card.addEventListener('click', function() {
                this.style.transform = 'scale(1.02)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 200);
            });
        });

        // Phrase click effects (simulate text-to-speech)
        document.querySelectorAll('.phrase-lang').forEach(phrase => {
            phrase.addEventListener('click', function() {
                const originalBg = this.style.background;
                const originalColor = this.style.color;
                
                this.style.background = '#4CAF50';
                this.style.color = 'white';
                
                setTimeout(() => {
                    this.style.background = originalBg;
                    this.style.color = originalColor;
                }, 500);

                // Future: Could add actual text-to-speech here
                console.log('Phrase clicked:', this.textContent);
            });
        });
    }

    /**
     * Get app instance for debugging
     */
    static getInstance() {
        if (!window._travelApp) {
            window._travelApp = new TravelApp();
        }
        return window._travelApp;
    }

    /**
     * Export app data (for backup/sharing)
     */
    exportData() {
        const data = {
            activities: Storage.load(Storage.KEYS.ACTIVITIES, []),
            budget: Storage.load(Storage.KEYS.BUDGET, {}),
            preferences: Storage.load(Storage.KEYS.PREFERENCES, {}),
            exportDate: new Date().toISOString()
        };
        
        return JSON.stringify(data, null, 2);
    }

    /**
     * Import app data (for restore)
     * @param {string} jsonData - JSON string with app data
     */
    importData(jsonData) {
        try {
            const data = JSON.parse(jsonData);
            
            if (data.activities) {
                Storage.save(Storage.KEYS.ACTIVITIES, data.activities);
            }
            if (data.budget) {
                Storage.save(Storage.KEYS.BUDGET, data.budget);
            }
            if (data.preferences) {
                Storage.save(Storage.KEYS.PREFERENCES, data.preferences);
            }
            
            // Reinitialize to reflect imported data
            this.init();
            
            return true;
        } catch (error) {
            console.error('Error importing data:', error);
            return false;
        }
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const app = TravelApp.getInstance();
    app.init();
});

// Make app available globally for debugging
window.TravelApp = TravelApp;

export default TravelApp;