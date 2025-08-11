# NIX Portfolio - Desarrollador Tecnológico

Portfolio web minimalista para mostrar proyectos de desarrollo tecnológico con microcontroladores, sensores y actuadores.

## Características

- **Diseño minimalista**: Fondo blanco, texto negro, tipografía limpia
- **Navegación intuitiva**: Menú lateral con opciones Home, Contacto, About
- **Sistema de filtros**: Filtra proyectos por tags (ciencia, arte, educación)
- **Proyectos expandibles**: Cards que se expanden en modal con información detallada
- **Responsive**: Adaptado para dispositivos móviles
- **Formulario de contacto**: Sistema de contacto funcional

## Estructura de archivos

```
nix-portfolio/
├── index.html          # Estructura principal HTML
├── styles.css          # Estilos minimalistas
├── script.js           # Funcionalidad JavaScript
└── README.md          # Este archivo
```

## Cómo agregar nuevos proyectos

Para agregar un nuevo proyecto, edita el archivo `script.js` y agrega un nuevo objeto al array `projects`:

```javascript
{
    id: 7, // Número único incremental
    title: "Nombre del Proyecto",
    description: "Descripción corta para la card",
    image: "Descripción de la imagen representativa",
    tags: ["ciencia", "arte", "educacion"], // Uno o más tags
    details: "Descripción detallada que aparece en el modal expandido",
    specs: [
        "Especificación técnica 1",
        "Especificación técnica 2",
        // ... más especificaciones
    ],
    latest: true // Opcional: marca como proyecto reciente
}
```

## Tags disponibles

- **ciencia**: Proyectos relacionados con medición, bio-reactores, sensores científicos
- **arte**: Instalaciones artísticas, proyectos interactivos, luz y sonido
- **educacion**: Kits educativos, herramientas de aprendizaje, proyectos didácticos

## Funcionalidades

### Navegación
- **Home**: Muestra todos los proyectos con descripción personal
- **Contacto**: Formulario de contacto y información de email
- **About**: Información personal y fotos

### Filtros
- Selecciona uno o varios tags para filtrar proyectos
- Sin filtros seleccionados: muestra todos ordenados por recientes primero
- Con filtros: muestra solo proyectos que contengan al menos uno de los tags

### Proyectos expandibles
- Click en cualquier card para ver información detallada
- Modal con especificaciones técnicas completas
- Cierre con X, click fuera del modal, o tecla ESC

## Personalización

### Cambiar información personal
Edita los siguientes archivos:

1. **index.html**: 
   - Cambia el texto de introducción en la sección `.intro`
   - Actualiza el email en la página de contacto
   - Modifica el contenido de la página About

2. **styles.css**:
   - Ajusta colores, tipografías o espaciado según preferencias
   - El diseño está optimizado para mantener el estilo minimalista

### Agregar imágenes reales
Las imágenes actualmente son placeholders de texto. Para agregar imágenes reales:

1. Crea una carpeta `images/` en el directorio del proyecto
2. Agrega tus imágenes en formato JPG o PNG
3. En `script.js`, cambia las líneas `image: "Descripción..."` por:
   ```javascript
   image: '<img src="images/nombre-imagen.jpg" alt="Descripción" style="width:100%; height:100%; object-fit:cover;">'
   ```

## Deployment

Para subir la web a internet:

1. **GitHub Pages**: Sube los archivos a un repositorio de GitHub y activa GitHub Pages
2. **Netlify**: Arrastra la carpeta completa a netlify.com
3. **Vercel**: Conecta el repositorio a vercel.com
4. **Servidor web**: Sube los archivos via FTP a tu hosting

## Soporte para nuevas funcionalidades

El código está estructurado para fácil expansión:

- **Nuevos tags**: Agrega botones en HTML y actualiza el JavaScript
- **Nuevas páginas**: Crea divs con clase `page` y actualiza la navegación
- **Nuevos campos**: Extiende la estructura de datos en `projects`
- **Animaciones**: Los estilos CSS ya incluyen transiciones suaves

## Tecnologías utilizadas

- HTML5 semántico
- CSS3 con Flexbox y Grid
- JavaScript vanilla (sin frameworks)
- Diseño responsive con media queries

---

**Nota**: Este portfolio está diseñado para ser simple de mantener y actualizar. Todos los datos están en el archivo JavaScript para fácil edición sin necesidad de base de datos.