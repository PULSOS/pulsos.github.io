// Obtén el botón de cambio de idioma
const btnCambiarIdioma = document.getElementById("btn-cambiar-idioma");

// Define las traducciones de los textos
const textos = {
    es: {
        subtitulo: "ENCUENTRO INTERNACIONAL DE ARTES ESCÉNICAS",
        proximamente: "PRÓXIMAMENTE",
        fecha: "JUNIO 2025",
        lugar: "LA PAZ - BOLIVIA",
    },
    en: {
        subtitulo: "INTERNATIONAL PERFORMING ARTS GATHERING",
        proximamente: "COMING SOON",
        fecha: "JUNE 2025",
        lugar: "LA PAZ - BOLIVIA",
    }
};

// Función para cambiar el idioma
function cambiarIdioma() {
    // Verifica el idioma actual
    const idiomaActual = document.documentElement.lang;

    // Si está en español, cambia a inglés, si está en inglés, cambia a español
    if (idiomaActual === "es") {
        // Cambiar al inglés
        document.documentElement.lang = "en";
        document.getElementById("subtitulo").innerText = textos.en.subtitulo;
        document.getElementById("proximamente").innerText = textos.en.proximamente;
        document.getElementById("fecha").innerText = textos.en.fecha;
        document.getElementById("lugar").innerText = textos.en.lugar;
        btnCambiarIdioma.innerText = "ESPAÑOL"; // Cambiar el texto del botón a Español
    } else {
        // Cambiar al español
        document.documentElement.lang = "es";
        document.getElementById("subtitulo").innerText = textos.es.subtitulo;
        document.getElementById("proximamente").innerText = textos.es.proximamente;
        document.getElementById("fecha").innerText = textos.es.fecha;
        document.getElementById("lugar").innerText = textos.es.lugar;
        btnCambiarIdioma.innerText = "INGLÉS"; // Cambiar el texto del botón a Inglés
    }
}

// Evento para cambiar el idioma cuando se haga clic en el botón
btnCambiarIdioma.addEventListener("click", cambiarIdioma);

// Inicializar en español
document.documentElement.lang = "es";
