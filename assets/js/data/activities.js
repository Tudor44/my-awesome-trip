/**
 * Activities data module
 * Contains all travel activities organized by city
 */

export const activities = {
    zagreb: [
        {
            id: 'zagreb_1',
            title: 'Passeggiata serale a Via Tkalčića',
            description: 'Prima serata: immersione nella vita notturna zagabrese tra pub e ristoranti',
            time: '28 Agosto - Sera',
            category: 'nightlife',
            estimatedDuration: 180, // minutes
            estimatedCost: 30 // EUR
        },
        {
            id: 'zagreb_2',
            title: 'Mercato di Dolac',
            description: 'Visita mattutina al "ventre di Zagabria" con i suoi iconici ombrelloni rossi',
            time: '29 Agosto - Mattina',
            category: 'culture',
            estimatedDuration: 90,
            estimatedCost: 15
        },
        {
            id: 'zagreb_3',
            title: 'Cattedrale di Zagabria (esterno)',
            description: '⚠️ Interno chiuso per restauri post-terremoto. Vista esterna delle guglie gotiche',
            time: '29 Agosto - Mattina',
            category: 'architecture',
            estimatedDuration: 30,
            estimatedCost: 0
        },
        {
            id: 'zagreb_4',
            title: 'Funicolare storica',
            description: 'Salita alla Città Alta con la funicolare del 1890 (66 metri, 64 secondi)',
            time: '29 Agosto - Pomeriggio',
            category: 'transport',
            estimatedDuration: 15,
            estimatedCost: 5
        },
        {
            id: 'zagreb_5',
            title: 'Chiesa di San Marco',
            description: 'Il famoso tetto con stemmi colorati di Croazia, Dalmazia e Slavonia',
            time: '29 Agosto - Pomeriggio',
            category: 'architecture',
            estimatedDuration: 45,
            estimatedCost: 0
        },
        {
            id: 'zagreb_6',
            title: 'Museo delle Relazioni Interrotte',
            description: 'Esperienza emotivamente coinvolgente con oggetti e storie di relazioni finite',
            time: '29 Agosto - Pomeriggio',
            category: 'museum',
            estimatedDuration: 120,
            estimatedCost: 12
        },
        {
            id: 'zagreb_7',
            title: 'Strossmayer Promenade',
            description: 'Vista panoramica sui tetti rossi della Città Bassa',
            time: '29 Agosto - Pomeriggio',
            category: 'viewpoint',
            estimatedDuration: 60,
            estimatedCost: 0
        },
        {
            id: 'zagreb_8',
            title: 'Scelta finale: Arte, Natura o Storia',
            description: 'Museo d\'Arte Naïf, Giardino Botanico o Tunnel Grič',
            time: '30 Agosto - Mattina',
            category: 'flexible',
            estimatedDuration: 120,
            estimatedCost: 8
        }
    ],

    ljubljana: [
        {
            id: 'ljubljana_1',
            title: 'Piazza Prešeren e Triplo Ponte',
            description: 'Il capolavoro di Plečnik: da un ponte ottocentesco a tre corsie pedonali',
            time: '30 Agosto - Sera',
            category: 'architecture',
            estimatedDuration: 45,
            estimatedCost: 0
        },
        {
            id: 'ljubljana_2',
            title: 'Mercato Centrale di Plečnik',
            description: 'Colonnato rinascimentale e mercato coperto lungo il fiume',
            time: '31 Agosto - Mattina',
            category: 'culture',
            estimatedDuration: 90,
            estimatedCost: 20
        },
        {
            id: 'ljubljana_3',
            title: 'Ponte dei Draghi',
            description: 'Quattro draghi in bronzo guardiani della città, simbolo di Lubiana',
            time: '31 Agosto - Mattina',
            category: 'landmark',
            estimatedDuration: 30,
            estimatedCost: 0
        },
        {
            id: 'ljubljana_4',
            title: 'Cattedrale di San Nicola',
            description: 'Arte barocca slovena con porte in bronzo del 1996',
            time: '31 Agosto - Mattina',
            category: 'architecture',
            estimatedDuration: 60,
            estimatedCost: 0
        },
        {
            id: 'ljubljana_5',
            title: 'Castello di Lubiana',
            description: 'Salita in funicolare e vista panoramica a 360° dalla Torre di Avvistamento',
            time: '31 Agosto - Pomeriggio',
            category: 'castle',
            estimatedDuration: 180,
            estimatedCost: 15
        },
        {
            id: 'ljubljana_6',
            title: 'Metelkova Mesto',
            description: 'Centro culturale alternativo in ex-caserme austro-ungariche',
            time: '31 Agosto - Sera',
            category: 'culture',
            estimatedDuration: 120,
            estimatedCost: 10
        },
        {
            id: 'ljubljana_7',
            title: 'Biblioteca Nazionale (NUK) o Parco Tivoli',
            description: 'Capolavoro di Plečnik o passeggiata nel polmone verde della città',
            time: '1 Settembre - Mattina',
            category: 'flexible',
            estimatedDuration: 90,
            estimatedCost: 0
        }
    ],

    trieste: [
        {
            id: 'trieste_1',
            title: 'Canal Grande e Borgo Teresiano',
            description: 'Architettura neoclassica voluta da Maria Teresa d\'Austria',
            time: '1 Settembre - Sera',
            category: 'architecture',
            estimatedDuration: 90,
            estimatedCost: 0
        },
        {
            id: 'trieste_2',
            title: 'Piazza Unità d\'Italia',
            description: 'La più grande piazza d\'Europa che si affaccia direttamente sul mare',
            time: '1 Settembre - Sera',
            category: 'landmark',
            estimatedDuration: 60,
            estimatedCost: 0
        },
        {
            id: 'trieste_3',
            title: 'Colle di San Giusto',
            description: 'Cattedrale con mosaici bizantini e Castello con vista panoramica',
            time: '2 Settembre - Mattina',
            category: 'castle',
            estimatedDuration: 150,
            estimatedCost: 8
        },
        {
            id: 'trieste_4',
            title: 'Castello di Miramare',
            description: 'Residenza dell\'Arciduca Massimiliano d\'Asburgo a picco sul mare',
            time: '2 Settembre - Pomeriggio',
            category: 'castle',
            estimatedDuration: 180,
            estimatedCost: 14
        },
        {
            id: 'trieste_5',
            title: 'Passeggiata letteraria o Museo Revoltella',
            description: 'Statue di Joyce, Svevo e Saba o arte moderna e contemporanea',
            time: '4 Settembre - Mattina',
            category: 'flexible',
            estimatedDuration: 120,
            estimatedCost: 10
        }
    ],

    istria: [
        {
            id: 'istria_1',
            title: 'Noleggio auto e partenza',
            description: 'Ritiro auto e acquisto vignetta slovena online',
            time: '8:30 - Partenza',
            category: 'transport',
            estimatedDuration: 60,
            estimatedCost: 50
        },
        {
            id: 'istria_2',
            title: 'Pirano, Slovenia',
            description: 'Centro storico veneziano e Piazza Tartini (40 km, 45 min)',
            time: '9:15 - Mattina',
            category: 'city',
            estimatedDuration: 120,
            estimatedCost: 15
        },
        {
            id: 'istria_3',
            title: 'Rovigno, Croazia',
            description: 'La perla dell\'Istria: centro storico arroccato e Chiesa di S. Eufemia',
            time: '10:30 - Pranzo',
            category: 'city',
            estimatedDuration: 180,
            estimatedCost: 35
        },
        {
            id: 'istria_4',
            title: 'Pola, Croazia',
            description: 'Anfiteatro Romano (tra i 6 più grandi al mondo) e Arco dei Sergi',
            time: '15:00 - Pomeriggio',
            category: 'historical',
            estimatedDuration: 120,
            estimatedCost: 12
        },
        {
            id: 'istria_5',
            title: 'Rientro a Trieste',
            description: '120 km, circa 1h45min di viaggio',
            time: '17:00 - Sera',
            category: 'transport',
            estimatedDuration: 105,
            estimatedCost: 20
        }
    ]
};

export const activityCategories = {
    nightlife: { name: 'Vita Notturna', emoji: '🌙', color: '#9C27B0' },
    culture: { name: 'Cultura', emoji: '🎭', color: '#FF5722' },
    architecture: { name: 'Architettura', emoji: '🏛️', color: '#607D8B' },
    transport: { name: 'Trasporti', emoji: '🚌', color: '#795548' },
    museum: { name: 'Musei', emoji: '🖼️', color: '#3F51B5' },
    viewpoint: { name: 'Panorama', emoji: '👁️', color: '#009688' },
    flexible: { name: 'Flessibile', emoji: '🔄', color: '#FFC107' },
    landmark: { name: 'Monumenti', emoji: '📍', color: '#F44336' },
    castle: { name: 'Castelli', emoji: '🏰', color: '#8BC34A' },
    city: { name: 'Città', emoji: '🏘️', color: '#00BCD4' },
    historical: { name: 'Storico', emoji: '🏺', color: '#FF9800' }
};

export default activities;