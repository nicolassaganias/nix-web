const projects = [
  {
    id: 28,
    title: "Curso de sensores ambientales · PUCE Ibarra",
    titleEn: "Environmental sensors course · PUCE Ibarra",
    description:
      "Semana co-creando sistemas de medición de aire y agua en la laguna Yaguarcocha, Ibarra, Ecuador.",
    descriptionEn:
      "A week co-creating air and water measurement systems at Yaguarcocha lagoon, Ibarra, Ecuador.",
    image: "/images/puce.png",
    tags: ["educación", "ciencia", "sostenibilidad", "iot"],
    date: "2026-03-14",
    link: "https://www.instagram.com/p/DV4Ysq9D3oX/",
    details:
      "Curso de sensores ambientales en colaboración con la PUCE Ibarra (@puceibarra). Una semana co-creando sistemas de medición para monitorear aire y agua de la laguna Yaguarcocha, Ibarra, Ecuador. Electricidad, electrónica y programación — todo low cost, todo replicable, todo libre. Cooperación internacional con docentes de la PUCE; diseño 3D con @capaporcapa. Porque la tecnología más poderosa es la que cualquiera puede construir y entender.",
    detailsEn:
      "Environmental sensors course in collaboration with PUCE Ibarra (@puceibarra). A week co-creating measurement systems to monitor air and water at Yaguarcocha lagoon, Ibarra, Ecuador. Electricity, electronics and programming — all low-cost, replicable and open. International cooperation with PUCE faculty; 3D design with @capaporcapa. Because the most powerful technology is the one anyone can build and understand.",
    specs: [
      "Ubicación: Yaguarcocha, Imbabura, Ecuador",
      "Institución: PUCE Ibarra",
      "Monitoreo: calidad de aire y agua de laguna",
      "Enfoque: low-cost, replicable, open-source",
      "Colaboración: docentes PUCE + diseño 3D @capaporcapa",
      "Metodología: co-creación, electricidad, electrónica, programación",
    ],
    specsEn: [
      "Location: Yaguarcocha, Imbabura, Ecuador",
      "Institution: PUCE Ibarra",
      "Monitoring: lagoon air and water quality",
      "Approach: low-cost, replicable, open-source",
      "Collaboration: PUCE faculty + 3D design @capaporcapa",
      "Method: co-creation, electricity, electronics, programming",
    ],
  },
  {
    id: 16,
    title: "GAD",
    titleEn: "GAD",
    description:
      "Sistema IoT para monitoreo y control inteligente de tanques de agua.",
    descriptionEn:
      "IoT system for intelligent monitoring and control of water tanks.",
    image: "/images/GADMain.jpeg",
    tags: ["ciencia", "iot", "sostenibilidad", "desarrollos"],
    date: "2025-01-10",
    details:
      "GAD es un sistema de gestión de agua que combina sensores de ultrasonido y caudalímetros para medir nivel y consumo en tanques domésticos o de edificios. Los datos se envían a una plataforma central en línea, desde la que se puede controlar de forma remota la apertura y cierre de la electroválvula de carga. Esto permite optimizar el uso del recurso, prevenir desabastecimientos y responder rápidamente a fugas o consumos inusuales. El diseño incluye módulos autónomos basados en ESP32 que se acoplan directamente a los tanques, con electrónica protegida y comunicación estable para contextos urbanos o zonas con escasez hídrica.",
    detailsEn:
      "GAD is a water management system that combines ultrasonic sensors and flow meters to measure level and consumption in domestic or building tanks. Data is sent to a central online platform from which the fill solenoid valve can be opened and closed remotely. This helps optimize resource use, prevent shortages and respond quickly to leaks or unusual consumption. The design includes autonomous ESP32-based modules that attach directly to tanks, with protected electronics and stable communication for urban contexts or water-scarce areas.",
    specs: [
      "MCU: ESP32 con conectividad WiFi",
      "Sensores: ultrasonido para nivel y caudalímetros para consumo",
      "Actuadores: electroválvula para carga controlada",
      "Plataforma: gestión remota online basada en Firebase",
      "Aplicación: optimización y control inteligente del agua",
    ],
    specsEn: [
      "MCU: ESP32 with WiFi connectivity",
      "Sensors: ultrasonic for level and flow meters for consumption",
      "Actuators: solenoid valve for controlled filling",
      "Platform: Firebase-based remote online management",
      "Application: intelligent water optimization and control",
    ],
  },
  {
    id: 15,
    title: "Flapp",
    titleEn: "Flapp",
    description:
      "Plataforma BLE + app móvil para registrar parámetros del agua en laboratorio.",
    descriptionEn:
      "BLE platform + mobile app to log water parameters in the lab.",
    image: "/images/FlappMain.jpg",
    tags: ["ciencia", "iot", "investigación", "sostenibilidad", "desarrollos"],
    date: "2025-02-01",
    details:
      "Sistema modular y low-cost de adquisición para ensayos con membranas (ósmosis inversa/directa) u otros procesos físico-químicos. ESP32 alimentado por batería con sensórica intercambiable. App Flutter (Android/iOS) para visualizar tiempo real, registrar y exportar datos.",
    detailsEn:
      "Modular, low-cost acquisition system for membrane trials (reverse/forward osmosis) or other physico-chemical processes. Battery-powered ESP32 with swappable sensing. Flutter app (Android/iOS) for real-time visualization, logging and data export.",
    specs: [
      "MCU: ESP32",
      "App: Flutter (BT Low Energy)",
      "Sensores: pH, EC, ORP, presión, peso",
      "Exportación: .csv",
      "Uso: laboratorio/field portable",
    ],
    specsEn: [
      "MCU: ESP32",
      "App: Flutter (BT Low Energy)",
      "Sensors: pH, EC, ORP, pressure, weight",
      "Export: .csv",
      "Use: lab / portable field",
    ],
  },
  {
    id: 19,
    title: "LIFE",
    titleEn: "LIFE",
    description:
      "Monitoreo industrial para aguas grises con PLC Opta y reportes diarios online.",
    descriptionEn:
      "Industrial greywater monitoring with Opta PLC and daily online reports.",
    image: "/images/LIFEMain.jpg",
    tags: ["ciencia", "iot", "investigación", "sostenibilidad", "desarrollos"],
    date: "2025-03-15",
    details:
      "Implementación para el proyecto europeo LIFE BIODAPH2O: diseño y despliegue de un sistema robusto de adquisición y envío de datos en infraestructura real de aguas grises. Conexión de >10 sensores (pH, OD, temp., turbidez, conductividad, caudal) a un PLC Arduino Opta + expansión. Registros en tiempo real y envío de reportes .csv diarios a los equipos de investigación; comunicación por WiFi/4G y  MQTT para integración remota. Cableado y puesta en marcha con criterios industriales (bajo mantenimiento/alta disponibilidad).",
    detailsEn:
      "Implementation for the European LIFE BIODAPH2O project: design and deployment of a robust data acquisition and transmission system on real greywater infrastructure. Connection of >10 sensors (pH, DO, temp., turbidity, conductivity, flow) to an Arduino Opta PLC + expansion. Real-time logging and daily .csv reports to research teams; WiFi/4G and MQTT for remote integration. Wiring and commissioning with industrial criteria (low maintenance / high availability).",
    specs: [
      "PLC: Arduino Opta + expansión",
      "Entradas: 4–20 mA / 0–10 V",
      "Sensores: pH, OD, turbidez, EC, caudal, temp.",
      "Comms: WiFi 4G, MQTT",
      "Automatización: reportes .csv diarios",
    ],
    specsEn: [
      "PLC: Arduino Opta + expansion",
      "Inputs: 4–20 mA / 0–10 V",
      "Sensors: pH, DO, turbidity, EC, flow, temp.",
      "Comms: WiFi 4G, MQTT",
      "Automation: daily .csv reports",
    ],
  },
  {
    id: 1,
    title: "Cerbero",
    titleEn: "Cerbero",
    description:
      "Ser híbrido de cañas, luz, sonido y sensores que reacciona a rayos cósmicos (muones).",
    descriptionEn:
      "Hybrid being of reeds, light, sound and sensors that reacts to cosmic rays (muons).",
    image: "/images/cerberoMain.jpg",
    tags: ["arte", "ciencia"],
    date: "2024-02-01",
    details:
      "Instalación interactiva que reimagina al guardián del inframundo como criatura tecno-orgánica. Un sensor de rayos cósmicos activa sonido, vibración e iluminación LED en una estructura de materiales naturales. Aborda el ‘subsuelo’ como mito, territorio y psique: lo que late bajo la superficie y lo invisible que nos atraviesa.",
    detailsEn:
      "Interactive installation that reimagines the underworld guardian as a techno-organic creature. A cosmic-ray sensor triggers sound, vibration and LED lighting in a structure of natural materials. It addresses the ‘underground’ as myth, territory and psyche: what pulses beneath the surface and the invisible that passes through us.",
    specs: [
      "Sensor: detección de muones DIY ('Cosmic Watch, MIT')",
      "Actuación: transductores + altavoces",
      "Iluminación: LED integrada",
      "Control: Arduino/microcontroladores",
      "Estructura: cañas + arena",
    ],
    specsEn: [
      "Sensor: DIY muon detection ('Cosmic Watch, MIT')",
      "Actuation: transducers + speakers",
      "Lighting: integrated LED",
      "Control: Arduino/microcontrollers",
      "Structure: reeds + sand",
    ],
  },
  {
    id: 14,
    title: "Faktor",
    titleEn: "Faktor",
    description: "Bomba de fluido fluorescente sincronizada con video.",
    descriptionEn: "Fluorescent fluid pump synchronized with video.",
    image: "/images/FaktorMain.jpg",
    tags: ["arte", "desarrollos", "video"],
    date: "2023-10-01",
    details:
      "Instalación desarrollada para 'Cuando dejamos de entender el mundo' (Faktor, Milán). Circuito de mangueras con líquido fluorescente cuyo flujo se sincroniza con una pieza de video. Control integral desde Raspberry Pi con scripts para timing, autonomía y robustez in-situ.",
    detailsEn:
      "Installation developed for 'Cuando dejamos de entender el mundo' (Faktor, Milan). A hose circuit with fluorescent liquid whose flow is synchronized with a video piece. Full control from a Raspberry Pi with scripts for timing, autonomy and on-site robustness.",
    specs: [
      "Control: Raspberry Pi (Python/Shell)",
      "Actuación: bomba peristáltica + válvulas",
      "Sincronía: OSC/tiempos programados",
      "Iluminación: LEDs UV",
      "Montaje: metacrilato + aluminio",
    ],
    specsEn: [
      "Control: Raspberry Pi (Python/Shell)",
      "Actuation: peristaltic pump + valves",
      "Sync: OSC / scheduled timing",
      "Lighting: UV LEDs",
      "Build: acrylic + aluminum",
    ],
  },
  {
    id: 17,
    title: "Gino Rubert",
    titleEn: "Gino Rubert",
    description:
      "Cuadros con radar Doppler: la presencia revela imágenes ocultas por luz interna.",
    descriptionEn:
      "Paintings with Doppler radar: presence reveals images hidden by internal light.",
    image: "/images/GinoMain.jpg",
    tags: ["arte", "desarrollos", "luz", "sonido"],
    date: "2023-10-01",
    details:
      "Desarrollo de electrónica embebida en marcos: sensores Doppler detectan presencia y disparan un sistema de LED con fade in/out que muestra una capa pictórica oculta. Proyecto expuesto en distintos espacios (p.ej., Tecla Sala, 2023) y en evolución técnica continua.",
    detailsEn:
      "Embedded electronics developed inside frames: Doppler sensors detect presence and trigger an LED system with fade in/out that reveals a hidden pictorial layer. Shown in several venues (e.g. Tecla Sala, 2023) and still evolving technically.",
    specs: [
      "Sensado: radar Doppler de presencia",
      "Iluminación: LED de alto CRI",
      "Control: placas a medida (Arduino)",
      "Alimentación: 12 V discreta",
      "Integración: bastidor/marco",
    ],
    specsEn: [
      "Sensing: Doppler presence radar",
      "Lighting: high-CRI LED",
      "Control: custom boards (Arduino)",
      "Power: discrete 12 V",
      "Integration: stretcher/frame",
    ],
  },
  {
    id: 20,
    title: "Multiverso",
    titleEn: "Multiverso",
    description:
      "Mural que se “pinta con luz”: encendido autónomo por horarios y coreografía lumínica.",
    descriptionEn:
      "Mural that “paints with light”: autonomous timed lighting and light choreography.",
    image: "/images/multiversoMain.jpg",
    tags: ["arte", "luz"],
    date: "2023-05-01",
    details:
      "Instalación lumínica autónoma en espacio público/comunitario. Secuencias programadas activan sectores del mural en franjas horarias, generando capas visuales dinámicas sin intervención humana. Batería recargable, fácil mantenimiento y ajuste de comportamiento por calendario.",
    detailsEn:
      "Autonomous light installation in a public/community space. Programmed sequences activate mural sectors by time slots, creating dynamic visual layers without human intervention. Rechargeable battery, easy maintenance and calendar-based behavior.",
    specs: [
      "Controlador programable (MCU)",
      "Coreografías LED",
      "Temporización horaria",
      "Alimentación: batería recargable",
      "Modo: autónomo/portátil",
    ],
    specsEn: [
      "Programmable controller (MCU)",
      "LED choreographies",
      "Time-based scheduling",
      "Power: rechargeable battery",
      "Mode: autonomous / portable",
    ],
  },
  {
    id: 2,
    title: "Biota",
    titleEn: "Biota",
    description:
      "Estructura reticular sensible: movimiento del público activa paisajes sonoros.",
    descriptionEn:
      "Sensitive lattice structure: audience movement triggers soundscapes.",
    image: "/images/biotaMain.jpg",
    tags: ["arte", "investigación", "sonido", "luz", "educación"],
    date: "2023-11-30",
    details:
      "Instalación multimedia surgida del programa Bolit Mentor (secundaria de Girona). Integra composiciones de estudiantes activadas por PIR. El audio suena por altavoces y transductores en la estructura, permitiendo percibir la obra por tacto y ampliando la accesibilidad.",
    detailsEn:
      "Multimedia installation from the Bolit Mentor program (secondary schools in Girona). Integrates student compositions triggered by PIR. Audio plays through speakers and transducers in the structure, allowing tactile perception and expanding accessibility.",
    specs: [
      "MCU: Arduino",
      "Audio: altavoces + transductores",
      "Sensores: PIR + ambiente",
      "Luz: pixel LED",
      "Software: playback/síntesis",
    ],
    specsEn: [
      "MCU: Arduino",
      "Audio: speakers + transducers",
      "Sensors: PIR + environmental",
      "Light: pixel LED",
      "Software: playback / synthesis",
    ],
  },
  {
    id: 22,
    title: "Playing God",
    titleEn: "Playing God",
    description:
      "Biointerfaz planta–máquina: sensores traducen respuestas vegetales a sonido.",
    descriptionEn:
      "Plant–machine biointerface: sensors translate plant responses into sound.",
    image: "/images/playingGodMain.jpg",
    tags: ["arte", "ciencia", "investigación"],
    date: "2022-09-15",
    details:
      "Investigación artística financiada por OSIC que explora sensibilidad vegetal. Tres dispositivos: (1) sensor suelo/ambiente (pH, EC, NPK, temp., luz, presencia), (2) sensor galvánico en hojas para micro-variaciones eléctricas, (3) módulo ambiental de aire (O₂/CO₂). Traducción sonora (Max/MSP) y registro de reacciones.",
    detailsEn:
      "Artistic research funded by OSIC exploring plant sensitivity. Three devices: (1) soil/environment sensor (pH, EC, NPK, temp., light, presence), (2) galvanic leaf sensor for electrical micro-variations, (3) air environment module (O₂/CO₂). Sound translation (Max/MSP) and reaction logging.",
    specs: [
      "Sensores: pH, EC, NPK, temp., luz, presencia",
      "Electrodos: pads galvánicos",
      "Soft: Max/MSP",
      "Energía: panel solar + batería",
      "Datos: logging/visualización",
    ],
    specsEn: [
      "Sensors: pH, EC, NPK, temp., light, presence",
      "Electrodes: galvanic pads",
      "Soft: Max/MSP",
      "Power: solar panel + battery",
      "Data: logging / visualization",
    ],
  },
  {
    id: 18,
    title: "Kit Ambiental",
    titleEn: "Environmental Kit",
    description:
      "Kit modular open-source: sensores para campo educativo/ciencia ciudadana.",
    descriptionEn:
      "Modular open-source kit: sensors for education and citizen science.",
    image: "/images/kitAmbientalMain.jpg",
    tags: ["ciencia", "educación", "sostenibilidad", "desarrollos"],
    date: "2024-07-01",
    details:
      "Plataforma DIY para observación y registro en exterior: carcasa 3D resistente a intemperie, alimentación solar/batería y sensores intercambiables (agua/aire/suelo). Registro local (SD) o envío BLE/WiFi. Pensado para talleres y trabajo comunitario.",
    detailsEn:
      "DIY platform for outdoor observation and logging: weatherproof 3D enclosure, solar/battery power and swappable sensors (water/air/soil). Local logging (SD) or BLE/WiFi transmission. Designed for workshops and community work.",
    specs: [
      "MCU: ESP32",
      "Almacenamiento: microSD",
      "Conectividad: BLE/WiFi",
      "Sensores: DHT22, MQ, TDS, turbidez, etc.",
      "Alimentación: solar o batería",
    ],
    specsEn: [
      "MCU: ESP32",
      "Storage: microSD",
      "Connectivity: BLE/WiFi",
      "Sensors: DHT22, MQ, TDS, turbidity, etc.",
      "Power: solar or battery",
    ],
  },
  {
    id: 10,
    title: "DeCent",
    titleEn: "DeCent",
    description:
      "Módulo autónomo para saneamiento/monitoreo de aire. Conjunto de sensores y actuadores conectados vía bluetooth a una interfaz gráfica que permite visualizar y guardar datos para investigación científica.",
    descriptionEn:
      "Autonomous module for air sanitation/monitoring. Sensors and actuators linked via Bluetooth to a GUI for visualizing and saving scientific research data.",
    image: "/images/decentMain.jpg",
    tags: ["ciencia", "sostenibilidad", "investigación", "desarrollos"],
    date: "2023-01-01",
    details:
      "Instalación experimental (decentralized + sensing + sanitation) para contextos rurales/itinerantes. Sensado de gases (metano/CO₂), humedad y temperatura de aire/suelo, logging en SD y operación autónoma con energía solar. Plataforma para prácticas eco-tecnológicas.",
    detailsEn:
      "Experimental installation (decentralized + sensing + sanitation) for rural/itinerant contexts. Gas sensing (methane/CO₂), air/soil humidity and temperature, SD logging and autonomous solar operation. A platform for eco-technological practice.",
    specs: [
      "MCU: ESP32",
      "Sensores: CH₄ (100%), CO₂ (100%), O2, H2, pH",
      "Actuadores: 5 x Bombas Peristálticas",
      "Registro: microSD",
      "Energía: multivoltaje DC",
      "Formato: caja modular transportable",
    ],
    specsEn: [
      "MCU: ESP32",
      "Sensors: CH₄ (100%), CO₂ (100%), O2, H2, pH",
      "Actuators: 5× peristaltic pumps",
      "Logging: microSD",
      "Power: multi-voltage DC",
      "Format: portable modular box",
    ],
  },
  {
    id: 3,
    title: "a-sync",
    titleEn: "a-sync",
    description:
      "Polifonía desincronizada: luz y sonido generan patrones fuera de fase.",
    descriptionEn:
      "Desynchronized polyphony: light and sound generate out-of-phase patterns.",
    image: "/images/async.jpg",
    tags: ["arte", "sonido", "ciencia", "luz"],
    date: "2023-02-15",
    details:
      "Instalación de vibración/azar: transductores convierten vidrios en membranas resonantes. Capas de audio y luz se desfasan para producir pulsos que se alinean/desalinean en el espacio.",
    detailsEn:
      "Vibration/chance installation: transducers turn glass into resonant membranes. Audio and light layers drift out of phase, producing pulses that align and misalign in space.",
    specs: [
      "Audio: multicanal",
      "Control: MIDI/MaxMSP",
      "Iluminación: Esculturas led con software personalizado",
      "Actuación: transductores",
    ],
    specsEn: [
      "Audio: multichannel",
      "Control: MIDI/MaxMSP",
      "Lighting: LED sculptures with custom software",
      "Actuation: transducers",
    ],
  },
  {
    id: 4,
    title: "silencios inquietos",
    titleEn: "restless silences",
    description:
      "Granulado de ruido blanco espacializado que esculpe el silencio como materia.",
    descriptionEn:
      "Spatialized white-noise granulation that sculpts silence as material.",
    image: "/images/silenciosInquietosMain.jpg",
    tags: ["arte", "sonido"],
    date: "2021-12-15",
    details:
      "Cinco estructuras sostienen 30 parlantes controlados por algoritmo generativo. La obra desplaza la escucha hacia una experiencia activa del ‘silencio’ y sugiere el espacio como narrativa sonora.",
    detailsEn:
      "Five structures hold 30 speakers driven by a generative algorithm. The work shifts listening toward an active experience of ‘silence’ and frames space as a sonic narrative.",
    specs: [
      "30 parlantes + 30 relés",
      "Control: Arduino",
      "Algoritmo: generativo",
      "Audio: granos de ruido blanco",
      "Site: CCK (2019)",
    ],
    specsEn: [
      "30 speakers + 30 relays",
      "Control: Arduino",
      "Algorithm: generative",
      "Audio: white-noise grains",
      "Site: CCK (2019)",
    ],
  },
  {
    id: 5,
    title: "habittat",
    titleEn: "habittat",
    description:
      "Serie generativa (2015–2018): actuadores sonoros/luz moldean la percepción del espacio.",
    descriptionEn:
      "Generative series (2015–2018): sound/light actuators shape spatial perception.",
    image: "/images/HabittatMain.jpg",
    tags: ["arte", "sonido"],
    date: "2020-08-15",
    details:
      "Intervenciones que sitúan actuadores lumínicos y sonoros para componer secuencias orgánicas mediante microcontroladores. Un recorrido que re-entiende el espacio por estímulos visuales/acústicos.",
    detailsEn:
      "Interventions placing light and sound actuators to compose organic sequences via microcontrollers. A path that re-reads space through visual/acoustic stimuli.",
    specs: [
      "Algoritmo generativo",
      "Actuadores de luz y golpeadores",
      "Microcontroladores",
      "Formato: site-specific",
      "Periodo: 2015–2018",
    ],
    specsEn: [
      "Generative algorithm",
      "Light actuators and strikers",
      "Microcontrollers",
      "Format: site-specific",
      "Period: 2015–2018",
    ],
  },
  {
    id: 21,
    title: "noias",
    titleEn: "noias",
    description:
      "Dispositivos sonoros que detectan la cercanía del oído y reproducen grabaciones hechas en ese mismo punto geográfico.",
    descriptionEn:
      "Sound devices that detect ear proximity and play recordings made at that same geographic point.",
    image: "/images/noiasMain.jpg",
    tags: ["arte", "sonido", "desarrollos"],
    date: "2022-09-01",
    details:
      "Dispositivos autónomos con Arduino Nano y sensor de ultrasonido que detectan la cercanía del oído para activar un altavoz. Cada uno reproduce un audio grabado en ese mismo lugar, conectando presencia física, memoria y territorio a través de la escucha.",
    detailsEn:
      "Autonomous devices with Arduino Nano and ultrasonic sensor that detect ear proximity to trigger a speaker. Each plays audio recorded at that same place, linking physical presence, memory and territory through listening.",
    specs: [
      "Sensores: de cercanía (ultrasonido)",
      "Actuadores: altavoces",
      "Control: Arduino Nano, activación por cercanía",
      "Ambiente: mapa de la devesa de Salt",
    ],
    specsEn: [
      "Sensors: proximity (ultrasonic)",
      "Actuators: speakers",
      "Control: Arduino Nano, proximity activation",
      "Setting: map of the Devesa de Salt",
    ],
  },
  {
    id: 7,
    title: "micro-bio",
    titleEn: "micro-bio",
    description:
      "Sistema experimental para la captura y reducción de CO₂ en espacios interiores.",
    descriptionEn:
      "Experimental system for capturing and reducing CO₂ in indoor spaces.",
    image: "/images/microBioMain.jpg",
    tags: ["ciencia", "investigación", "desarrollos"],
    date: "2022-11-03",
    details:
      "Proyecto de investigación científica que integra sensores de CO₂, bombas, electroválvulas y láminas resistivas para extraer y almacenar CO₂ del aire interior. Registra datos en tarjeta SD y ofrece visualización mediante una app en Flutter, incluso en modo offline. Primera fase del proyecto Decent, con enfoque en sostenibilidad y reutilización de recursos.",
    detailsEn:
      "Scientific research project integrating CO₂ sensors, pumps, solenoid valves and resistive sheets to extract and store CO₂ from indoor air. Logs data to an SD card and offers visualization via a Flutter app, including offline mode. First phase of the Decent project, focused on sustainability and resource reuse.",
    specs: [
      "MCU: Arduino Mega 2560",
      "Sensores: CO₂ industriales",
      "Actuadores: bombas de aire, electroválvulas, láminas resistivas calefactadas",
      "Almacenamiento: tarjeta SD",
      "Conectividad: App Flutter con soporte offline",
      "Alimentación: 12 V",
      "Sistema de captura y almacenamiento de gas",
    ],
    specsEn: [
      "MCU: Arduino Mega 2560",
      "Sensors: industrial CO₂",
      "Actuators: air pumps, solenoid valves, heated resistive sheets",
      "Storage: SD card",
      "Connectivity: Flutter app with offline support",
      "Power: 12 V",
      "Gas capture and storage system",
    ],
  },
  {
    id: 6,
    title: "mutaciones",
    titleEn: "mutations",
    description:
      "Sistema lumínico generativo: Max/MSP y Arduino Mega conmutan tubos fluorescentes mediante patrones aleatorios inspirados en el I‑Ching.",
    descriptionEn:
      "Generative lighting system: Max/MSP and Arduino Mega switch fluorescent tubes via random I‑Ching–inspired patterns.",
    image: "/images/mutacionesMain.png",
    tags: ["arte", "luz"],
    date: "2022-12-15",
    details:
      "Instalación que conecta Max/MSP con una matriz de relés controlada por Arduino Mega para encender y apagar tubos fluorescentes. Cada ejecución genera combinaciones diferentes de encendidos, componiendo imágenes lumínicas siempre cambiantes. El algoritmo introduce azar y reglas simples para mutar ritmos y composiciones, evocando el I‑Ching como motor de variación.",
    detailsEn:
      "Installation linking Max/MSP to a relay matrix controlled by Arduino Mega to switch fluorescent tubes on and off. Each run yields different lighting combinations, composing ever-changing luminous images. The algorithm mixes chance and simple rules to mutate rhythms and compositions, echoing the I‑Ching as a variation engine.",
    specs: [
      "MCU: Arduino Mega 2560",
      "Software: Max/MSP (control y secuenciación)",
      "Interfaz: comunicación serial Max ⇄ Arduino",
      "Actuadores: caja de relés + tubos fluorescentes",
      "Algoritmos: patrones aleatorios/generativos",
    ],
    specsEn: [
      "MCU: Arduino Mega 2560",
      "Software: Max/MSP (control and sequencing)",
      "Interface: serial Max ⇄ Arduino",
      "Actuators: relay box + fluorescent tubes",
      "Algorithms: random / generative patterns",
    ],
  },
  {
    id: 262,
    title: "Interferencias Cósmicas",
    titleEn: "Cosmic Interferences",
    description:
      "Detector DIY de muones + visual/sonificación en tiempo real (Pure Data).",
    descriptionEn:
      "DIY muon detector + real-time visual/sonification (Pure Data).",
    image: "/images/rayosCosmicosMain.jpg",
    tags: ["arte", "ciencia", "investigación"],
    date: "2024-09-01",
    details:
      "Investigación sobre rayos cósmicos y su traducción sensorial. Prototipo con centelladores y adquisición de datos; los impactos se envían a Pure Data para generar visuales reactivos y capas sonoras. Proyecto orientado a documentación abierta y replicabilidad.",
    detailsEn:
      "Research on cosmic rays and their sensory translation. Prototype with scintillators and data acquisition; impacts are sent to Pure Data to generate reactive visuals and sound layers. Oriented toward open documentation and replicability.",
    specs: [
      "Detección: centelladores",
      "Control: Arduino Nano",
      "Visual/Sonido: Pure Data",
      "Foco: ciencia ciudadana/DIY",
      "Estado: prototipo en evolución",
    ],
    specsEn: [
      "Detection: scintillators",
      "Control: Arduino Nano",
      "Visual/Sound: Pure Data",
      "Focus: citizen science / DIY",
      "Status: evolving prototype",
    ],
  },
  {
    id: 8,
    title: "Introducción a la programación y la electrónica",
    titleEn: "Introduction to programming and electronics",
    description:
      "Kit/curso progresivo para iniciar en MCU, sensores y control.",
    descriptionEn:
      "Progressive kit/course to get started with MCUs, sensors and control.",
    image: "/images/introduccionElectronica.jpg",
    tags: ["educación", "ciencia"],
    date: "2024-12-13",
    details:
      "Diseño de talleres modulares (2022–actualidad) con enfoque DIY y soberanía tecnológica: sensores ambientales, construcción de dispositivos interactivos y automatización con Arduino/ESP32. Adaptable a escuelas, universidades, festivales e instituciones.",
    detailsEn:
      "Design of modular workshops (2022–present) with a DIY and technological sovereignty focus: environmental sensors, interactive device building and automation with Arduino/ESP32. Adaptable to schools, universities, festivals and institutions.",
    specs: [
      "MCU: Arduino/ESP32",
      "Componentes: sensores/actuadores",
      "Formato: >15 prácticas",
      "Software: libre",
      "Metodología: aprendizaje colectivo",
    ],
    specsEn: [
      "MCU: Arduino/ESP32",
      "Components: sensors/actuators",
      "Format: >15 practices",
      "Software: free/open",
      "Method: collective learning",
    ],
  },
  {
    id: 11,
    title: "Erik Estany Tigerstorm",
    titleEn: "Erik Estany Tigerstorm",
    description:
      "Soporte técnico/AV: adaptación de obras, montaje, sincronía de pantallas y controladores.",
    descriptionEn:
      "Technical/AV support: adapting works, install, screen sync and controllers.",
    image: "/images/ErikPantallitasMain.jpg",
    tags: ["arte", "desarrollos", "video"],
    date: "2022-06-01",
    details:
      "Desarrollo/montaje para la expo ‘Del que pasa a fora’ (Viphoto Fest y Sala Amárica): integración de pantallas OLED/HDMI, controladores personalizados, sincronización y automatización para funcionamiento continuo.",
    detailsEn:
      "Development/install for the exhibition ‘Del que pasa a fora’ (Viphoto Fest and Sala Amárica): OLED/HDMI screen integration, custom controllers, synchronization and automation for continuous operation.",
    specs: [
      "Control: Raspberry Pi + Arduino",
      "Displays: OLED/HDMI",
      "Integración: interfaces a medida",
      "Sincronización: playback estable",
      "Servicio: montaje integral",
    ],
    specsEn: [
      "Control: Raspberry Pi + Arduino",
      "Displays: OLED/HDMI",
      "Integration: custom interfaces",
      "Sync: stable playback",
      "Service: full install",
    ],
  },
  {
    id: 23,
    title: "Aleatoriedades",
    titleEn: "Aleatoriedades",
    description: "La rama de un árbol atrapada en un loop constante. Land-art.",
    descriptionEn: "A tree branch trapped in a constant loop. Land art.",
    image: "/images/AleatoriedadesMain.png",
    tags: ["arte", "land-art"],
    date: "2018-12-15",
    details:
      "Tras una tormenta, una rama quedó atrapada en un ciclo repetitivo: un extremo sujeto a piedras, el otro rebotando sobre el agua. Mi intervención reforzó su estructura y anclaje para que el movimiento persistiera, extendiendo un instante fortuito hacia una observación prolongada.",
    detailsEn:
      "After a storm, a branch was trapped in a repetitive cycle: one end held by stones, the other bouncing on the water. My intervention reinforced its structure and anchoring so the motion would persist, extending a chance moment into prolonged observation.",
    specs: [
      "Ubicación: El Volcán, San Luis (Argentina)",
      "Medio: land-art, intervención site-specific",
      "Materiales: rama, piedras, cuerda/refuerzo",
      "Técnica: ajuste de anclaje y estructura con piedras y madera",
      "Duración: variable, según condiciones naturales",
    ],
    specsEn: [
      "Location: El Volcán, San Luis (Argentina)",
      "Medium: land art, site-specific intervention",
      "Materials: branch, stones, rope/reinforcement",
      "Technique: anchoring and structure with stones and wood",
      "Duration: variable, depending on natural conditions",
    ],
  },
  {
    id: 24,
    title: "Luciérnagas",
    titleEn: "Fireflies",
    description:
      "Luces led con sistema y conexión personalizada crea una sinfonía luminiscente que rinde tributo a las luciérnagas.",
    descriptionEn:
      "Custom LED lights and wiring create a luminous symphony paying tribute to fireflies.",
    image: "/images/luciernagasMain.png",
    tags: ["arte", "luz"],
    date: "2020-07-15",
    details:
      "Instalación lumínica compuesta por LEDs conectados a un sistema de control diseñado a medida. El conjunto genera pulsos y destellos que evocan el comportamiento de las luciérnagas, transformando el espacio en una coreografía de luz que oscila entre lo natural y lo artificial.",
    detailsEn:
      "Light installation of LEDs connected to a custom control system. The ensemble generates pulses and flashes that evoke firefly behavior, turning the space into a light choreography between the natural and the artificial.",
    specs: [
      "MCU: Arduino Nano",
      "Luz: LED",
      "Sensores: fotodiodos",
      "Energía: batería recargable",
      "Outdoor: IP65",
    ],
    specsEn: [
      "MCU: Arduino Nano",
      "Light: LED",
      "Sensors: photodiodes",
      "Power: rechargeable battery",
      "Outdoor: IP65",
    ],
  },
  {
    id: 12,
    title: "Dispositivos Domótica Personalizados",
    titleEn: "Custom home-automation devices",
    description:
      "Sistemas a medida para control remoto de iluminación, sonido y accesos.",
    descriptionEn:
      "Custom systems for remote control of lighting, sound and access.",
    image: "/images/domoticaMain.jpg",
    tags: ["domótica", "desarrollos"],
    date: "2024-06-10",
    details:
      "Desarrollo de dispositivos personalizados que requería avisos sonoros programados, control de iluminación y apertura/cierre remoto de puertas. El sistema, basado en ESP32, integra reproductor de audio DFPlayer, relés y cerraduras electromagnéticas, operando de forma centralizada y adaptable a distintas rutinas horarias.",
    detailsEn:
      "Custom devices requiring scheduled sound alerts, lighting control and remote door open/close. The ESP32-based system integrates a DFPlayer audio module, relays and electromagnetic locks, running centrally and adaptable to different time routines.",
    specs: [
      "MCU: ESP32",
      "Audio: DFPlayer Mini + altavoz",
      "Actuadores: relés + cerraduras electromagnéticas",
      "Funciones: avisos sonoros programados, control de iluminación, apertura/cierre de puertas",
      "Conectividad: WiFi",
    ],
    specsEn: [
      "MCU: ESP32",
      "Audio: DFPlayer Mini + speaker",
      "Actuators: relays + electromagnetic locks",
      "Functions: scheduled sound alerts, lighting control, door open/close",
      "Connectivity: WiFi",
    ],
  },
  {
    id: 13,
    title: "Todo lo que flota tiene que flotar",
    titleEn: "Everything that floats must float",
    description:
      "Instalación efímera de flotabilidad, equilibrio y azar en entorno natural.",
    descriptionEn:
      "Ephemeral installation of buoyancy, balance and chance in a natural setting.",
    image: "/images/todoLoQueFlotaMain.png",
    tags: ["arte", "land-art"],
    date: "2020-09-01",
    details:
      "Ensayo sobre tensión capilar, vasos comunicantes, densidad y formas inestables usando hojas, ramas, piedras, agua y objetos locales. Registro audiovisual y partitura de acciones.",
    detailsEn:
      "Essay on capillary tension, communicating vessels, density and unstable forms using leaves, branches, stones, water and local objects. Audiovisual documentation and action score.",
    specs: [
      "Site: Canet de Adri",
      "Materiales: orgánicos/in situ",
      "Acción: coreografías/percusión",
      "Documento: video",
      "Formato: efímero",
    ],
    specsEn: [
      "Site: Canet de Adri",
      "Materials: organic / in situ",
      "Action: choreographies / percussion",
      "Document: video",
      "Format: ephemeral",
    ],
  },
  {
    id: 27,
    title: "Insectodrom",
    titleEn: "Insectodrom",
    description:
      "Sistema de streaming DIY para hostales de insectos con Raspberry Pi y energía solar.",
    descriptionEn:
      "DIY streaming system for insect hotels with Raspberry Pi and solar power.",
    image: "/images/insectodromMain.png",
    tags: [
      "ciencia",
      "investigación",
      "iot",
      "sostenibilidad",
      "video",
      "desarrollos",
    ],
    date: "2023-04-27",
    details:
      "Desarrollo técnico para el proyecto Insectodrom del centro de arte contemporáneo BLOIT, que explora la relación entre humanos, insectos y ciudades. Mi contribución consistió en diseñar e implementar un sistema completo de streaming en vivo para hostales de insectos, utilizando Raspberry Pi con módulo de cámara CAPI CAM. El sistema transmite 24/7 por Twitch, mostrando la vida de los insectos en tiempo real, y está alimentado completamente por energía solar. Además, creé un video tutorial completo que explica paso a paso cómo replicar este sistema low-cost y DIY para que otros puedan implementar sus propios streams de biodiversidad urbana.",
    detailsEn:
      "Technical development for the Insectodrom project at the BLOIT contemporary art center, exploring relations between humans, insects and cities. I designed and implemented a full live-streaming system for insect hotels using a Raspberry Pi with a CAPI CAM module. The system streams 24/7 on Twitch, showing insect life in real time, fully powered by solar energy. I also made a complete video tutorial explaining how to replicate this low-cost DIY system so others can run their own urban biodiversity streams.",
    specs: [
      "Hardware: Raspberry Pi + módulo CAPI CAM",
      "Streaming: transmisión 24/7 por Twitch",
      "Energía: sistema solar autónomo",
      "Software: programación personalizada para streaming",
      "Documentación: video tutorial DIY completo",
      "Aplicación: monitoreo de biodiversidad urbana en tiempo real",
    ],
    specsEn: [
      "Hardware: Raspberry Pi + CAPI CAM module",
      "Streaming: 24/7 Twitch transmission",
      "Power: autonomous solar system",
      "Software: custom streaming code",
      "Documentation: full DIY video tutorial",
      "Application: real-time urban biodiversity monitoring",
    ],
  },
];
