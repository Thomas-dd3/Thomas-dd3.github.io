$(document).ready(function () {

    mapboxgl.accessToken = 'pk.eyJ1IjoidHR1c2VyMzMiLCJhIjoiY2szNDFkc3p0MGcwaDNjbGtyb3ZwOHRmbSJ9.E0_EnZx931FxBeJQWRG-PA';
    var map = new mapboxgl.Map({
        container: 'map',
        //style: 'mapbox://styles/mapbox/streets-v11',
        style: 'mapbox://styles/ttuser33/ck54ux1tv0b711cp2s4kcn2dz',
        //style: 'mapbox://styles/ttuser33/ck54ux1tv0b711cp2s4kcn2dz/draft',
        center: [10, 50],
        zoom: 3
    });

    // disable map zoom when using scroll
    //map.scrollZoom.disable();

    const reviewsGeoJSON = {
        "type": "FeatureCollection",
        "crs": {
            "type": "name",
            "properties": {
                "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
            }
        },
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "city": "Amsterdam",
                    "av_nb_reviews": 135.39496896439073,
                    "latitude": 52.370216,
                    "longitude": 4.895168,
                    "top5_rating_reviews": "Vinkeles,,5.0,,564.0;;Utrechtsedwarstafel,,5.0,,220.0;;Wink,,5.0,,199.0;;Martine of Martine's Table,,5.0,,136.0;;Bistrot des Alpes,,5.0,,136.0",
                    "top5_reviews_rating": "Hard Rock Cafe Amsterdam,,4.0,,6777.0;;The Seafood Bar,,4.5,,4709.0;;Restaurant Haesje Claes,,4.0,,3595.0;;Cau,,4.0,,2647.0;;The Pantry,,4.5,,2428.0"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        4.895168,
                        52.370216
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "city": "Athens",
                    "av_nb_reviews": 101.60377358490568,
                    "latitude": 37.98381,
                    "longitude": 23.727539,
                    "top5_rating_reviews": "Funky Gourmet,,5.0,,1046.0;;Cinque Wine & Deli Bar,,5.0,,1013.0;;Aleria,,5.0,,934.0;;Dinner in the Sky,,5.0,,886.0;;A Little Taste of Home,,5.0,,317.0",
                    "top5_reviews_rating": "Ta Karamanlidika tou Fani,,4.5,,4234.0;;O Thanasis,,4.0,,3441.0;;Lithos,,4.5,,3392.0;;Oineas,,4.5,,3197.0;;Arcadia Restaurant,,4.5,,2484.0"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        23.727539,
                        37.98381
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "city": "Barcelona",
                    "av_nb_reviews": 140.49394273127754,
                    "latitude": 41.385063,
                    "longitude": 2.173404,
                    "top5_rating_reviews": "Viana,,5.0,,2707.0;;Bodega Biarritz,,5.0,,1078.0;;Uma,,5.0,,792.0;;Blavis,,5.0,,643.0;;Chaka Khan,,5.0,,479.0",
                    "top5_reviews_rating": "Cerveceria Catalana,,4.5,,10504.0;;Ciudad Condal Restaurant,,4.5,,7964.0;;7 Portes,,4.0,,6795.0;;La Fonda,,4.0,,4996.0;;Les Quinze Nits,,3.5,,4738.0"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        2.173404,
                        41.385063
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "city": "Berlin",
                    "av_nb_reviews": 70.161551724137937,
                    "latitude": 52.520008,
                    "longitude": 13.404954,
                    "top5_rating_reviews": "Naveena Path,,5.0,,423.0;;Namaste,,5.0,,295.0;;Club-Restaurant Das Team \"Die Eselin von A.\",,5.0,,177.0;;El Loco,,5.0,,171.0;;Restaurant Langosch,,5.0,,105.0",
                    "top5_reviews_rating": "Hofbrau Munchen Berlin,,4.0,,4452.0;;Augustiner am Gendarmenmarkt,,4.0,,4109.0;;Burgermeister,,4.5,,3703.0;;Mustafa's Gemuese Kebab,,4.5,,3036.0;;Monsieur Vuong,,4.5,,3019.0"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        13.404954,
                        52.520008
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "city": "Bratislava",
                    "av_nb_reviews": 54.020860495436771,
                    "latitude": 48.148598,
                    "longitude": 17.107748,
                    "top5_rating_reviews": "Roxor BRGR & Beer,,5.0,,236.0;;Nobile Restaurant,,5.0,,77.0;;Simply Fresh Restaurant,,5.0,,76.0;;SPIN me around - cocktail bar,,5.0,,72.0;;Samovar,,5.0,,49.0",
                    "top5_reviews_rating": "Slovak Pub,,4.0,,2578.0;;Bratislavsky Mestiansky pivovar,,4.5,,1930.0;;Prasna Basta,,4.5,,1532.0;;Bratislava Flag Ship Restaurant,,4.0,,1135.0;;Modra Hviezda,,4.5,,992.0"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        17.107748,
                        48.148598
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "city": "Brussels",
                    "av_nb_reviews": 93.299506694855538,
                    "latitude": 50.850346,
                    "longitude": 4.351721,
                    "top5_rating_reviews": "Tonton Garby,,5.0,,1141.0;;Le Rabassier,,5.0,,525.0;;Le Barboteur - Bierotheque -,,5.0,,40.0;;Le mangeoire maison gourmande,,5.0,,40.0;;La Cucina Delle Zie,,5.0,,38.0",
                    "top5_reviews_rating": "Chez Leon,,3.5,,6437.0;;Fin de Siecle,,4.5,,4059.0;;Belga Queen,,4.0,,2307.0;;Pasta Divina,,4.5,,2140.0;;Amadeus,,4.0,,2139.0"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        4.351721,
                        50.850346
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "city": "Budapest",
                    "av_nb_reviews": 150.54239569313592,
                    "latitude": 47.497913,
                    "longitude": 19.040236,
                    "top5_rating_reviews": "Comme Chez Soi,,5.0,,4437.0;;Bors GasztroBar,,5.0,,2373.0;;Caviar&Bull,,5.0,,563.0;;Eat & Meet,,5.0,,409.0;;Don Pepe Menyecske,,5.0,,388.0",
                    "top5_reviews_rating": "Hungarikum Bisztro,,4.5,,7575.0;;Menza,,4.5,,5232.0;;Zeller Bistro,,4.5,,4977.0;;Comme Chez Soi,,5.0,,4437.0;;For Sale Pub,,4.0,,2988.0"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        19.040236,
                        47.497913
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "city": "Copenhagen",
                    "av_nb_reviews": 101.78544269418795,
                    "latitude": 55.676098,
                    "longitude": 12.568337,
                    "top5_rating_reviews": "The Olive Kitchen & Bar,,5.0,,1316.0;;Restaurant Krebsegaarden,,5.0,,1071.0;;Grams Laekkerier (closed to 8. jan.),,5.0,,550.0;;Zahida at Westmarket,,5.0,,408.0;;Pizzeria MaMeMi WestMarket,,5.0,,332.0",
                    "top5_reviews_rating": "Copenhagen Street Food,,4.5,,3426.0;;Tight,,4.5,,2492.0;;Kodbyens Fiskebar,,4.0,,1913.0;;Mother,,4.0,,1583.0;;Host,,4.5,,1562.0"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        12.568337,
                        55.676098
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "city": "Dublin",
                    "av_nb_reviews": 167.82226980728055,
                    "latitude": 53.349804,
                    "longitude": -6.26031,
                    "top5_rating_reviews": "Urbanity Coffee,,5.0,,112.0;;Hemmingways,,5.0,,92.0;;Dining Room at the Ariel House,,5.0,,75.0;;Heron & Grey,,5.0,,73.0;;Boco Bar + Oven,,5.0,,66.0",
                    "top5_reviews_rating": "The Boxty House,,4.5,,4453.0;;The Church,,4.5,,4113.0;;The Old Storehouse Bar & Restaurant,,4.5,,3570.0;;The Brazen Head,,4.5,,3491.0;;Elephant & Castle,,4.0,,2828.0"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -6.26031,
                        53.349804
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "city": "Edinburgh",
                    "av_nb_reviews": 235.80351906158359,
                    "latitude": 55.953251,
                    "longitude": -3.188267,
                    "top5_rating_reviews": "Number One at The Balmoral,,5.0,,1483.0;;Locanda De Gusti,,5.0,,1169.0;;Colonnades at The Signet Library,,5.0,,921.0;;The Caffeine Drip,,5.0,,831.0;;Pickles,,5.0,,810.0",
                    "top5_reviews_rating": "The Dome,,4.5,,5251.0;;The Witchery by the Castle,,4.0,,4567.0;;Jamie's Italian,,3.5,,4035.0;;The Kitchin,,4.5,,2995.0;;Angels With Bagpipes,,4.5,,2636.0"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -3.188267,
                        55.953251
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "city": "Geneva",
                    "av_nb_reviews": 68.284615384615378,
                    "latitude": 46.204391,
                    "longitude": 6.143158,
                    "top5_rating_reviews": "Intensus,,5.0,,68.0;;Fiskebar,,5.0,,54.0;;L'amazona,,5.0,,43.0;;La Table du Cotton,,5.0,,41.0;;La passione,,5.0,,40.0",
                    "top5_reviews_rating": "Chez Ma Cousine,,4.0,,1836.0;;Brasserie Lipp,,4.0,,1624.0;;Luigia,,4.0,,1342.0;;Cafe du Soleil,,4.5,,1222.0;;Chez Boubier Cafe de Paris,,4.0,,1181.0"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        6.143158,
                        46.204391
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "city": "Hamburg",
                    "av_nb_reviews": 45.941946034341782,
                    "latitude": 53.551086,
                    "longitude": 9.993682,
                    "top5_rating_reviews": "Philipps Restaurant,,5.0,,496.0;;Restaurant Hala,,5.0,,373.0;;Restaurant Haerlin,,5.0,,264.0;;Helo Restaurant,,5.0,,216.0;;Gassenhaur,,5.0,,160.0",
                    "top5_reviews_rating": "Hard Rock Cafe,,4.0,,1327.0;;Brauhaus Joh. Albrecht,,4.0,,1051.0;;EAST Restaurant,,4.0,,845.0;;Estancia Steaks,,4.5,,840.0;;[m]eatery bar + restaurant,,4.5,,809.0"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        9.993682,
                        53.551086
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "city": "Helsinki",
                    "av_nb_reviews": 61.175865294667922,
                    "latitude": 60.169857,
                    "longitude": 24.938379,
                    "top5_rating_reviews": "Sushi Wagocoro,,5.0,,84.0;;Cafe' Rouge,,5.0,,32.0;;Bar Cafe Apero,,5.0,,28.0;;Kalatukku E. Eriksson Oy,,5.0,,25.0;;La Soupe,,5.0,,25.0",
                    "top5_reviews_rating": "Kappeli,,4.0,,1488.0;;Restaurant Lappi,,4.0,,994.0;;Juuri,,4.5,,929.0;;Savotta,,4.0,,894.0;;Restaurant Zetor,,4.0,,811.0"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        24.938379,
                        60.169857
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "city": "Krakow",
                    "av_nb_reviews": 139.54561251086011,
                    "latitude": 50.064651,
                    "longitude": 19.944981,
                    "top5_rating_reviews": "Od Jajka Do Jablka,,5.0,,194.0;;Gossip Cafe,,5.0,,171.0;;Bottiglieria 1881,,5.0,,149.0;;M22 Beef'N'Chips,,5.0,,114.0;;Marcelino Chleb i Wino,,5.0,,111.0",
                    "top5_reviews_rating": "Pod Wawelem,,4.0,,4608.0;;Restauracja Starka,,4.5,,4483.0;;Hard Rock Cafe Krakow,,4.0,,2500.0;;Pod Baranem,,4.5,,2212.0;;Miod Malina,,4.5,,2197.0"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        19.944981,
                        50.064651
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "city": "Lisbon",
                    "av_nb_reviews": 131.35603000577035,
                    "latitude": 38.722252,
                    "longitude": -9.139337,
                    "top5_rating_reviews": "Ha Tapas no Mercado!!!,,5.0,,423.0;;Estamine Art Food Drink,,5.0,,327.0;;O Vinhaca Tapas & Vinhos,,5.0,,235.0;;Yak and Yeti Restaurant,,5.0,,206.0;;Tasca Mastai,,5.0,,198.0",
                    "top5_reviews_rating": "Cervejaria Ramiro,,4.5,,7560.0;;Solar dos Presuntos,,4.5,,4720.0;;Time Out Market,,4.5,,4454.0;;Restaurante Sacramento,,4.5,,3874.0;;Hard Rock Cafe Lisboa,,4.0,,3610.0"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -9.139337,
                        38.722252
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "city": "Ljubljana",
                    "av_nb_reviews": 96.09677419354837,
                    "latitude": 46.056946,
                    "longitude": 14.505752,
                    "top5_rating_reviews": "Fari's Delice,,5.0,,147.0;;Vineria Del Ponte,,5.0,,81.0;;Wine bar Suklje,,5.0,,42.0;;Mala Terasa,,5.0,,38.0;;Restavracija Harfa,,5.0,,35.0",
                    "top5_reviews_rating": "Julija,,4.5,,2533.0;;Gostilna Sokol Ljubljana,,3.5,,2006.0;;Pop's Place,,4.5,,1387.0;;Marley & Me,,4.5,,1182.0;;Druga Violina,,4.5,,1058.0"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        14.505752,
                        46.056946
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "city": "London",
                    "av_nb_reviews": 139.16564616988015,
                    "latitude": 51.507351,
                    "longitude": -0.127758,
                    "top5_rating_reviews": "Bar 61 Restaurant,,5.0,,1730.0;;The Five Fields,,5.0,,1129.0;;The Golden Chippy,,5.0,,1015.0;;Liman Restaurant,,5.0,,945.0;;The Clink Restaurant,,5.0,,588.0",
                    "top5_reviews_rating": "Aqua Shard,,4.0,,12910.0;;London Steakhouse Co.,,4.0,,9660.0;;Oxo Tower Restaurant, Bar and Brasserie,,4.5,,7794.0;;The Wolseley,,4.0,,6275.0;;Hard Rock Cafe London,,4.0,,6226.0"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -0.127758,
                        51.507351
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "city": "Luxembourg",
                    "av_nb_reviews": 79.127334465195247,
                    "latitude": 49.610929,
                    "longitude": 6.130461,
                    "top5_rating_reviews": "Pizzeria bei der Auer,,5.0,,39.0;;La Piazzetta,,5.0,,27.0;;Jiaoli et Ses Amis,,5.0,,19.0;;Colisee,,5.0,,15.0;;Au Pain de Mary,,5.0,,14.0",
                    "top5_reviews_rating": "Chi-Chi's,,3.0,,729.0;;Delirio Culinario,,4.0,,652.0;;Brasserie La Lorraine,,3.5,,625.0;;Le Sud,,4.5,,613.0;;Brasserie Guillaume,,4.0,,607.0"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        6.130461,
                        49.610929
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "city": "Lyon",
                    "av_nb_reviews": 88.666927899686527,
                    "latitude": 45.764042,
                    "longitude": 4.835659,
                    "top5_rating_reviews": "Aromatic,,5.0,,347.0;;La Bouteillerie,,5.0,,247.0;;Le Supreme,,5.0,,146.0;;La Gamelle de Montchat,,5.0,,97.0;;Le Book-Lard,,5.0,,86.0",
                    "top5_reviews_rating": "Brasserie Georges,,4.0,,5402.0;;Brasserie l'Est,,3.5,,1953.0;;Brasserie Le Sud,,4.0,,1757.0;;Brasserie L'Ouest,,4.0,,1579.0;;Le Musee,,4.5,,1235.0"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        4.835659,
                        45.764042
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "city": "Madrid",
                    "av_nb_reviews": 98.428935860058289,
                    "latitude": 40.416775,
                    "longitude": -3.70379,
                    "top5_rating_reviews": "Cebo,,5.0,,352.0;;Astor,,5.0,,302.0;;Meson Molinero,,5.0,,201.0;;Bizikletak,,5.0,,151.0;;Malvon Empanadas Argentinas,,5.0,,134.0",
                    "top5_reviews_rating": "Mercado de San Miguel,,4.0,,11497.0;;Restuarant Botin,,4.0,,7551.0;;Museo del Jamon,,4.0,,6013.0;;Yakitoro,,4.0,,4125.0;;Los Montes de Galicia,,4.5,,3795.0"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -3.70379,
                        40.416775
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "city": "Milan",
                    "av_nb_reviews": 168.86955058071032,
                    "latitude": 45.464203,
                    "longitude": 9.189982,
                    "top5_rating_reviews": "Shaolin State of Harmony - Raw Vegan,,5.0,,212.0;;Sikelaia Ristorante,,5.0,,154.0;;Sapori Stellari,,5.0,,135.0;;Raki,,5.0,,129.0;;Shannara 5,,5.0,,116.0",
                    "top5_reviews_rating": "Luini,,4.0,,13862.0;;Pizzeria Spontini,,3.5,,6360.0;;Eataly Milano Smeraldo,,3.5,,5870.0;;Nerino Dieci Trattoria,,4.5,,3964.0;;Gino Sorbillo - Lievito Madre al Duomo,,3.5,,3358.0"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        9.189982,
                        45.464203
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "city": "Munich",
                    "av_nb_reviews": 84.88133595284873,
                    "latitude": 48.135124,
                    "longitude": 11.581981,
                    "top5_rating_reviews": "Chopan Schwabing,,5.0,,255.0;;Risotto Restaurant Munich,,5.0,,168.0;;Dinnerhopping,,5.0,,163.0;;Restaurant Pils Corner,,5.0,,104.0;;Restaurant Zauberberg,,5.0,,101.0",
                    "top5_reviews_rating": "Hofbraeuhaus,,4.0,,16478.0;;Zum Augustiner,,4.0,,4694.0;;Ratskeller Munchen,,4.0,,4028.0;;Augustiner-Keller,,4.0,,3525.0;;Haxnbauer,,4.0,,2713.0"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        11.581981,
                        48.135124
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "city": "Oporto",
                    "av_nb_reviews": 140.09520400858983,
                    "latitude": 41.15015,
                    "longitude": -8.61032,
                    "top5_rating_reviews": "MUU Steakhouse,,5.0,,331.0;;Terra Nova,,5.0,,98.0;;Hungry biker,,5.0,,95.0;;Euskalduna Studio,,5.0,,86.0;;Puorto,,5.0,,77.0",
                    "top5_reviews_rating": "Tapabento - Bar Restaurant,,4.5,,3206.0;;Restaurante Abadia Do Porto,,4.5,,3162.0;;Cafe Santiago,,4.0,,3133.0;;O Paparico,,4.5,,2142.0;;Wine Quay Bar,,4.5,,2088.0"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -8.61032,
                        41.15015
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "city": "Oslo",
                    "av_nb_reviews": 92.417132216014878,
                    "latitude": 59.913868,
                    "longitude": 10.752245,
                    "top5_rating_reviews": "hos Thea,,5.0,,1062.0;;Habits Coffee,,5.0,,81.0;;Zenzi by Realmat,,5.0,,59.0;;Restaurant Foodie,,5.0,,40.0;;Restaurant Fangst,,5.0,,40.0",
                    "top5_reviews_rating": "Ruffino Ristorante Italiano,,4.5,,1696.0;;Dinner Bar & Restaurant,,4.5,,1391.0;;Louise Restaurant & Bar,,4.0,,1328.0;;Mamma Pizza,,4.5,,1265.0;;Olivia Aker Brygge,,4.0,,1165.0"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        10.752245,
                        59.913868
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "city": "Paris",
                    "av_nb_reviews": 115.77206325301205,
                    "latitude": 48.856613,
                    "longitude": 2.352222,
                    "top5_rating_reviews": "Epicure,,5.0,,2305.0;;Il Etait Un Square,,5.0,,1600.0;;Les Apotres de Pigalle,,5.0,,1152.0;;Boutary,,5.0,,533.0;;ASPIC,,5.0,,427.0",
                    "top5_reviews_rating": "Le Bouillon Chartier,,3.5,,10706.0;;58 Tour Eiffel,,4.0,,7622.0;;Le Jules Verne,,4.0,,5313.0;;Le Train Bleu,,4.0,,4432.0;;La Coupole,,3.5,,3824.0"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        2.352222,
                        48.856613
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "city": "Prague",
                    "av_nb_reviews": 119.23336028024792,
                    "latitude": 50.075539,
                    "longitude": 14.4378,
                    "top5_rating_reviews": "Wine O'Clock Shop Prague,,5.0,,967.0;;Portfolio restaurant,,5.0,,884.0;;Be Bop Lobby Bar,,5.0,,797.0;;Namaste India Indian Restaurant,,5.0,,377.0;;La Casa de la Havana vieja,,5.0,,276.0",
                    "top5_reviews_rating": "Restaurace U Fleku,,3.5,,7699.0;;U Kroka,,4.5,,4932.0;;Cafe Imperial,,4.5,,4521.0;;Hard Rock Cafe,,4.0,,4382.0;;U Tri Ruzi,,4.5,,3837.0"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        14.4378,
                        50.075539
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "city": "Rome",
                    "av_nb_reviews": 293.89559486645857,
                    "latitude": 41.902782,
                    "longitude": 12.496365,
                    "top5_rating_reviews": "Pane e Salame,,5.0,,4867.0;;Pizza Zizza Caffetteria Birreria Desserteria,,5.0,,1975.0;;Two Sizes,,5.0,,1186.0;;Bread-in,,5.0,,666.0;;L'uliveto Shop,,5.0,,489.0",
                    "top5_reviews_rating": "Grazia & Graziella,,4.5,,10300.0;;Cantina e Cucina,,4.5,,8927.0;;Tonnarello,,4.5,,6574.0;;Ristorante Carlo Menta,,3.5,,6309.0;;Cajo e Gajo,,4.5,,6117.0"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        12.496365,
                        41.902782
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "city": "Stockholm",
                    "av_nb_reviews": 70.574580759046782,
                    "latitude": 59.329323,
                    "longitude": 18.068581,
                    "top5_rating_reviews": "Fuori Di Pizza,,5.0,,69.0;;Kagges,,5.0,,59.0;;Lovo Magasin,,5.0,,57.0;;Hattori Sushi Devil,,5.0,,38.0;;Olbistron No.50,,5.0,,31.0",
                    "top5_reviews_rating": "Stockholms Gastabud,,4.5,,1784.0;;Pelikan,,4.0,,1461.0;;Fem Sma Hus,,4.5,,1452.0;;Restaurang Kryp In,,4.5,,1382.0;;Eriks Gondolen,,4.0,,1314.0"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        18.068581,
                        59.329323
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "city": "Vienna",
                    "av_nb_reviews": 84.175260993356531,
                    "latitude": 48.208176,
                    "longitude": 16.373819,
                    "top5_rating_reviews": "Casino Restaurant Wien,,5.0,,241.0;;Senhor Vinho,,5.0,,140.0;;Vienna Sausage,,5.0,,59.0;;Ghisallo,,5.0,,50.0;;Ethiopian Restaurant - Cafe Lalibela,,5.0,,49.0",
                    "top5_reviews_rating": "Figlmuller,,4.0,,7140.0;;Plachutta Wollzeile,,4.0,,4937.0;;Salm Braeu,,4.5,,4685.0;;Figlmueller,,4.0,,3452.0;;Ribs of Vienna,,4.5,,2927.0"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        16.373819,
                        48.208176
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "city": "Warsaw",
                    "av_nb_reviews": 60.461617722823277,
                    "latitude": 52.23498,
                    "longitude": 21.00849,
                    "top5_rating_reviews": "San Thai,,5.0,,108.0;;India King Indian Restaurant,,5.0,,84.0;;Bekef,,5.0,,50.0;;Parivar,,5.0,,43.0;;Wino & Friends,,5.0,,41.0",
                    "top5_reviews_rating": "Polska Rozana,,4.5,,2356.0;;Podwale Kompania Piwna,,4.0,,2070.0;;Zapiecek,,4.0,,1882.0;;Folk Gospoda,,4.0,,1550.0;;Specjaly Regionalne,,4.5,,1508.0"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        21.00849,
                        52.23498
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "city": "Zurich",
                    "av_nb_reviews": 75.919678714859444,
                    "latitude": 47.376888,
                    "longitude": 8.541694,
                    "top5_rating_reviews": "Ecco,,5.0,,90.0;;Tadka Indian Restaurant,,5.0,,80.0;;Za'atar,,5.0,,71.0;;Restaurant Nihao,,5.0,,68.0;;Luca2,,5.0,,58.0",
                    "top5_reviews_rating": "Zeughauskeller,,4.0,,3951.0;;Haus Hiltl,,4.5,,3085.0;;Restaurant Swiss Chuchi,,4.0,,1974.0;;Clouds,,4.0,,1023.0;;Kronenhalle,,4.0,,991.0"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        8.541694,
                        47.376888
                    ]
                }
            }
        ]
    }

    function displayPopupTop5(feature){
        top5ratings = feature.properties.top5_rating_reviews;
        top5reviews = feature.properties.top5_reviews_rating;

        let listRatings = '<ol>';
        top5ratings.split(";;").forEach((element)=>{
            resto = element.split(',,');
            listRatings += '<li>' + resto[0]+ ', ' + resto[1] + ' &nbsp;' +
                                '(' + resto[2] + ')' +
                           '</li>';
        });

        listRatings += '</ol>';

        let listReviews = '<ol>';
        top5reviews.split(";;").forEach((element)=>{
            resto = element.split(',,');
            listReviews += '<li>' + resto[0]+ ', ' + resto[1] + ' &nbsp;' +
                                '(' + resto[2] + ')' +
                           '</li>';
        });

        listReviews += '</ol>';

        $('#top5ratings ol').remove();
        $('#top5reviews ol').remove();

        $('#top5ratings').append(listRatings);
        $('#top5reviews').append(listReviews);

        $('.popupTop5').fadeIn('fast');

    }

    map.on('load', function () {
// Add a layer showing the places.
        map.addLayer({
            'id': 'places',
            'type': 'circle',
            'source': {
                'type': 'geojson',
                'data': reviewsGeoJSON
            },
            'paint': {
                'circle-radius': 10,
                'circle-color': 'black',
                'circle-stroke-color': 'white',
                'circle-stroke-width': 0,
                'circle-opacity': 0
            },
        });

// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
        map.on('click', 'places', function (e) {
            const feature = e.features[0];

            const properties = e.features[0].properties;
            $('#avNbReviews').text(properties.city + ': ' + Math.round(properties.av_nb_reviews * 10)/10 );

            displayPopupTop5(feature);

            /*
            setTimeout(()=>{
                if
                    $('.popupTop5').fadeOut('low');
            }, 5000);
            reset = 1; */

        });

        // Create a popup, but don't add it to the map yet.
        var popup = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: false,
            anchor: 'bottom'
        });



// Change the cursor to a pointer when the mouse is over the places layer.
        map.on('mouseenter', 'places', function (e) {
// Change the cursor style as a UI indicator.
            map.getCanvas().style.cursor = 'pointer';

            var coordinates = e.features[0].geometry.coordinates.slice();
            var labelCity = e.features[0].properties.city;

// Ensure that if the map is zoomed out such that multiple
// copies of the feature are visible, the popup appears
// over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }
/*
orange
vert
violet un peu plus clair

 */


// Populate the popup and set its coordinates
// based on the feature found.
            popup
                .setLngLat(coordinates)
                .setHTML(labelCity)
                .addTo(map);


        });

// Change it back to a pointer when it leaves.
        map.on('mouseleave', 'places', function () {
            map.getCanvas().style.cursor = '';
            popup.remove();

        });



    });


});