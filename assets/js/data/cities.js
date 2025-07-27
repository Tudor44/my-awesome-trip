/**
 * City data module
 * Contains information about each destination
 */

export const cities = {
    zagreb: {
        id: 'zagreb',
        name: 'Zagabria',
        country: 'Croazia',
        emoji: '🏰',
        dates: '28-30 Agosto',
        description: 'Il cuore vibrante della Croazia',
        theme: {
            primary: '#FF0000',
            secondary: '#0093DD'
        },
        coordinates: {
            lat: 45.8150,
            lng: 15.9819
        },
        currency: 'EUR',
        language: 'Croatian',
        timezone: 'Europe/Zagreb'
    },

    ljubljana: {
        id: 'ljubljana',
        name: 'Lubiana',
        country: 'Slovenia',
        emoji: '🐉',
        dates: '30 Agosto - 1 Settembre',
        description: 'La capitale verde dei draghi',
        theme: {
            primary: '#78A22F',
            secondary: '#0079C1'
        },
        coordinates: {
            lat: 46.0569,
            lng: 14.5058
        },
        currency: 'EUR',
        language: 'Slovenian',
        timezone: 'Europe/Ljubljana'
    },

    trieste: {
        id: 'trieste',
        name: 'Trieste',
        country: 'Italia',
        emoji: '⚓',
        dates: '1-4 Settembre',
        description: 'Crogiolo di culture sul golfo',
        theme: {
            primary: '#FFD700',
            secondary: '#6F4E37'
        },
        coordinates: {
            lat: 45.6495,
            lng: 13.7768
        },
        currency: 'EUR',
        language: 'Italian',
        timezone: 'Europe/Rome'
    },

    istria: {
        id: 'istria',
        name: 'Istria',
        country: 'Slovenia/Croazia',
        emoji: '🏖️',
        dates: '3 Settembre',
        description: 'Penisola dalle influenze venete, slovene e croate',
        theme: {
            primary: '#016081',
            secondary: '#F5F5DC'
        },
        coordinates: {
            lat: 45.2396,
            lng: 13.9214
        },
        currency: 'EUR',
        language: 'Multiple',
        timezone: 'Europe/Zagreb'
    }
};

export const cityOrder = ['zagreb', 'ljubljana', 'trieste', 'istria'];

export default cities;