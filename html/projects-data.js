const projects = [
  {
    "id": 28,
    "title": "Curso de sensores ambientales · PUCE Ibarra",
    "description": "Semana co-creando sistemas de medición de aire y agua en la laguna Yaguarcocha, Ibarra, Ecuador.",
    "image": "/images/puce.png",
    "tags": [
      "educación",
      "ciencia",
      "sostenibilidad",
      "iot"
    ],
    "date": "2026-03-14",
    "link": "https://www.instagram.com/p/DV4Ysq9D3oX/",
    "details": "Curso de sensores ambientales en colaboración con la PUCE Ibarra (@puceibarra). Una semana co-creando sistemas de medición para monitorear aire y agua de la laguna Yaguarcocha, Ibarra, Ecuador. Electricidad, electrónica y programación — todo low cost, todo replicable, todo libre. Cooperación internacional con docentes de la PUCE; diseño 3D con @capaporcapa. Porque la tecnología más poderosa es la que cualquiera puede construir y entender.",
    "specs": [
      "Ubicación: Yaguarcocha, Imbabura, Ecuador",
      "Institución: PUCE Ibarra",
      "Monitoreo: calidad de aire y agua de laguna",
      "Enfoque: low-cost, replicable, open-source",
      "Colaboración: docentes PUCE + diseño 3D @capaporcapa",
      "Metodología: co-creación, electricidad, electrónica, programación"
    ]
  },
  {
    "id": 16,
    "title": "GAD",
    "description": "Sistema IoT para monitoreo y control inteligente de tanques de agua.",
    "image": "/images/GADMain.jpeg",
    "tags": [
      "ciencia",
      "iot",
      "sostenibilidad",
      "desarrollos"
    ],
    "date": "2025-01-10",
    "details": "GAD es un sistema de gestión de agua que combina sensores de ultrasonido y caudalímetros para medir nivel y consumo en tanques domésticos o de edificios. Los datos se envían a una plataforma central en línea, desde la que se puede controlar de forma remota la apertura y cierre de la electroválvula de carga. Esto permite optimizar el uso del recurso, prevenir desabastecimientos y responder rápidamente a fugas o consumos inusuales. El diseño incluye módulos autónomos basados en ESP32 que se acoplan directamente a los tanques, con electrónica protegida y comunicación estable para contextos urbanos o zonas con escasez hídrica.",
    "specs": [
      "MCU: ESP32 con conectividad WiFi",
      "Sensores: ultrasonido para nivel y caudalímetros para consumo",
      "Actuadores: electroválvula para carga controlada",
      "Plataforma: gestión remota online basada en Firebase",
      "Aplicación: optimización y control inteligente del agua"
    ]
  },
  {
    "id": 15,
    "title": "Flapp",
    "description": "Plataforma BLE + app móvil para registrar parámetros del agua en laboratorio.",
    "image": "/images/FlappMain.jpg",
    "tags": [
      "ciencia",
      "iot",
      "investigación",
      "sostenibilidad",
      "desarrollos"
    ],
    "date": "2025-02-01",
    "details": "Sistema modular y low-cost de adquisición para ensayos con membranas (ósmosis inversa/directa) u otros procesos físico-químicos. ESP32 alimentado por batería con sensórica intercambiable. App Flutter (Android/iOS) para visualizar tiempo real, registrar y exportar datos.",
    "specs": [
      "MCU: ESP32",
      "App: Flutter (BT Low Energy)",
      "Sensores: pH, EC, ORP, presión, peso",
      "Exportación: .csv",
      "Uso: laboratorio/field portable"
    ]
  },
  {
    "id": 19,
    "title": "LIFE",
    "description": "Monitoreo industrial para aguas grises con PLC Opta y reportes diarios online.",
    "image": "/images/LIFEMain.jpg",
    "tags": [
      "ciencia",
      "iot",
      "investigación",
      "sostenibilidad",
      "desarrollos"
    ],
    "date": "2025-03-15",
    "details": "Implementación para el proyecto europeo LIFE BIODAPH2O: diseño y despliegue de un sistema robusto de adquisición y envío de datos en infraestructura real de aguas grises. Conexión de >10 sensores (pH, OD, temp., turbidez, conductividad, caudal) a un PLC Arduino Opta + expansión. Registros en tiempo real y envío de reportes .csv diarios a los equipos de investigación; comunicación por WiFi/4G y  MQTT para integración remota. Cableado y puesta en marcha con criterios industriales (bajo mantenimiento/alta disponibilidad).",
    "specs": [
      "PLC: Arduino Opta + expansión",
      "Entradas: 4–20 mA / 0–10 V",
      "Sensores: pH, OD, turbidez, EC, caudal, temp.",
      "Comms: WiFi 4G, MQTT",
      "Automatización: reportes .csv diarios"
    ]
  },
  {
    "id": 1,
    "title": "Cerbero",
    "description": "Ser híbrido de cañas, luz, sonido y sensores que reacciona a rayos cósmicos (muones).",
    "image": "/images/cerberoMain.jpg",
    "tags": [
      "arte",
      "ciencia"
    ],
    "date": "2024-02-01",
    "details": "Instalación interactiva que reimagina al guardián del inframundo como criatura tecno-orgánica. Un sensor de rayos cósmicos activa sonido, vibración e iluminación LED en una estructura de materiales naturales. Aborda el ‘subsuelo’ como mito, territorio y psique: lo que late bajo la superficie y lo invisible que nos atraviesa.",
    "specs": [
      "Sensor: detección de muones DIY ('Cosmic Watch, MIT')",
      "Actuación: transductores + altavoces",
      "Iluminación: LED integrada",
      "Control: Arduino/microcontroladores",
      "Estructura: cañas + arena"
    ]
  },
  {
    "id": 14,
    "title": "Faktor",
    "description": "Bomba de fluido fluorescente sincronizada con video.",
    "image": "/images/FaktorMain.jpg",
    "tags": [
      "arte",
      "desarrollos",
      "video"
    ],
    "date": "2023-10-01",
    "details": "Instalación desarrollada para 'Cuando dejamos de entender el mundo' (Faktor, Milán). Circuito de mangueras con líquido fluorescente cuyo flujo se sincroniza con una pieza de video. Control integral desde Raspberry Pi con scripts para timing, autonomía y robustez in-situ.",
    "specs": [
      "Control: Raspberry Pi (Python/Shell)",
      "Actuación: bomba peristáltica + válvulas",
      "Sincronía: OSC/tiempos programados",
      "Iluminación: LEDs UV",
      "Montaje: metacrilato + aluminio"
    ]
  },
  {
    "id": 17,
    "title": "Gino Rubert",
    "description": "Cuadros con radar Doppler: la presencia revela imágenes ocultas por luz interna.",
    "image": "/images/GinoMain.jpg",
    "tags": [
      "arte",
      "desarrollos",
      "luz",
      "sonido"
    ],
    "date": "2023-10-01",
    "details": "Desarrollo de electrónica embebida en marcos: sensores Doppler detectan presencia y disparan un sistema de LED con fade in/out que muestra una capa pictórica oculta. Proyecto expuesto en distintos espacios (p.ej., Tecla Sala, 2023) y en evolución técnica continua.",
    "specs": [
      "Sensado: radar Doppler de presencia",
      "Iluminación: LED de alto CRI",
      "Control: placas a medida (Arduino)",
      "Alimentación: 12 V discreta",
      "Integración: bastidor/marco"
    ]
  },
  {
    "id": 20,
    "title": "Multiverso",
    "description": "Mural que se “pinta con luz”: encendido autónomo por horarios y coreografía lumínica.",
    "image": "/images/multiversoMain.jpg",
    "tags": [
      "arte",
      "luz"
    ],
    "date": "2023-05-01",
    "details": "Instalación lumínica autónoma en espacio público/comunitario. Secuencias programadas activan sectores del mural en franjas horarias, generando capas visuales dinámicas sin intervención humana. Batería recargable, fácil mantenimiento y ajuste de comportamiento por calendario.",
    "specs": [
      "Controlador programable (MCU)",
      "Coreografías LED",
      "Temporización horaria",
      "Alimentación: batería recargable",
      "Modo: autónomo/portátil"
    ]
  },
  {
    "id": 2,
    "title": "Biota",
    "description": "Estructura reticular sensible: movimiento del público activa paisajes sonoros.",
    "image": "/images/biotaMain.jpg",
    "tags": [
      "arte",
      "investigación",
      "sonido",
      "luz",
      "educación"
    ],
    "date": "2023-11-30",
    "details": "Instalación multimedia surgida del programa Bolit Mentor (secundaria de Girona). Integra composiciones de estudiantes activadas por PIR. El audio suena por altavoces y transductores en la estructura, permitiendo percibir la obra por tacto y ampliando la accesibilidad.",
    "specs": [
      "MCU: Arduino",
      "Audio: altavoces + transductores",
      "Sensores: PIR + ambiente",
      "Luz: pixel LED",
      "Software: playback/síntesis"
    ]
  },
  {
    "id": 22,
    "title": "Playing God",
    "description": "Biointerfaz planta–máquina: sensores traducen respuestas vegetales a sonido.",
    "image": "/images/playingGodMain.jpg",
    "tags": [
      "arte",
      "ciencia",
      "investigación"
    ],
    "date": "2022-09-15",
    "details": "Investigación artística financiada por OSIC que explora sensibilidad vegetal. Tres dispositivos: (1) sensor suelo/ambiente (pH, EC, NPK, temp., luz, presencia), (2) sensor galvánico en hojas para micro-variaciones eléctricas, (3) módulo ambiental de aire (O₂/CO₂). Traducción sonora (Max/MSP) y registro de reacciones.",
    "specs": [
      "Sensores: pH, EC, NPK, temp., luz, presencia",
      "Electrodos: pads galvánicos",
      "Soft: Max/MSP",
      "Energía: panel solar + batería",
      "Datos: logging/visualización"
    ]
  },
  {
    "id": 18,
    "title": "Kit Ambiental",
    "description": "Kit modular open-source: sensores para campo educativo/ciencia ciudadana.",
    "image": "/images/kitAmbientalMain.jpg",
    "tags": [
      "ciencia",
      "educación",
      "sostenibilidad",
      "desarrollos"
    ],
    "date": "2024-07-01",
    "details": "Plataforma DIY para observación y registro en exterior: carcasa 3D resistente a intemperie, alimentación solar/batería y sensores intercambiables (agua/aire/suelo). Registro local (SD) o envío BLE/WiFi. Pensado para talleres y trabajo comunitario.",
    "specs": [
      "MCU: ESP32",
      "Almacenamiento: microSD",
      "Conectividad: BLE/WiFi",
      "Sensores: DHT22, MQ, TDS, turbidez, etc.",
      "Alimentación: solar o batería"
    ]
  },
  {
    "id": 10,
    "title": "DeCent",
    "description": "Módulo autónomo para saneamiento/monitoreo de aire. Conjunto de sensores y actuadores conectados vía bluetooth a una interfaz gráfica que permite visualizar y guardar datos para investigación científica.",
    "image": "/images/decentMain.jpg",
    "tags": [
      "ciencia",
      "sostenibilidad",
      "investigación",
      "desarrollos"
    ],
    "date": "2023-01-01",
    "details": "Instalación experimental (decentralized + sensing + sanitation) para contextos rurales/itinerantes. Sensado de gases (metano/CO₂), humedad y temperatura de aire/suelo, logging en SD y operación autónoma con energía solar. Plataforma para prácticas eco-tecnológicas.",
    "specs": [
      "MCU: ESP32",
      "Sensores: CH₄ (100%), CO₂ (100%), O2, H2, pH",
      "Actuadores: 5 x Bombas Peristálticas",
      "Registro: microSD",
      "Energía: multivoltaje DC",
      "Formato: caja modular transportable"
    ]
  },
  {
    "id": 3,
    "title": "a-sync",
    "description": "Polifonía desincronizada: luz y sonido generan patrones fuera de fase.",
    "image": "/images/async.jpg",
    "tags": [
      "arte",
      "sonido",
      "ciencia",
      "luz"
    ],
    "date": "2023-02-15",
    "details": "Instalación de vibración/azar: transductores convierten vidrios en membranas resonantes. Capas de audio y luz se desfasan para producir pulsos que se alinean/desalinean en el espacio.",
    "specs": [
      "Audio: multicanal",
      "Control: MIDI/MaxMSP",
      "Iluminación: Esculturas led con software personalizado",
      "Actuación: transductores"
    ]
  },
  {
    "id": 4,
    "title": "silencios inquietos",
    "description": "Granulado de ruido blanco espacializado que esculpe el silencio como materia.",
    "image": "/images/silenciosInquietosMain.jpg",
    "tags": [
      "arte",
      "sonido"
    ],
    "date": "2021-12-15",
    "details": "Cinco estructuras sostienen 30 parlantes controlados por algoritmo generativo. La obra desplaza la escucha hacia una experiencia activa del ‘silencio’ y sugiere el espacio como narrativa sonora.",
    "specs": [
      "30 parlantes + 30 relés",
      "Control: Arduino",
      "Algoritmo: generativo",
      "Audio: granos de ruido blanco",
      "Site: CCK (2019)"
    ]
  },
  {
    "id": 5,
    "title": "habittat",
    "description": "Serie generativa (2015–2018): actuadores sonoros/luz moldean la percepción del espacio.",
    "image": "/images/HabittatMain.jpg",
    "tags": [
      "arte",
      "sonido"
    ],
    "date": "2020-08-15",
    "details": "Intervenciones que sitúan actuadores lumínicos y sonoros para componer secuencias orgánicas mediante microcontroladores. Un recorrido que re-entiende el espacio por estímulos visuales/acústicos.",
    "specs": [
      "Algoritmo generativo",
      "Actuadores de luz y golpeadores",
      "Microcontroladores",
      "Formato: site-specific",
      "Periodo: 2015–2018"
    ]
  },
  {
    "id": 21,
    "title": "noias",
    "description": "Dispositivos sonoros que detectan la cercanía del oído y reproducen grabaciones hechas en ese mismo punto geográfico.",
    "image": "/images/noiasMain.jpg",
    "tags": [
      "arte",
      "sonido",
      "desarrollos"
    ],
    "date": "2022-09-01",
    "details": "Dispositivos autónomos con Arduino Nano y sensor de ultrasonido que detectan la cercanía del oído para activar un altavoz. Cada uno reproduce un audio grabado en ese mismo lugar, conectando presencia física, memoria y territorio a través de la escucha.",
    "specs": [
      "Sensores: de cercanía (ultrasonido)",
      "Actuadores: altavoces",
      "Control: Arduino Nano, activación por cercanía",
      "Ambiente: mapa de la devesa de Salt"
    ]
  },
  {
    "id": 7,
    "title": "micro-bio",
    "description": "Sistema experimental para la captura y reducción de CO₂ en espacios interiores.",
    "image": "/images/microBioMain.jpg",
    "tags": [
      "ciencia",
      "investigación",
      "desarrollos"
    ],
    "date": "2022-11-03",
    "details": "Proyecto de investigación científica que integra sensores de CO₂, bombas, electroválvulas y láminas resistivas para extraer y almacenar CO₂ del aire interior. Registra datos en tarjeta SD y ofrece visualización mediante una app en Flutter, incluso en modo offline. Primera fase del proyecto Decent, con enfoque en sostenibilidad y reutilización de recursos.",
    "specs": [
      "MCU: Arduino Mega 2560",
      "Sensores: CO₂ industriales",
      "Actuadores: bombas de aire, electroválvulas, láminas resistivas calefactadas",
      "Almacenamiento: tarjeta SD",
      "Conectividad: App Flutter con soporte offline",
      "Alimentación: 12 V",
      "Sistema de captura y almacenamiento de gas"
    ]
  },
  {
    "id": 6,
    "title": "mutaciones",
    "description": "Sistema lumínico generativo: Max/MSP y Arduino Mega conmutan tubos fluorescentes mediante patrones aleatorios inspirados en el I‑Ching.",
    "image": "/images/mutacionesMain.png",
    "tags": [
      "arte",
      "luz"
    ],
    "date": "2022-12-15",
    "details": "Instalación que conecta Max/MSP con una matriz de relés controlada por Arduino Mega para encender y apagar tubos fluorescentes. Cada ejecución genera combinaciones diferentes de encendidos, componiendo imágenes lumínicas siempre cambiantes. El algoritmo introduce azar y reglas simples para mutar ritmos y composiciones, evocando el I‑Ching como motor de variación.",
    "specs": [
      "MCU: Arduino Mega 2560",
      "Software: Max/MSP (control y secuenciación)",
      "Interfaz: comunicación serial Max ⇄ Arduino",
      "Actuadores: caja de relés + tubos fluorescentes",
      "Algoritmos: patrones aleatorios/generativos"
    ]
  },
  {
    "id": 262,
    "title": "Interferencias Cósmicas",
    "description": "Detector DIY de muones + visual/sonificación en tiempo real (Pure Data).",
    "image": "/images/rayosCosmicosMain.jpg",
    "tags": [
      "arte",
      "ciencia",
      "investigación"
    ],
    "date": "2024-09-01",
    "details": "Investigación sobre rayos cósmicos y su traducción sensorial. Prototipo con centelladores y adquisición de datos; los impactos se envían a Pure Data para generar visuales reactivos y capas sonoras. Proyecto orientado a documentación abierta y replicabilidad.",
    "specs": [
      "Detección: centelladores",
      "Control: Arduino Nano",
      "Visual/Sonido: Pure Data",
      "Foco: ciencia ciudadana/DIY",
      "Estado: prototipo en evolución"
    ]
  },
  {
    "id": 8,
    "title": "Introducción a la programación y la electrónica",
    "description": "Kit/curso progresivo para iniciar en MCU, sensores y control.",
    "image": "/images/introduccionElectronica.jpg",
    "tags": [
      "educación",
      "ciencia"
    ],
    "date": "2024-12-13",
    "details": "Diseño de talleres modulares (2022–actualidad) con enfoque DIY y soberanía tecnológica: sensores ambientales, construcción de dispositivos interactivos y automatización con Arduino/ESP32. Adaptable a escuelas, universidades, festivales e instituciones.",
    "specs": [
      "MCU: Arduino/ESP32",
      "Componentes: sensores/actuadores",
      "Formato: >15 prácticas",
      "Software: libre",
      "Metodología: aprendizaje colectivo"
    ]
  },
  {
    "id": 11,
    "title": "Erik Estany Tigerstorm",
    "description": "Soporte técnico/AV: adaptación de obras, montaje, sincronía de pantallas y controladores.",
    "image": "/images/ErikPantallitasMain.jpg",
    "tags": [
      "arte",
      "desarrollos",
      "video"
    ],
    "date": "2022-06-01",
    "details": "Desarrollo/montaje para la expo ‘Del que pasa a fora’ (Viphoto Fest y Sala Amárica): integración de pantallas OLED/HDMI, controladores personalizados, sincronización y automatización para funcionamiento continuo.",
    "specs": [
      "Control: Raspberry Pi + Arduino",
      "Displays: OLED/HDMI",
      "Integración: interfaces a medida",
      "Sincronización: playback estable",
      "Servicio: montaje integral"
    ]
  },
  {
    "id": 23,
    "title": "Aleatoriedades",
    "description": "La rama de un árbol atrapada en un loop constante. Land-art.",
    "image": "/images/AleatoriedadesMain.png",
    "tags": [
      "arte",
      "land-art"
    ],
    "date": "2018-12-15",
    "details": "Tras una tormenta, una rama quedó atrapada en un ciclo repetitivo: un extremo sujeto a piedras, el otro rebotando sobre el agua. Mi intervención reforzó su estructura y anclaje para que el movimiento persistiera, extendiendo un instante fortuito hacia una observación prolongada.",
    "specs": [
      "Ubicación: El Volcán, San Luis (Argentina)",
      "Medio: land-art, intervención site-specific",
      "Materiales: rama, piedras, cuerda/refuerzo",
      "Técnica: ajuste de anclaje y estructura con piedras y madera",
      "Duración: variable, según condiciones naturales"
    ]
  },
  {
    "id": 24,
    "title": "Luciérnagas",
    "description": "Luces led con sistema y conexión personalizada crea una sinfonía luminiscente que rinde tributo a las luciérnagas.",
    "image": "/images/luciernagasMain.png",
    "tags": [
      "arte",
      "luz"
    ],
    "date": "2020-07-15",
    "details": "Instalación lumínica compuesta por LEDs conectados a un sistema de control diseñado a medida. El conjunto genera pulsos y destellos que evocan el comportamiento de las luciérnagas, transformando el espacio en una coreografía de luz que oscila entre lo natural y lo artificial.",
    "specs": [
      "MCU: Arduino Nano",
      "Luz: LED",
      "Sensores: fotodiodos",
      "Energía: batería recargable",
      "Outdoor: IP65"
    ]
  },
  {
    "id": 12,
    "title": "Dispositivos Domótica Personalizados",
    "description": "Sistemas a medida para control remoto de iluminación, sonido y accesos.",
    "image": "/images/domoticaMain.jpg",
    "tags": [
      "domótica",
      "desarrollos"
    ],
    "date": "2024-06-10",
    "details": "Desarrollo de dispositivos personalizados que requería avisos sonoros programados, control de iluminación y apertura/cierre remoto de puertas. El sistema, basado en ESP32, integra reproductor de audio DFPlayer, relés y cerraduras electromagnéticas, operando de forma centralizada y adaptable a distintas rutinas horarias.",
    "specs": [
      "MCU: ESP32",
      "Audio: DFPlayer Mini + altavoz",
      "Actuadores: relés + cerraduras electromagnéticas",
      "Funciones: avisos sonoros programados, control de iluminación, apertura/cierre de puertas",
      "Conectividad: WiFi"
    ]
  },
  {
    "id": 13,
    "title": "Todo lo que flota tiene que flotar",
    "description": "Instalación efímera de flotabilidad, equilibrio y azar en entorno natural.",
    "image": "/images/todoLoQueFlotaMain.png",
    "tags": [
      "arte",
      "land-art"
    ],
    "date": "2020-09-01",
    "details": "Ensayo sobre tensión capilar, vasos comunicantes, densidad y formas inestables usando hojas, ramas, piedras, agua y objetos locales. Registro audiovisual y partitura de acciones.",
    "specs": [
      "Site: Canet de Adri",
      "Materiales: orgánicos/in situ",
      "Acción: coreografías/percusión",
      "Documento: video",
      "Formato: efímero"
    ]
  },
  {
    "id": 27,
    "title": "Insectodrom",
    "description": "Sistema de streaming DIY para hostales de insectos con Raspberry Pi y energía solar.",
    "image": "/images/insectodromMain.png",
    "tags": [
      "ciencia",
      "investigación",
      "iot",
      "sostenibilidad",
      "video",
      "desarrollos"
    ],
    "date": "2023-04-27",
    "details": "Desarrollo técnico para el proyecto Insectodrom del centro de arte contemporáneo BLOIT, que explora la relación entre humanos, insectos y ciudades. Mi contribución consistió en diseñar e implementar un sistema completo de streaming en vivo para hostales de insectos, utilizando Raspberry Pi con módulo de cámara CAPI CAM. El sistema transmite 24/7 por Twitch, mostrando la vida de los insectos en tiempo real, y está alimentado completamente por energía solar. Además, creé un video tutorial completo que explica paso a paso cómo replicar este sistema low-cost y DIY para que otros puedan implementar sus propios streams de biodiversidad urbana.",
    "specs": [
      "Hardware: Raspberry Pi + módulo CAPI CAM",
      "Streaming: transmisión 24/7 por Twitch",
      "Energía: sistema solar autónomo",
      "Software: programación personalizada para streaming",
      "Documentación: video tutorial DIY completo",
      "Aplicación: monitoreo de biodiversidad urbana en tiempo real"
    ]
  }
];
