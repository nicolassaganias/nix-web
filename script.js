// Proyectos reales de NIX
const projects = [
    {
        id: 1,
        title: "Cerbero",
        description: "Instalación interactiva que explora la vigilancia y el control a través de sensores de movimiento y respuestas sonoras.",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center",
        tags: ["arte"],
        details: "Cerbero es una instalación que reflexiona sobre los sistemas de vigilancia contemporáneos. Utiliza sensores de movimiento para detectar la presencia del público, activando respuestas sonoras que crean una atmósfera inquietante. La obra cuestiona nuestra relación con la tecnología de control y la privacidad.",
        specs: [
            "Sensores: PIR HC-SR501 para detección de movimiento",
            "Audio: Sistema multicanal con altavoces direccionales",
            "Microcontrolador: Arduino Mega para procesamiento",
            "Software: Processing para análisis de patrones",
            "Instalación: Espacio de galería con recorrido definido"
        ],
        latest: true
    },
    {
        id: 2,
        title: "Biota",
        description: "Ecosistema artificial que simula procesos biológicos mediante sensores ambientales y actuadores.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center",
        tags: ["arte", "ciencia"],
        details: "Biota es un ecosistema artificial que simula y visualiza procesos biológicos complejos. A través de sensores de temperatura, humedad y luz, el sistema genera respuestas visuales y sonoras que imitan comportamientos orgánicos, creando un diálogo entre lo natural y lo tecnológico.",
        specs: [
            "Sensores: DHT22 (temp/hum), LDR (luz), pH meter",
            "Visualización: LEDs RGB programables WS2812B",
            "Procesamiento: Raspberry Pi con Python",
            "Actuadores: Ventiladores, bombas de agua, servo motores",
            "Interface: Pantalla táctil para interacción"
        ]
    },
    {
        id: 3,
        title: "a-sync",
        description: "Instalación sonora que explora la desincronización temporal a través de múltiples canales de audio.",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&crop=center",
        tags: ["arte"],
        details: "a-sync es una composición espacial que utiliza múltiples canales de audio para crear patrones rítmicos desincronizados. Los visitantes experimentan diferentes capas temporales según su posición en el espacio, generando una experiencia única de percepción temporal.",
        specs: [
            "Audio: 8 canales independientes con altavoces",
            "Control: MIDI controllers para manipulación en vivo",
            "Software: Max/MSP para síntesis y control",
            "Sensores: Cámaras de profundidad para tracking",
            "Espacialización: Sistema de audio 360°"
        ]
    },
    {
        id: 4,
        title: "silencios inquietos",
        description: "Exploración de los espacios sonoros intermedios, donde el silencio se vuelve material compositivo.",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c38a?w=400&h=300&fit=crop&crop=center",
        tags: ["arte"],
        details: "Esta obra investiga los silencios como material compositivo activo. Mediante micrófonos ultrasensibles y procesamiento digital, amplifica y manipula los sonidos casi imperceptibles del ambiente, revelando la riqueza oculta en lo que consideramos silencio.",
        specs: [
            "Micrófonos: Condensadores de alta sensibilidad",
            "Procesamiento: Real-time con Pure Data",
            "Amplificación: Sistema de audio de precisión",
            "Control: Sensores de proximidad para modulación",
            "Espacialización: Configuración estéreo expandida"
        ]
    },
    {
        id: 5,
        title: "habittat",
        description: "Ambiente interactivo que responde a la presencia humana, creando un hábitat tecnológico adaptativo.",
        image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop&crop=center",
        tags: ["arte", "ciencia"],
        details: "habittat es un ambiente que se adapta y evoluciona según la presencia y comportamiento de los visitantes. Utilizando sensores múltiples, el sistema aprende patrones de ocupación y genera respuestas ambientales que transforman el espacio en un organismo vivo.",
        specs: [
            "Sensores: Múltiples PIR, cámaras, micrófonos",
            "Iluminación: Sistema LED RGB controlado",
            "IA: Algoritmos de machine learning para adaptación",
            "Actuadores: Ventiladores, difusores de aroma",
            "Red: Sistema IoT para monitoreo remoto"
        ]
    },
    {
        id: 6,
        title: "mutaciones",
        description: "Serie de objetos electrónicos que evolucionan y mutan sus comportamientos a través del tiempo.",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center",
        tags: ["arte"],
        details: "mutaciones consiste en una serie de objetos autónomos que modifican sus comportamientos a través del tiempo. Cada objeto contiene algoritmos evolutivos que les permiten adaptarse y mutar, creando una ecología artificial de comportamientos emergentes.",
        specs: [
            "Microcontroladores: ESP32 con conectividad WiFi",
            "Sensores: Acelerómetros, magnetómetros, luz",
            "Actuadores: Motores, LEDs, buzzers",
            "Algoritmos: Genéticos y de vida artificial",
            "Comunicación: Mesh network entre objetos"
        ],
        latest: true
    },
    {
        id: 7,
        title: "Monitor de Bio-reactor",
        description: "Sistema de monitoreo en tiempo real para procesos de fermentación con sensores especializados.",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop&crop=center",
        tags: ["ciencia"],
        details: "Sistema completo de monitoreo para bio-reactores utilizados en procesos de fermentación. Integra múltiples sensores para medir pH, temperatura, oxígeno disuelto y presión, con logging de datos y alertas automáticas para mantener condiciones óptimas.",
        specs: [
            "Microcontrolador: Arduino Mega 2560",
            "Sensores: pH (SEN0161), Temperatura (DS18B20), O2 (SEN0322)",
            "Display: LCD 20x4 con interfaz I2C",
            "Comunicación: WiFi ESP32 para monitoreo remoto",
            "Alimentación: 12V con reguladores estabilizados"
        ]
    },
    {
        id: 8,
        title: "campanadas",
        description: "Instalación sonora que reinterpreta el tiempo urbano a través de campanadas electrónicas programables.",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&crop=center",
        tags: ["arte"],
        details: "campanadas es una reflexión sobre el tiempo urbano y las señales temporales que organizan la vida cotidiana. La instalación genera campanadas electrónicas siguiendo patrones algorítmicos que dialogan con los ritmos de la ciudad.",
        specs: [
            "Audio: Síntesis digital de campanadas",
            "Control temporal: RTC (Real Time Clock) de precisión",
            "Amplificación: Sistema de audio para exterior",
            "Programación: Algoritmos de secuenciación temporal",
            "Sincronización: GPS para referencia temporal exacta"
        ]
    },
    {
        id: 9,
        title: "Kit Educativo Arduino",
        description: "Plataforma educativa para enseñar programación y electrónica con proyectos progresivos.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop&crop=center",
        tags: ["educacion"],
        details: "Kit educativo diseñado para introducir estudiantes en el mundo de la programación de microcontroladores y electrónica básica. Incluye proyectos progresivos desde LEDs simples hasta sistemas de control más complejos.",
        specs: [
            "Microcontrolador: Arduino Uno R3",
            "Componentes: LEDs, resistores, sensores, actuadores",
            "Proyectos: 15 ejercicios progresivos",
            "Manual: Guía paso a paso con teoría",
            "Software: IDE Arduino con librerías personalizadas"
        ]
    }
];

// Variables globales
let currentPage = 'home';
let activeFilters = [];
let filteredProjects = [...projects];

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeTagFilters();
    initializeModal();
    initializeContactForm();
    
    // Renderizado inicial con animación
    setTimeout(() => {
        renderProjectsAnimated();
    }, 100);
});

// Navegación entre páginas
function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('data-page');
            navigateToPage(targetPage);
            
            // Actualizar estado activo
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function navigateToPage(page) {
    // Ocultar todas las páginas
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.add('hidden'));
    
    // Mostrar la página seleccionada
    const targetPage = document.getElementById(`${page}-page`);
    if (targetPage) {
        targetPage.classList.remove('hidden');
        currentPage = page;
    }
}

// Sistema de filtros por tags
function initializeTagFilters() {
    const tagButtons = document.querySelectorAll('.tag-filter');
    
    tagButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tag = this.getAttribute('data-tag');
            toggleTagFilter(tag, this);
        });
    });
}

function toggleTagFilter(tag, buttonElement) {
    const index = activeFilters.indexOf(tag);
    
    if (index > -1) {
        // Remover filtro
        activeFilters.splice(index, 1);
        buttonElement.classList.remove('active');
    } else {
        // Agregar filtro
        activeFilters.push(tag);
        buttonElement.classList.add('active');
    }
    
    filterProjects();
}

function filterProjects() {
    // Primero, animar la salida de los elementos actuales
    const currentCards = document.querySelectorAll('.project-card');
    
    // Agregar clase de fade-out a todos los elementos actuales
    currentCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('fade-out');
        }, index * 50); // Retraso escalonado
    });
    
    // Después de que termine la animación de salida, filtrar y mostrar nuevos elementos
    setTimeout(() => {
        if (activeFilters.length === 0) {
            // Sin filtros, mostrar todos los proyectos ordenados por latest
            filteredProjects = [...projects].sort((a, b) => {
                if (a.latest && !b.latest) return -1;
                if (!a.latest && b.latest) return 1;
                return 0;
            });
        } else {
            // Filtrar proyectos que contengan al menos uno de los tags activos
            filteredProjects = projects.filter(project => 
                project.tags.some(tag => activeFilters.includes(tag))
            );
        }
        
        renderProjectsAnimated();
    }, currentCards.length * 50 + 200); // Esperar a que termine la animación de salida
}

// Renderizado de proyectos (versión inicial sin animaciones)
function renderProjects() {
    const container = document.getElementById('projects-container');
    
    if (filteredProjects.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #666;">No hay proyectos que coincidan con los filtros seleccionados.</p>';
        return;
    }
    
    container.innerHTML = filteredProjects.map(project => `
        <div class="project-card" data-project-id="${project.id}">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');
    
    addProjectCardListeners();
}

// Renderizado animado de proyectos
function renderProjectsAnimated() {
    const container = document.getElementById('projects-container');
    
    if (filteredProjects.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #666; opacity: 0;" class="no-projects">No hay proyectos que coincidan con los filtros seleccionados.</p>';
        // Animar la entrada del mensaje
        setTimeout(() => {
            const message = container.querySelector('.no-projects');
            if (message) {
                message.style.transition = 'opacity 0.5s ease';
                message.style.opacity = '1';
            }
        }, 100);
        return;
    }
    
    // Crear elementos con opacidad 0 para animación de entrada
    container.innerHTML = filteredProjects.map(project => `
        <div class="project-card" data-project-id="${project.id}" style="opacity: 0; transform: scale(0.8) translateY(30px);">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');
    
    // Animar la entrada de cada card con retraso escalonado
    const newCards = container.querySelectorAll('.project-card');
    newCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.opacity = '1';
            card.style.transform = 'scale(1) translateY(0) rotate(0deg)';
            
            // Agregar una pequeña rotación aleatoria durante la animación para más organicidad
            const randomRotation = (Math.random() - 0.5) * 2; // Entre -1 y 1 grado
            card.style.transform = `scale(1) translateY(0) rotate(${randomRotation}deg)`;
            
            setTimeout(() => {
                card.style.transform = 'scale(1) translateY(0) rotate(0deg)';
            }, 300);
            
        }, index * 100 + 50); // Retraso escalonado para entrada orgánica
    });
    
    addProjectCardListeners();
}

// Función auxiliar para agregar event listeners a las cards
function addProjectCardListeners() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = parseInt(this.getAttribute('data-project-id'));
            openProjectModal(projectId);
        });
    });
}

// Sistema de modal para proyectos expandidos
function initializeModal() {
    const modal = document.getElementById('project-modal');
    const closeButton = document.querySelector('.close-modal');
    
    closeButton.addEventListener('click', closeModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Cerrar modal con ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
}

function openProjectModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <div class="modal-project-content">
            <h2>${project.title}</h2>
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-details">
                ${project.details}
            </div>
            <div class="project-specs">
                <h3>Especificaciones Técnicas:</h3>
                <ul>
                    ${project.specs.map(spec => `<li>• ${spec}</li>`).join('')}
                </ul>
            </div>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
    
    const modal = document.getElementById('project-modal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevenir scroll del body
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto'; // Restaurar scroll del body
}

// Formulario de contacto
function initializeContactForm() {
    const form = document.querySelector('.contact-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };
        
        // Simular envío del formulario
        console.log('Datos del formulario:', data);
        
        // Mostrar mensaje de confirmación
        alert('¡Gracias por tu mensaje! Te contactaré pronto.');
        
        // Limpiar formulario
        form.reset();
    });
}

// Funciones utilitarias
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Responsive: manejo del menú en móvil
function initializeMobileMenu() {
    // Esta función se puede expandir para agregar un botón de menú hamburguesa en móvil
    const sidebar = document.querySelector('.sidebar');
    
    // Detectar clicks fuera del sidebar en móvil para cerrarlo
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target)) {
                sidebar.classList.remove('open');
            }
        }
    });
}

// Inicializar funciones adicionales
document.addEventListener('DOMContentLoaded', function() {
    initializeMobileMenu();
});

// Exportar funciones para uso global si es necesario
window.NIXPortfolio = {
    navigateToPage,
    toggleTagFilter,
    openProjectModal,
    closeModal
};