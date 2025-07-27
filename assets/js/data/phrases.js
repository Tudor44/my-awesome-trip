/**
 * Phrases data module
 * Contains translations organized by category
 */

export const phraseCategories = {
    hotel: {
        id: 'hotel',
        name: 'Hotel & Alloggio',
        emoji: '🏨',
        phrases: [
            {
                id: 'reservation',
                italian: 'Ho una prenotazione',
                croatian: 'Imam rezervaciju',
                slovenian: 'Imam rezervacijo',
                english: 'I have a reservation'
            },
            {
                id: 'rooms_available',
                italian: 'Avete camere disponibili?',
                croatian: 'Imate li slobodne sobe?',
                slovenian: 'Imate proste sobe?',
                english: 'Do you have available rooms?'
            },
            {
                id: 'checkout_time',
                italian: 'A che ora è il check-out?',
                croatian: 'Kad je odjava?',
                slovenian: 'Kdaj je odjava?',
                english: 'What time is check-out?'
            }
        ]
    },

    restaurant: {
        id: 'restaurant',
        name: 'Ristorante & Cibo',
        emoji: '🍽️',
        phrases: [
            {
                id: 'table_for_two',
                italian: 'Un tavolo per due, per favore',
                croatian: 'Stol za dvoje, molim',
                slovenian: 'Mizo za dva, prosim',
                english: 'A table for two, please'
            },
            {
                id: 'vegetarian',
                italian: 'Sono vegetariano/a',
                croatian: 'Vegetarijanac/ka sam',
                slovenian: 'Sem vegetarijanec/ka',
                english: 'I\'m vegetarian'
            },
            {
                id: 'bill_please',
                italian: 'Il conto, per favore',
                croatian: 'Račun, molim',
                slovenian: 'Račun, prosim',
                english: 'The bill, please'
            },
            {
                id: 'delicious',
                italian: 'È delizioso!',
                croatian: 'Jako je ukusno!',
                slovenian: 'Zelo okusno!',
                english: 'It\'s delicious!'
            }
        ]
    },

    transport: {
        id: 'transport',
        name: 'Trasporti',
        emoji: '🚌',
        phrases: [
            {
                id: 'station_location',
                italian: 'Dove si trova la stazione?',
                croatian: 'Gdje je kolodvor?',
                slovenian: 'Kje je postaja?',
                english: 'Where is the station?'
            },
            {
                id: 'ticket_to',
                italian: 'Un biglietto per...',
                croatian: 'Jednu kartu za...',
                slovenian: 'Eno vozovnico za...',
                english: 'One ticket to...'
            },
            {
                id: 'next_bus',
                italian: 'Quando parte il prossimo autobus?',
                croatian: 'Kad polazi sljedeći autobus?',
                slovenian: 'Kdaj vozi naslednji avtobus?',
                english: 'When does the next bus leave?'
            }
        ]
    },

    emergency: {
        id: 'emergency',
        name: 'Emergenze',
        emoji: '🆘',
        phrases: [
            {
                id: 'help',
                italian: 'Aiuto!',
                croatian: 'Upomoć!',
                slovenian: 'Na pomoč!',
                english: 'Help!'
            },
            {
                id: 'call_doctor',
                italian: 'Chiamate un dottore',
                croatian: 'Pozovite doktora',
                slovenian: 'Pokličite zdravnika',
                english: 'Call a doctor'
            },
            {
                id: 'hospital_location',
                italian: 'Dov\'è l\'ospedale?',
                croatian: 'Gdje je bolnica?',
                slovenian: 'Kje je bolnišnica?',
                english: 'Where is the hospital?'
            }
        ]
    },

    courtesy: {
        id: 'courtesy',
        name: 'Cortesia Base',
        emoji: '💝',
        phrases: [
            {
                id: 'hello',
                italian: 'Ciao / Buongiorno',
                croatian: 'Bok / Dobar dan',
                slovenian: 'Živjo / Dober dan',
                english: 'Hi / Good day'
            },
            {
                id: 'please',
                italian: 'Per favore',
                croatian: 'Molim',
                slovenian: 'Prosim',
                english: 'Please'
            },
            {
                id: 'thank_you',
                italian: 'Grazie',
                croatian: 'Hvala',
                slovenian: 'Hvala',
                english: 'Thank you'
            },
            {
                id: 'excuse_me',
                italian: 'Mi scusi',
                croatian: 'Oprostite',
                slovenian: 'Oprostite',
                english: 'Excuse me'
            }
        ]
    },

    shopping: {
        id: 'shopping',
        name: 'Shopping & Direzioni',
        emoji: '🛍️',
        phrases: [
            {
                id: 'how_much',
                italian: 'Quanto costa?',
                croatian: 'Koliko košta?',
                slovenian: 'Koliko stane?',
                english: 'How much does it cost?'
            },
            {
                id: 'where_is',
                italian: 'Dov\'è...?',
                croatian: 'Gdje je...?',
                slovenian: 'Kje je...?',
                english: 'Where is...?'
            },
            {
                id: 'dont_speak',
                italian: 'Non parlo croato/sloveno',
                croatian: 'Ne govorim hrvatski',
                slovenian: 'Ne govorim slovensko',
                english: 'I don\'t speak Croatian/Slovenian'
            }
        ]
    }
};

export const categoryOrder = ['courtesy', 'hotel', 'restaurant', 'transport', 'shopping', 'emergency'];

export const languages = {
    italian: { name: 'Italiano', code: 'it', flag: '🇮🇹' },
    croatian: { name: 'Croato', code: 'hr', flag: '🇭🇷' },
    slovenian: { name: 'Sloveno', code: 'sl', flag: '🇸🇮' },
    english: { name: 'Inglese', code: 'en', flag: '🇬🇧' }
};

/**
 * Get all phrases as a flat array for searching
 * @returns {Array} Array of phrase objects with category info
 */
export function getAllPhrases() {
    const allPhrases = [];
    
    Object.values(phraseCategories).forEach(category => {
        category.phrases.forEach(phrase => {
            allPhrases.push({
                ...phrase,
                categoryId: category.id,
                categoryName: category.name,
                categoryEmoji: category.emoji
            });
        });
    });
    
    return allPhrases;
}

/**
 * Search phrases by text
 * @param {string} searchTerm - Text to search for
 * @param {string} language - Language to search in (optional)
 * @returns {Array} Matching phrases
 */
export function searchPhrases(searchTerm, language = null) {
    const allPhrases = getAllPhrases();
    const term = searchTerm.toLowerCase().trim();
    
    if (!term) return allPhrases;
    
    return allPhrases.filter(phrase => {
        const searchableFields = language 
            ? [phrase[language]] 
            : [phrase.italian, phrase.croatian, phrase.slovenian, phrase.english];
            
        return searchableFields.some(field => 
            field && field.toLowerCase().includes(term)
        );
    });
}

export default phraseCategories;