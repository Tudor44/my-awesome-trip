/**
 * Itinerary Renderer module
 * Renders itinerary sections dynamically from data instead of hardcoded HTML
 */

import ITINERARY_DATA, { getAllCities, getCityInfo, getActivitiesForCity } from '../data/itinerary.js';

const ItineraryRenderer = {
    /**
     * Initialize itinerary rendering
     */
    init() {
        this.renderItinerary();
    },

    /**
     * Render the complete itinerary from data
     */
    renderItinerary() {
        const itineraryContainer = document.getElementById('itinerary');
        if (!itineraryContainer) {
            console.warn('Itinerary container not found');
            return;
        }

        // Clear existing content (keeping only progress section)
        const existingCitySections = itineraryContainer.querySelectorAll('.city-section');
        existingCitySections.forEach(section => section.remove());

        // Render each city
        const cities = getAllCities();
        cities.forEach(cityKey => {
            const citySection = this.createCitySection(cityKey);
            itineraryContainer.appendChild(citySection);
        });
    },

    /**
     * Create a city section element
     * @param {string} cityKey - City key
     * @returns {HTMLElement} City section element
     */
    createCitySection(cityKey) {
        const cityInfo = getCityInfo(cityKey);
        const activities = getActivitiesForCity(cityKey);

        const section = document.createElement('div');
        section.className = `city-section ${cityInfo.theme}`;

        // City header
        const header = this.createCityHeader(cityInfo);
        section.appendChild(header);

        // Alert section if exists
        if (cityInfo.alert) {
            const alert = this.createAlertSection(cityInfo.alert);
            section.appendChild(alert);
        }

        // Activities list
        const activitiesList = this.createActivitiesList(activities);
        section.appendChild(activitiesList);

        return section;
    },

    /**
     * Create city header
     * @param {Object} cityInfo - City information
     * @returns {HTMLElement} Header element
     */
    createCityHeader(cityInfo) {
        const header = document.createElement('div');
        header.innerHTML = `
            <h2 class="city-title ${cityInfo.theme}">
                ${cityInfo.cityIcon} ${cityInfo.cityName}
            </h2>
            <p><strong>${cityInfo.dates}</strong> • ${cityInfo.description}</p>
        `;
        return header;
    },

    /**
     * Create alert section
     * @param {Object} alertInfo - Alert information
     * @returns {HTMLElement} Alert element
     */
    createAlertSection(alertInfo) {
        const alert = document.createElement('div');
        alert.className = 'alert';
        
        const content = Array.isArray(alertInfo.content) 
            ? alertInfo.content.join('<br>')
            : alertInfo.content;
        
        alert.innerHTML = `
            <div class="alert-title">${alertInfo.title}</div>
            <div>${content}</div>
        `;
        
        return alert;
    },

    /**
     * Create activities list
     * @param {Array} activities - Array of activities
     * @returns {HTMLElement} Activities list element
     */
    createActivitiesList(activities) {
        const list = document.createElement('ul');
        list.className = 'activity-list';

        activities.forEach(activity => {
            const activityItem = this.createActivityItem(activity);
            list.appendChild(activityItem);
        });

        return list;
    },

    /**
     * Create single activity item
     * @param {Object} activity - Activity data
     * @returns {HTMLElement} Activity item element
     */
    createActivityItem(activity) {
        const item = document.createElement('li');
        item.className = 'activity-item';

        item.innerHTML = `
            <input type="checkbox" class="activity-checkbox" data-activity-id="${activity.id}">
            <div class="activity-content">
                <div class="activity-title">${activity.title}</div>
                <div class="activity-description">${activity.description}</div>
                <div class="activity-time">${activity.time}</div>
                <div class="activity-type">${activity.activity_type}</div>
            </div>
        `;

        return item;
    },

    /**
     * Add activity to existing city section
     * @param {string} cityKey - City key
     * @param {Object} activity - Activity data
     */
    addActivityToCity(cityKey, activity) {
        const citySection = document.querySelector(`.city-section.${cityKey}`);
        if (!citySection) {
            console.warn(`City section for ${cityKey} not found`);
            return;
        }

        const activityList = citySection.querySelector('.activity-list');
        if (!activityList) {
            console.warn(`Activity list for ${cityKey} not found`);
            return;
        }

        const activityItem = this.createActivityItem(activity);
        activityList.appendChild(activityItem);
    },

    /**
     * Remove activity from city section
     * @param {string} activityId - Activity ID
     */
    removeActivity(activityId) {
        const activityElement = document.querySelector(`[data-activity-id="${activityId}"]`);
        if (activityElement) {
            const activityItem = activityElement.closest('.activity-item');
            if (activityItem) {
                activityItem.remove();
            }
        }
    },

    /**
     * Update activity in city section
     * @param {string} activityId - Activity ID
     * @param {Object} updatedActivity - Updated activity data
     */
    updateActivity(activityId, updatedActivity) {
        const activityElement = document.querySelector(`[data-activity-id="${activityId}"]`);
        if (!activityElement) {
            console.warn(`Activity ${activityId} not found`);
            return;
        }

        const activityContent = activityElement.nextElementSibling;
        if (activityContent && activityContent.classList.contains('activity-content')) {
            activityContent.innerHTML = `
                <div class="activity-title">${updatedActivity.title}</div>
                <div class="activity-description">${updatedActivity.description}</div>
                <div class="activity-time">${updatedActivity.time}</div>
            `;
        }
    },

    /**
     * Get all rendered activities
     * @returns {Array} Array of activity elements
     */
    getRenderedActivities() {
        return Array.from(document.querySelectorAll('.activity-checkbox'));
    },

    /**
     * Refresh the itinerary rendering
     */
    refresh() {
        this.renderItinerary();
        
        // Emit event to notify other modules
        document.dispatchEvent(new CustomEvent('itineraryRendered', {
            detail: { timestamp: new Date().toISOString() }
        }));
    }
};

export default ItineraryRenderer;