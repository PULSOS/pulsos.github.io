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
        subtitulo.textContent = "INTERNATIONAL PERFORMING ARTS GATHERING";
        proximamente.textContent = "COMING SOON";
        fecha.textContent = "JUNE 2025";
        lugar.textContent = "LA PAZ - BOLIVIA";
        btnCambiarIdioma.textContent = "ESPAÑOL";
        idioma = 'en';
    } else {
        // Volver a español
        subtitulo.textContent = "ENCUENTRO INTERNACIONAL DE ARTES ESCÉNICAS";
        proximamente.textContent = "PRÓXIMAMENTE";
        fecha.textContent = "JUNIO 2025";
        lugar.textContent = "LA PAZ - BOLIVIA";
        btnCambiarIdioma.textContent = "INGLÉS";
        idioma = 'es';
    }
}

// Añadimos el evento de clic al botón
btnCambiarIdioma.addEventListener("click", cambiarIdioma);
