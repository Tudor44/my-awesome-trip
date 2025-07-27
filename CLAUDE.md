# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modular HTML5 travel planner web application for a Summer 2025 trip through Croatia, Slovenia, and Italy. The application features a modern, component-based architecture with interactive checklists, progress tracking, and multi-language phrase support.

## Technology Stack

- **Frontend**: HTML5, CSS3, and modern ES6+ JavaScript modules
- **Architecture**: Component-based modular design with ES6 imports
- **Styling**: Modular CSS with custom properties and responsive design
- **Storage**: Browser localStorage for state persistence
- **Build System**: None required - native ES6 modules

## File Structure

```
app_di_viaggio/
├── index.html                    # Main application entry point
├── assets/
│   ├── css/
│   │   ├── main.css             # Base styles and CSS variables
│   │   ├── components.css       # Component-specific styles
│   │   └── responsive.css       # Mobile and responsive styles
│   └── js/
│       ├── app.js               # Main application controller
│       ├── data/
│       │   ├── activities.js    # Activity data (legacy)
│       │   ├── cities.js        # City data (legacy)
│       │   ├── itinerary.js     # Complete itinerary data
│       │   └── phrases.js       # Phrase data (legacy)
│       └── modules/
│           ├── activities.js    # Activity management and progress tracking
│           ├── dynamicTasks.js  # Dynamic task management (disabled)
│           ├── itineraryRenderer.js  # Renders itinerary from data
│           ├── storage.js       # localStorage wrapper
│           └── tabs.js          # Tab navigation management
├── CLAUDE.md                    # This file
└── README.md                    # Project documentation
```

## Development Workflow

### Running the Application
- Open `index.html` in any modern web browser
- Supports live reloading during development
- Works completely offline once loaded
- No build process required

### Development Commands
This is a static application with no build system. Development workflow:
1. Edit HTML, CSS, or JavaScript files directly
2. Refresh browser to see changes
3. Use browser developer tools for debugging
4. Test across different devices using responsive design tools

## Application Architecture

### Core Features
1. **Modular Tab Navigation**: Four main sections with dynamic content loading
2. **Interactive Progress Tracking**: Real-time checklist with localStorage persistence
3. **Multi-language Support**: Croatian, Slovenian, and English phrase translations
4. **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
5. **Data-Driven Content**: Itinerary content generated from structured JavaScript data

### Main Application Class (`TravelApp`)
- **Singleton Pattern**: Single app instance with global access
- **Module Management**: Coordinates all feature modules
- **Event Handling**: Global keyboard shortcuts and custom events
- **Data Export/Import**: Backup and restore functionality

### Core Modules

#### `TabManager` (`assets/js/modules/tabs.js`)
- Handles tab switching and navigation
- URL state management with history API
- Custom event emission for tab changes

#### `ActivityManager` (`assets/js/modules/activities.js`)
- Manages checklist state and progress calculation
- localStorage persistence for completed activities
- Real-time progress bar updates with motivational messages

#### `ItineraryRenderer` (`assets/js/modules/itineraryRenderer.js`)
- Dynamically generates HTML from itinerary data
- City-specific theming and alerts
- Handles content updates and re-binding events

#### `Storage` (`assets/js/modules/storage.js`)
- localStorage wrapper with error handling
- Standardized storage keys and data validation
- Fallback for environments without localStorage

### CSS Architecture

#### CSS Custom Properties (Variables)
```css
:root {
  /* City-specific color themes */
  --zagreb-red: #FF0000;
  --ljubljana-green: #78A22F;
  --trieste-gold: #FFD700;
  --istria-blue: #016081;
  
  /* Spacing system */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  /* ... etc */
}
```

#### Component-Based Classes
- **Header Components**: `.header`, `.nav-tabs`, `.nav-tab`
- **Content Components**: `.tab-content`, `.city-section`, `.activity-item`
- **UI Components**: `.progress-bar`, `.photo-card`, `.phrase-category`
- **Utility Classes**: Spacing, display, and layout utilities

### Data Structure

#### Itinerary Data (`assets/js/data/itinerary.js`)
```javascript
const ITINERARY_DATA = {
  "zagreb": {
    "cityName": "Zagabria, Croazia",
    "cityIcon": "🏰",
    "dates": "28-30 Agosto",
    "theme": "zagreb",
    "activities": [...]
  }
  // ... other cities
};
```

## Making Changes

### Adding New Activities
1. Edit `assets/js/data/itinerary.js`
2. Add activity object to appropriate city's activities array
3. Follow existing activity structure with unique IDs

### Modifying Styles
1. **Base styles**: Edit `assets/css/main.css`
2. **Component styles**: Edit `assets/css/components.css`
3. **Responsive styles**: Edit `assets/css/responsive.css`
4. Use existing CSS variables for consistency

### Adding New Features
1. Create new module in `assets/js/modules/`
2. Import and initialize in `assets/js/app.js`
3. Follow existing module patterns and event-driven architecture

### Browser Developer Tools
- **Console Access**: `window.TravelApp.getInstance()` for debugging
- **Module Access**: `app.modules.activities`, `app.modules.tabs`, etc.
- **Data Export**: `app.exportData()` for backup
- **Data Import**: `app.importData(jsonString)` for restore

## Browser Compatibility

**Minimum Requirements:**
- ES6 Modules support (Chrome 61+, Firefox 60+, Safari 11+, Edge 16+)
- CSS Grid and Flexbox support
- localStorage API
- Modern DOM APIs

**Progressive Enhancement:**
- Graceful fallback for localStorage unavailability
- Responsive design for all screen sizes
- Touch-friendly interactions for mobile devices

## Performance Considerations

- **Lazy Loading**: Itinerary content generated on demand
- **Event Delegation**: Efficient event handling for dynamic content
- **Local Storage**: Minimal data persistence for fast loading
- **CSS Optimization**: Efficient selectors and minimal reflows