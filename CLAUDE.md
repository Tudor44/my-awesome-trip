# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML travel planner web application for a Summer 2025 trip through Croatia, Slovenia, and Italy. The application is a single-page travel guide with an interactive checklist for planning and tracking travel activities.

## Technology Stack

- **Frontend**: Pure HTML5, CSS3, and vanilla JavaScript
- **Styling**: CSS Grid and Flexbox layouts with custom CSS animations
- **No build system**: Direct HTML file can be opened in any browser
- **No dependencies**: Self-contained application with all assets inline

## File Structure

```
app_di_viaggio/
└── index.html    # Main application file containing all HTML, CSS, and JavaScript
```

## Development Workflow

### Running the Application
- Simply open `index.html` in any modern web browser
- No build process, server, or compilation required
- Works completely offline once loaded

### Development Commands
Since this is a static HTML application, there are no build, lint, or test commands. Development is done by:
1. Editing the `index.html` file directly
2. Refreshing the browser to see changes
3. Using browser developer tools for debugging

## Application Architecture

### Core Features
1. **Tab-based Navigation**: Four main sections (Itinerary, Photo Gallery, Phrases, Info)
2. **Interactive Checklist**: Progress tracking for travel activities
3. **Multi-language Phrases**: Italian, Croatian, Slovenian, and English translations
4. **Responsive Design**: Mobile-friendly layout with CSS media queries

### JavaScript Functions
- `showTab(tabName)`: Handles tab switching
- `toggleActivity(checkbox)`: Manages checklist state and progress
- `updateProgress()`: Calculates and displays completion percentage

### CSS Architecture
- **CSS Custom Properties**: Color theming with CSS variables
- **Component-based Classes**: Modular CSS for reusable components
- **Grid Layouts**: Photo gallery and phrase categories use CSS Grid
- **Animations**: CSS transitions and keyframe animations for interactions

### Data Structure
The travel data is hardcoded in HTML with structured sections:
- City sections with color-coded themes (Zagreb: red, Ljubljana: green, Trieste: yellow, Istria: blue)
- Activity items with checkboxes and time stamps
- Photo placeholders with descriptive information
- Phrase translations organized by category

## Making Changes

### Adding New Cities or Activities
1. Locate the appropriate city section in the HTML
2. Follow the existing `.activity-item` structure
3. Ensure proper class names for styling consistency

### Modifying Translations
1. Find the `.phrase-category` sections
2. Follow the three-column translation format (Croatian, Slovenian, English)
3. Maintain consistent `.phrase-lang` class structure

### Styling Updates
1. All CSS is contained within the `<style>` tag in the HTML head
2. CSS variables are defined in the `:root` selector for easy theming
3. Use existing class naming conventions for consistency

## Browser Compatibility

The application uses modern CSS features:
- CSS Grid and Flexbox
- CSS Custom Properties (variables)
- CSS Animations and Transitions

Supports all modern browsers (Chrome, Firefox, Safari, Edge) from 2018+.