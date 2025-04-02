// Obtén el botón de cambio de idioma y la imagen del título
const btnCambiarIdioma = document.getElementById("btn-cambiar-idioma");
const titulo = document.getElementById("titulo");

// Función para cambiar el idioma
function cambiarIdioma() {
    // Verifica el idioma actual
    const idiomaActual = document.documentElement.lang;

    // Si está en español, cambia a inglés, si está en inglés, cambia a español
    if (idiomaActual === "es") {
        // Cambiar al inglés
        document.documentElement.lang = "en";

        // Cambiar la imagen del título a la versión en inglés
        titulo.src = "titulo-en.png";

        // Ocultar el texto en español y mostrar el texto en inglés
        document.getElementById("section-es").style.display = "none";
        document.getElementById("section-en").style.display = "block";

        // Cambiar el texto del botón a Español
        btnCambiarIdioma.innerText = "ESPAÑOL"; 
    } else {
        // Cambiar al español
        document.documentElement.lang = "es";

        // Cambiar la imagen del título a la versión en español
        titulo.src = "titulo.png";

        // Ocultar el texto en inglés y mostrar el texto en español
        document.getElementById("section-en").style.display = "none";
        document.getElementById("section-es").style.display = "block";

        // Cambiar el texto del botón a Inglés
        btnCambiarIdioma.innerText = "ENGLISH"; 
    }
}

// Evento para cambiar el idioma cuando se haga clic en el botón
btnCambiarIdioma.addEventListener("click", cambiarIdioma);

// Inicializar en español
document.documentElement.lang = "es";
