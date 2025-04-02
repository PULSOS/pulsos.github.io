// Obtén el botón de cambio de idioma
const btnCambiarIdioma = document.getElementById("btn-cambiar-idioma");

// Función para cambiar el idioma
function cambiarIdioma() {
    // Verifica el idioma actual
    const idiomaActual = document.documentElement.lang;

    // Si está en español, cambia a inglés, si está en inglés, cambia a español
    if (idiomaActual === "es") {
        // Cambiar al inglés
        document.documentElement.lang = "en";

        // Ocultar el texto en español y mostrar el texto en inglés
        document.getElementById("subtitulo-es").style.display = "none";
        document.getElementById("subtitulo-en").style.display = "block";

        document.getElementById("proximamente-es").style.display = "none";
        document.getElementById("fecha-es").style.display = "none";
        document.getElementById("lugar-es").style.display = "none";

        document.getElementById("proximamente-en").style.display = "block";
        document.getElementById("fecha-en").style.display = "block";
        document.getElementById("lugar-en").style.display = "block";

        // Cambiar el texto del botón a Español
        btnCambiarIdioma.innerText = "ESPAÑOL"; 
    } else {
        // Cambiar al español
        document.documentElement.lang = "es";

        // Ocultar el texto en inglés y mostrar el texto en español
        document.getElementById("subtitulo-es").style.display = "block";
        document.getElementById("subtitulo-en").style.display = "none";

        document.getElementById("proximamente-es").style.display = "block";
        document.getElementById("fecha-es").style.display = "block";
        document.getElementById("lugar-es").style.display = "block";

        document.getElementById("proximamente-en").style.display = "none";
        document.getElementById("fecha-en").style.display = "none";
        document.getElementById("lugar-en").style.display = "none";

        // Cambiar el texto del botón a Inglés
        btnCambiarIdioma.innerText = "INGLÉS"; 
    }
}

// Evento para cambiar el idioma cuando se haga clic en el botón
btnCambiarIdioma.addEventListener("click", cambiarIdioma);

// Inicializar en español
document.documentElement.lang = "es";
