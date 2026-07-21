const I18N = {
  es: {
    metaTitle: "NIX | Arte, Ciencia y Tecnología",
    metaDescription:
      "Portfolio multidisciplinario de Nicolás Saganías: desarrollos tecnológicos, arte interactivo, investigación y educación.",
    navUniverses: "Universos",
    navWorks: "Obras",
    navContexts: "Contextos",
    navConnect: "Conectar",
    heroTitleBefore: "Tecnología sensible para",
    heroTitleAccent: "arte, ciencia y territorio",
    heroLead:
      "Desarrollo software + hardware a medida, investigación aplicada y experiencias interactivas. Una práctica híbrida entre laboratorio, taller y escena.",
    ctaProjects: "Ver proyectos",
    ctaWork: "Trabajemos juntos",
    manifesto:
      "Diseño y desarrollo sistemas que traducen fenómenos invisibles en experiencias visibles: datos ambientales, comportamiento vegetal, movimiento, sonido y luz. Cada proyecto es una mezcla de prototipado técnico, criterio estético y contexto humano.",
    labelUniverses: "// universos",
    areasTitle: "Áreas de trabajo",
    cardDevTitle: "Desarrollo tecnológico",
    cardDevText:
      "Dispositivos custom, IoT, automatización, sensorización y sistemas embebidos para empresas, universidades y equipos independientes.",
    cardArtTitle: "Arte interactivo",
    cardArtText:
      "Instalaciones que combinan electrónica, software, materiales orgánicos y programación audiovisual para expandir la percepción.",
    cardSciTitle: "Investigación aplicada",
    cardSciText:
      "Instrumentación y adquisición de datos para proyectos científicos, especialmente en agua, ambiente y procesos experimentales.",
    cardEduTitle: "Educación y transferencia",
    cardEduText:
      "Talleres, documentación y herramientas abiertas para democratizar conocimientos técnicos y autonomía tecnológica.",
    labelWorks: "// obras",
    projectsTitle: "Proyectos",
    projectsIntro:
      "Arte, ciencia, IoT, educación y más — filtrá por tag. Click en un proyecto para ver detalle.",
    filterAria: "Filtrar proyectos por tag",
    showMore: "Mostrar más",
    showAll: "Mostrar todo",
    showLess: "Mostrar menos",
    labelContexts: "// universos",
    contextsTitle: "Universos",
    studioTitle: "Estudio",
    studioText:
      "Práctica independiente en instalaciones, dispositivos y software entre arte, naturaleza y electrónica. Raíces en Argentina con Autobuzz — co-fundado con Faktor para desarrollo tecnológico en obras de artistas argentinos e internacionales — y STRLAC Records, net label de música experimental con Faktor y Pol, aún activa. Del taller a la escena.",
    researchTitle: "Investigación",
    researchText:
      "Colaboración con universidades en instrumentación, IoT y sensores ambientales: Universitat de Girona (sistemas experimentales y tratamiento de agua), UOC (tecnologías inalámbricas y adquisición de datos) y PUCE Ibarra, Ecuador (sensores para monitoreo de aire y agua en la laguna Yaguarcocha).",
    eduTitle: "Educación",
    eduTextHtml:
      'Diseño y desarrollo de cursos y talleres para acercar hardware, electrónica y programación a más personas. Eje principal en <strong>Introducción a la programación y la electrónica</strong>, junto con propuestas adaptadas a cada contexto educativo. Experiencia como ayudante de cátedra en <strong>UNTREF</strong> y <strong>UBA</strong>.',
    musicTitle: "Música",
    musicBio:
      "Baterista y percusionista, apasionado del ritmo. Compositor y productor en diversos formatos, transitando texturas contemplativas y rítmicas, mezcladas con paisajes sonoros minimalistas y experimentales.",
    musicSectionTitle: "Música",
    musicIntro: "≪ bpm↑ ⇄ bpm↓ ≫ · bailables ↔ ambient · pulse ⊕ drift",
    musicLabel: "// musica",
    musicListAria: "Lista de temas",
    musicPrev: "Anterior",
    musicPlay: "Reproducir o pausar",
    musicNext: "Siguiente",
    musicSeek: "Posición de reproducción",
    musicVolume: "Volumen",
    musicIdle: "Sin reproducción",
    musicWaiting: "Esperando señal de SoundCloud…",
    labelConnect: "// conectar",
    connectTitle: "Conectar",
    labelContact: "// contacto",
    contactBtn: "Contacto",
    labelSocial: "// redes",
    footer:
      "NIX · Nicolás Saganías · Arte + Ciencia + Tecnología ·",
    closeModal: "Cerrar",
    closeForm: "Cerrar formulario",
    contactModalTitle: "Enviar correo",
    contactNameLabel: "Quien sos",
    contactNamePh: "Tu nombre o como te dicen",
    contactSubjectLabel: "Asunto",
    contactSubjectPh: "Proyecto, colaboración, consulta...",
    contactMessageLabel: "Mensaje",
    contactMessagePh: "Contame que queres hacer.",
    contactAttachments: "Adjuntos",
    contactSubmit: "Enviar",
    tagAll: "#todos",
    tagLabels: {
      arte: "arte",
      ciencia: "ciencia",
      investigación: "investigación",
      educación: "educación",
      iot: "iot",
      desarrollos: "desarrollos",
      sostenibilidad: "sostenibilidad",
      sonido: "sonido",
      luz: "luz",
      video: "video",
      "land-art": "land-art",
      domótica: "domótica",
    },
    countZero: (label) => `0 proyectos · ${label}`,
    countAll: (n, label) => `${n} proyecto${n !== 1 ? "s" : ""} · ${label}`,
    countPartial: (shown, total, label) =>
      `mostrando ${shown} de ${total} · ${label}`,
    countAllLabel: "todos",
    emptyGallery: "Ningún proyecto con ese tag.",
    viewDetail: (title) => `Ver detalle de ${title}`,
    specsTitle: "Especificaciones",
    viewInstagram: "Ver en Instagram →",
    sending: "Enviando...",
    sentOk: "Enviado. Gracias por escribir.",
    sendError: "Error al enviar. Intenta de nuevo en unos segundos.",
    subjectFallback: "Nuevo mensaje",
    noTracks: "Sin pistas cargadas.",
    noTitle: "Sin título",
    noScDesc: "Sin descripción en SoundCloud.",
    noScDescWithNote: (note) => `${note}. Sin descripción en SoundCloud.`,
    syncingMeta: "Sincronizando metadata de SoundCloud…",
    bandcampTrack: "Track disponible en Bandcamp.",
    bandcampStatus: (note) =>
      `${note} · disponible en <a href="__URL__" target="_blank" rel="noopener noreferrer">Bandcamp</a> (sin stream aquí).`,
    scConnectError: "No se pudo conectar con SoundCloud.",
    streamLinkError: "Error de enlace con el stream.",
    scPlayError: "No se pudo reproducir desde SoundCloud.",
    musicTrackDialogo: "Diálogo entre planta y máquina",
  },
  en: {
    metaTitle: "NIX | Art, Science & Technology",
    metaDescription:
      "Multidisciplinary portfolio of Nicolás Saganías: technological development, interactive art, research and education.",
    navUniverses: "Universes",
    navWorks: "Works",
    navContexts: "Contexts",
    navConnect: "Connect",
    heroTitleBefore: "Sensitive technology for",
    heroTitleAccent: "art, science and territory",
    heroLead:
      "Custom software + hardware development, applied research and interactive experiences. A hybrid practice between lab, workshop and stage.",
    ctaProjects: "View projects",
    ctaWork: "Let's work together",
    manifesto:
      "I design and build systems that translate invisible phenomena into visible experiences: environmental data, plant behavior, movement, sound and light. Each project blends technical prototyping, aesthetic judgment and human context.",
    labelUniverses: "// universes",
    areasTitle: "Areas of work",
    cardDevTitle: "Technological development",
    cardDevText:
      "Custom devices, IoT, automation, sensing and embedded systems for companies, universities and independent teams.",
    cardArtTitle: "Interactive art",
    cardArtText:
      "Installations that combine electronics, software, organic materials and audiovisual programming to expand perception.",
    cardSciTitle: "Applied research",
    cardSciText:
      "Instrumentation and data acquisition for scientific projects, especially around water, environment and experimental processes.",
    cardEduTitle: "Education & transfer",
    cardEduText:
      "Workshops, documentation and open tools to democratize technical knowledge and technological autonomy.",
    labelWorks: "// works",
    projectsTitle: "Projects",
    projectsIntro:
      "Art, science, IoT, education and more — filter by tag. Click a project for details.",
    filterAria: "Filter projects by tag",
    showMore: "Show more",
    showAll: "Show all",
    showLess: "Show less",
    labelContexts: "// universes",
    contextsTitle: "Universes",
    studioTitle: "Studio",
    studioText:
      "Independent practice in installations, devices and software between art, nature and electronics. Roots in Argentina with Autobuzz — co-founded with Faktor for technological development in works by Argentine and international artists — and STRLAC Records, an experimental music net label with Faktor and Pol, still active. From the workshop to the stage.",
    researchTitle: "Research",
    researchText:
      "Collaboration with universities on instrumentation, IoT and environmental sensors: University of Girona (experimental systems and water treatment), UOC (wireless technologies and data acquisition) and PUCE Ibarra, Ecuador (sensors for air and water monitoring at Yaguarcocha lagoon).",
    eduTitle: "Education",
    eduTextHtml:
      'I design and develop courses and workshops to bring hardware, electronics and programming to more people. Main focus on <strong>Introduction to programming and electronics</strong>, plus proposals adapted to each educational context. Experience as teaching assistant at <strong>UNTREF</strong> and <strong>UBA</strong>.',
    musicTitle: "Music",
    musicBio:
      "Drummer and percussionist, passionate about rhythm. Composer and producer across formats, moving through contemplative and rhythmic textures mixed with minimalist and experimental soundscapes.",
    musicSectionTitle: "Music",
    musicIntro: "≪ bpm↑ ⇄ bpm↓ ≫ · danceable ↔ ambient · pulse ⊕ drift",
    musicLabel: "// music",
    musicListAria: "Track list",
    musicPrev: "Previous",
    musicPlay: "Play or pause",
    musicNext: "Next",
    musicSeek: "Playback position",
    musicVolume: "Volume",
    musicIdle: "Not playing",
    musicWaiting: "Waiting for SoundCloud signal…",
    labelConnect: "// connect",
    connectTitle: "Connect",
    labelContact: "// contact",
    contactBtn: "Contact",
    labelSocial: "// social",
    footer: "NIX · Nicolás Saganías · Art + Science + Technology ·",
    closeModal: "Close",
    closeForm: "Close form",
    contactModalTitle: "Send email",
    contactNameLabel: "Who you are",
    contactNamePh: "Your name or how people call you",
    contactSubjectLabel: "Subject",
    contactSubjectPh: "Project, collaboration, inquiry...",
    contactMessageLabel: "Message",
    contactMessagePh: "Tell me what you want to do.",
    contactAttachments: "Attachments",
    contactSubmit: "Send",
    tagAll: "#all",
    tagLabels: {
      arte: "art",
      ciencia: "science",
      investigación: "research",
      educación: "education",
      iot: "iot",
      desarrollos: "development",
      sostenibilidad: "sustainability",
      sonido: "sound",
      luz: "light",
      video: "video",
      "land-art": "land-art",
      domótica: "home-automation",
    },
    countZero: (label) => `0 projects · ${label}`,
    countAll: (n, label) => `${n} project${n !== 1 ? "s" : ""} · ${label}`,
    countPartial: (shown, total, label) =>
      `showing ${shown} of ${total} · ${label}`,
    countAllLabel: "all",
    emptyGallery: "No projects with that tag.",
    viewDetail: (title) => `View details of ${title}`,
    specsTitle: "Specifications",
    viewInstagram: "View on Instagram →",
    sending: "Sending...",
    sentOk: "Sent. Thanks for writing.",
    sendError: "Could not send. Try again in a few seconds.",
    subjectFallback: "New message",
    noTracks: "No tracks loaded.",
    noTitle: "Untitled",
    noScDesc: "No description on SoundCloud.",
    noScDescWithNote: (note) => `${note}. No description on SoundCloud.`,
    syncingMeta: "Syncing SoundCloud metadata…",
    bandcampTrack: "Track available on Bandcamp.",
    bandcampStatus: (note) =>
      `${note} · available on <a href="__URL__" target="_blank" rel="noopener noreferrer">Bandcamp</a> (no stream here).`,
    scConnectError: "Could not connect to SoundCloud.",
    streamLinkError: "Stream link error.",
    scPlayError: "Could not play from SoundCloud.",
    musicTrackDialogo: "Dialogue between plant and machine",
  },
};

let currentLang = "es";

function getStoredLang() {
  try {
    const stored = localStorage.getItem("nix-lang");
    if (stored === "es" || stored === "en") return stored;
  } catch (_) {
    /* ignore */
  }
  return "es";
}

function t() {
  return I18N[currentLang] || I18N.es;
}

function tagLabel(tag) {
  return t().tagLabels[tag] || tag;
}

function projectField(project, field) {
  if (currentLang === "en") {
    const enKey = `${field}En`;
    if (project[enKey] != null) return project[enKey];
  }
  return project[field];
}
