/**
 * Preinstalled itinerary data
 * Contains all default activities organized by city
 */

const ITINERARY_DATA = {
    "zagreb": {
        "cityName": "Zagabria, Croazia",
        "cityIcon": "🏰",
        "dates": "28-30 Agosto",
        "description": "Il cuore vibrante della Croazia",
        "theme": "zagreb",
        "activities": [
            {
                "id": "zagreb_0",
                "title": "Arrivo aeroporto e transfer in centro",
                "description": "Bus Croatia Airlines (30-40 min, 4€) fino a Piazza Ban Jelačić",
                "time": "28 Agosto - Mattina",
                "activity_type": "visit"
            },
            {
                "id": "zagreb_0_5",
                "title": "Pranzo tradizionale croato",
                "description": "Primi sapori locali: štrukli (pasta ripiena), oppure čevapi da Rubelj, entrambi vicino alla piazza.",
                "time": "28 Agosto - Pranzo",
                "activity_type": "food"
            },
            {
                "id": "zagreb_1",
                "title": "Passeggiata serale a Via Tkalčića",
                "description": "Pomeriggio/Serata post check-in: immersione nella vita notturna zagabrese. Per cena, prova Mali Medo per birra artigianale e Ćevapčići.",
                "time": "28 Agosto - Sera",
                "activity_type": "food"
            },
            {
                "id": "zagreb_1_5",
                "title": "Cena Tradizionale",
                "description": "Per una cena più tradizionale, prova Stari Fijaker (cucina dello Zagorje) o Konoba Didov San (cucina dalmata).",
                "time": "28 Agosto - Cena",
                "activity_type": "food"
            },
            {
                "id": "zagreb_2",
                "title": "Mercato di Dolac",
                "description": "Visita mattutina al \"ventre di Zagabria\" con i suoi iconici ombrelloni rossi",
                "time": "29 Agosto - Mattina",
                "activity_type": "visit"
            },
            {
                "id": "zagreb_3",
                "title": "Cattedrale di Zagabria (esterno)",
                "description": "⚠️ Interno chiuso per restauri post-terremoto. Vista esterna delle guglie gotiche",
                "time": "29 Agosto - Mattina",
                "activity_type": "visit"
            },
            {
                "id": "zagreb_4",
                "title": "Funicolare storica",
                "description": "Salita alla Città Alta con la funicolare del 1890 (66 metri, 64 secondi)",
                "time": "29 Agosto - Pomeriggio",
                "activity_type": "visit"
            },
            {
                "id": "zagreb_5",
                "title": "Chiesa di San Marco",
                "description": "Il famoso tetto con stemmi colorati di Croazia, Dalmazia e Slavonia",
                "time": "29 Agosto - Pomeriggio",
                "activity_type": "visit"
            },
            {
                "id": "zagreb_6",
                "title": "Museo delle Relazioni Interrotte",
                "description": "Esperienza emotivamente coinvolgente con oggetti e storie di relazioni finite",
                "time": "29 Agosto - Pomeriggio",
                "activity_type": "visit"
            },
            {
                "id": "zagreb_7",
                "title": "Strossmayer Promenade",
                "description": "Vista panoramica sui tetti rossi della Città Bassa",
                "time": "29 Agosto - Pomeriggio",
                "activity_type": "visit"
            },
            {
                "id": "zagreb_8",
                "title": "Scelta finale: Arte, Natura o Storia",
                "description": "Museo d'Arte Naïf, Giardino Botanico o Tunnel Grič",
                "time": "30 Agosto - Mattina",
                "activity_type": "visit"
            }
        ]
    },
    "ljubljana": {
        "cityName": "Lubiana, Slovenia",
        "cityIcon": "🐉",
        "dates": "30 Agosto - 1 Settembre",
        "description": "La capitale verde dei draghi",
        "theme": "ljubljana",
        "activities": [
            {
                "id": "ljubljana_1",
                "title": "Piazza Prešeren e Triplo Ponte",
                "description": "Il capolavoro di Plečnik: da un ponte ottocentesco a tre corsie pedanali",
                "time": "30 Agosto - Sera",
                "activity_type": "visit"
            },
            {
                "id": "ljubljana_2",
                "title": "Mercato Centrale di Plečnik",
                "description": "Colonnato rinascimentale e mercato coperto lungo il fiume",
                "time": "31 Agosto - Mattina",
                "activity_type": "food"
            },
            {
                "id": "ljubljana_2_5",
                "title": "Cena Slovena",
                "description": "Esplora la cucina slovena da **Julija Restaurant** (elegante), **Druga Violina** (progetto sociale) o **Gostilna Šestica** (la più antica trattoria).",
                "time": "31 Agosto - Sera",
                "activity_type": "food"
            },
            {
                "id": "ljubljana_3",
                "title": "Ponte dei Draghi",
                "description": "Quattro draghi in bronzo guardiani della città, simbolo di Lubiana",
                "time": "31 Agosto - Mattina",
                "activity_type": "visit"
            },
            {
                "id": "ljubljana_4",
                "title": "Cattedrale di San Nicola",
                "description": "Arte barocca slovena con porte in bronzo del 1996",
                "time": "31 Agosto - Mattina",
                "activity_type": "visit"
            },
            {
                "id": "ljubljana_5",
                "title": "Castello di Lubiana",
                "description": "Salita in funicolare e vista panoramica a 360° dalla Torre di Avvistamento",
                "time": "31 Agosto - Pomeriggio",
                "activity_type": "visit"
            },
            {
                "id": "ljubljana_6",
                "title": "Metelkova Mesto",
                "description": "Centro culturale alternativo in ex-caserme austro-ungariche",
                "time": "31 Agosto - Sera",
                "activity_type": "visit"
            },
            {
                "id": "ljubljana_7",
                "title": "Biblioteca Nazionale (NUK) o Parco Tivoli",
                "description": "Capolavoro di Plečnik o passeggiata nel polmone verde della città",
                "time": "1 Settembre - Mattina",
                "activity_type": "visit"
            }
        ]
    },
    "trieste": {
        "cityName": "Trieste, Italia",
        "cityIcon": "⚓",
        "dates": "1-4 Settembre",
        "description": "Crogiolo di culture sul golfo",
        "theme": "trieste",
        "activities": [
            {
                "id": "trieste_1",
                "title": "Canal Grande e Borgo Teresiano",
                "description": "Architettura neoclassica voluta da Maria Teresa d'Austria",
                "time": "1 Settembre - Sera",
                "activity_type": "visit"
            },
            {
                "id": "trieste_2",
                "title": "Piazza Unità d'Italia",
                "description": "La più grande piazza d'Europa che si affaccia direttamente sul mare. Per cena, esplora la Cittàvecchia da **Al Petes** o prova la cucina di pesce di **Hostaria Malcanton**.",
                "time": "1 Settembre - Sera",
                "activity_type": "visit"
            },
            {
                "id": "trieste_3",
                "title": "Colle di San Giusto",
                "description": "Cattedrale con mosaici bizantini e Castello con vista panoramica",
                "time": "2 Settembre - Mattina",
                "activity_type": "visit"
            },
            {
                "id": "trieste_4",
                "title": "Castello di Miramare",
                "description": "Residenza dell'Arciduca Massimiliano d'Asburgo a picco sul mare. Per cena, prova le ricette tipiche dell'Antica Trattoria Suban",
                "time": "2 Settembre - Pomeriggio",
                "activity_type": "visit"
            },
            {
                "id": "trieste_5",
                "title": "Passeggiata letteraria o Museo Revoltella",
                "description": "Statue di Joyce, Svevo e Saba o arte moderna e contemporanea. Per un ultimo pranzo, fermati in un buffet storico come il Vecio Buffet Marascutti per assaggiare la 'jota' o la 'porcina'.",
                "time": "4 Settembre - Mattina",
                "activity_type": "visit"
            }
        ]
    },
    "istria": {
        "cityName": "Escursione in Istria",
        "cityIcon": "🏖️",
        "dates": "3 Settembre",
        "description": "Penisola dalle influenze venete, slovene e croate",
        "theme": "istria",
        "alert": {
            "title": "⚠️ Importante per l'auto a noleggio",
            "content": [
                "• Vignetta slovena obbligatoria: €16 per 7 giorni",
                "• Documenti: patente, carta circolazione, assicurazione",
                "• Informare il noleggio dell'attraversamento confini"
            ]
        },
        "activities": [
            {
                "id": "istria_1",
                "title": "Noleggio auto e partenza",
                "description": "Ritiro auto e acquisto vignetta slovena online",
                "time": "8:30 - Partenza",
                "activity_type": "visit"
            },
            {
                "id": "istria_2",
                "title": "Pirano, Slovenia",
                "description": "Centro storico veneziano e Piazza Tartini (40 km, 45 min)",
                "time": "9:15 - Mattina",
                "activity_type": "visit"
            },
            {
                "id": "istria_3",
                "title": "Rovigno, Croazia",
                "description": "La perla dell'Istria: centro storico arroccato e Chiesa di S. Eufemia. Per pranzo, prova **Konoba Kantinon** per la cucina locale o la vista mare di Maestral.",
                "time": "10:30 - Pranzo",
                "activity_type": "food"
            },
            {
                "id": "istria_3_5",
                "title": "Cena a Rovigno (Opzionale)",
                "description": "Se decidi di trattenerti, cena da Puntulina per la vista o da Giannino per il pesce freschissimo.",
                "time": "3 Settembre - Cena",
                "activity_type": "food"
            },
            {
                "id": "istria_4",
                "title": "Pola, Croazia",
                "description": "Anfiteatro Romano (tra i 6 più grandi al mondo) e Arco dei Sergi",
                "time": "15:00 - Pomeriggio",
                "activity_type": "visit"
            },
            {
                "id": "istria_5",
                "title": "Rientro a Trieste",
                "description": "120 km, circa 1h45min di viaggio",
                "time": "17:00 - Sera",
                "activity_type": "visit"
            }
        ]
    }
};

/**
 * Get all activities from all cities
 * @returns {Array} Array of all activities
 */
export function getAllActivities()
{
    const allActivities = [];
    Object.values(ITINERARY_DATA).forEach(city =>
    {
        allActivities.push(...city.activities);
    });
    return allActivities;
}

/**
 * Get activities for a specific city
 * @param {string} cityKey - City key (zagreb, ljubljana, trieste, istria)
 * @returns {Array} Array of activities for the city
 */
export function getActivitiesForCity(cityKey)
{
    return ITINERARY_DATA[cityKey]?.activities || [];
}

/**
 * Get city information
 * @param {string} cityKey - City key
 * @returns {Object} City information object
 */
export function getCityInfo(cityKey)
{
    const city = ITINERARY_DATA[cityKey];
    if (!city) return null;

    return {
        cityName: city.cityName,
        cityIcon: city.cityIcon,
        dates: city.dates,
        description: city.description,
        theme: city.theme,
        alert: city.alert
    };
}

/**
 * Get all cities
 * @returns {Array} Array of city keys
 */
export function getAllCities()
{
    return Object.keys(ITINERARY_DATA);
}

/**
 * Get total number of activities
 * @returns {number} Total activity count
 */
export function getTotalActivityCount()
{
    return getAllActivities().length;
}

export default ITINERARY_DATA;