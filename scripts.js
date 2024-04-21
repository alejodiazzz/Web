document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-links a'); // Obtener todos los enlaces de navegación

    // Iterar sobre cada enlace del menú
    navLinks.forEach(function(navLink) {
        // Agregar un event listener para el evento de clic
        navLink.addEventListener("click", function(event) {
            event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

            const targetId = navLink.getAttribute('href').substring(1); // Obtener el ID de la sección objetivo
            const targetSection = document.getElementById(targetId); // Obtener la sección correspondiente

            // Ocultar todas las secciones excepto la seleccionada
            const sections = document.querySelectorAll('section');
            sections.forEach(function(section) {
                if (section.id === targetId) {
                    section.style.display = "block"; // Mostrar la sección seleccionada
                } else {
                    section.style.display = "none"; // Ocultar las demás secciones
                }
            });

            // Opcional: cerrar el menú desplegable en dispositivos móviles
            const navLinksContainer = document.querySelector('.nav-links');
            navLinksContainer.classList.remove('active');
        });
    });

    // Mostrar solo la sección de "Inicio" al cargar la página
    const inicioSection = document.getElementById('bienvenida');
    inicioSection.style.display = "block";
});



function toggleMenu() {
    const menuList = document.querySelector('.menu-list');
    menuList.classList.toggle('open');
}

//Carrusel

document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide'); // Obtener todas las diapositivas
    showSlides(); // Llama a la función showSlides() para iniciar el carrusel

    function showSlides() {
        // Ocultar todas las diapositivas
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }

        // Incrementar el índice de la diapositiva actual
        slideIndex++;

        // Si el índice es mayor que el número de diapositivas, vuelve a la primera diapositiva
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        // Mostrar la diapositiva actual
        slides[slideIndex - 1].style.display = 'block';

        // Establecer el tiempo de espera para cambiar a la siguiente diapositiva (8 segundos en este ejemplo)
        setTimeout(showSlides, 8000);
    }

    // Función para cambiar las diapositivas hacia adelante o hacia atrás
    function plusSlides(n) {
        slideIndex += n;

        // Verificar límites del índice
        if (slideIndex > slides.length) {
            slideIndex = 1; // Vuelve a la primera diapositiva después de la última
        } else if (slideIndex < 1) {
            slideIndex = slides.length; // Vuelve a la última diapositiva después de la primera
        }

        // Ocultar todas las diapositivas
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }

        // Mostrar la diapositiva actual
        slides[slideIndex - 1].style.display = 'block';
    }

});

function toggleMenu() {
    const menuList = document.querySelector('.menu-list');
    menuList.classList.toggle('open');
}

document.addEventListener("DOMContentLoaded", function() {
    const dropdownLink = document.querySelector('.dropdown-toggle');
    if (dropdownLink) {
        dropdownLink.addEventListener('mouseenter', function() {
            const dropdownMenu = dropdownLink.nextElementSibling;
            if (dropdownMenu) {
                dropdownMenu.classList.add('show');
            }
        });

        // Evento 'mouseleave' para el menú desplegable
        const dropdownMenu = dropdownLink.nextElementSibling;
        if (dropdownMenu) {
            dropdownMenu.addEventListener('mouseleave', function() {
                dropdownMenu.classList.remove('show');
            });
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.navbar-nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

let map;

async function initMap() {
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
}

initMap();