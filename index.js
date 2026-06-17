/* ============================================================
   📅 AÑO AUTOMÁTICO EN EL FOOTER
   Busca el elemento con id="year" y pone el año actual.
   Así no tienes que actualizarlo manualmente cada año.
   ============================================================ */
document.getElementById('year').textContent = new Date().getFullYear();


/* ============================================================
   📱 MENÚ DE NAVEGACIÓN (versión móvil)

   Cómo funciona:
   1. El botón #menuToggle tiene un ícono de Font Awesome
   2. Al hacer clic, se agrega/quita la clase "open" en el nav
   3. El CSS muestra u oculta el menú según esa clase
   4. El ícono cambia entre ☰ (abierto) y ✕ (cerrado)
   ============================================================ */
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
const menuIcon = document.getElementById('menuIcon');

menuToggle.addEventListener('click', () => {
    // Alternar la clase "open" en el menú
    nav.classList.toggle('open');

    // Cambiar el ícono según el estado del menú
    if (nav.classList.contains('open')) {
        // Menú abierto → mostrar ícono de X (cerrar)
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
    } else {
        // Menú cerrado → volver al ícono de líneas (☰)
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    }
});

/*
┌──────────────────────────────────────────────────────────────┐
│  CERRAR EL MENÚ AL HACER CLIC EN UN ENLACE                  │
│  Recorre todos los <a> dentro del nav y les agrega un       │
│  evento: cuando se hace clic en cualquiera, el menú        │
│  se cierra y el ícono vuelve a ser ☰                        │
└──────────────────────────────────────────────────────────────┘
*/
nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    });
});


/* ============================================================
   🔵 ENLACE ACTIVO EN EL MENÚ AL HACER SCROLL

   Cómo funciona:
   1. Escucha el evento "scroll" de la ventana
   2. Revisa cada sección y calcula si ya pasamos su posición
   3. Guarda el id de la última sección que ya superamos
   4. Agrega la clase "active" al enlace del menú correspondiente
   5. Quita "active" de todos los demás

   El -80 en sectionTop es el offset del header fijo:
   si el header mide 56px, dejamos un margen extra para que
   el cambio de enlace activo ocurra antes de llegar al borde.
   ============================================================ */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});


/* ============================================================
   💡 ESPACIO PARA CÓDIGO FUTURO
   A medida que aprendas JS, puedes agregar funcionalidades
   aquí abajo. Algunas ideas para cuando estés listo:

   → Formulario de contacto con validación
   → Animaciones al hacer scroll (Intersection Observer)
   → Modo claro/oscuro con toggle
   → Filtro de proyectos por tecnología
   ============================================================ */
