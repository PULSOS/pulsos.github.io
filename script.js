// script.js

// Variables que apuntan a los elementos de la página
const btnCambiarIdioma = document.getElementById("btn-cambiar-idioma");
const subtitulo = document.getElementById("subtitulo");
const proximamente = document.getElementById("proximamente");
const fecha = document.getElementById("fecha");
const lugar = document.getElementById("lugar");

// Establecemos el idioma inicial como español
let idioma = 'es';

// Función para cambiar el idioma
function cambiarIdioma() {
    if (idioma === 'es') {
        // Cambiar a inglés
        subtitulo.textContent = subtitulo.getAttribute('data-en');
        proximamente.textContent = proximamente.getAttribute('data-en');
        fecha.textContent = fecha.getAttribute('data-en');
        lugar.textContent = lugar.getAttribute('data-en');
        btnCambiarIdioma.textContent = "ESPAÑOL";
        idioma = 'en';
    } else {
        // Volver a español
        subtitulo.textContent = subtitulo.getAttribute('data-es');
        proximamente.textContent = proximamente.getAttribute('data-es');
        fecha.textContent = fecha.getAttribute('data-es');
        lugar.textContent = lugar.getAttribute('data-es');
        btnCambiarIdioma.textContent = "INGLÉS";
        idioma = 'es';
    }
}

// Añadimos el evento de clic al botón
btnCambiarIdioma.addEventListener("click", cambiarIdioma);
