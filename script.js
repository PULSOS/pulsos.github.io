// Función para cambiar el idioma de la página
function toggleLanguage() {
  let currentLanguage = document.documentElement.lang;

  if (currentLanguage === "es") {
    // Cambiar a inglés
    document.documentElement.lang = "en";
    document.getElementById("language-btn").textContent = "ESPAÑOL"; // Cambiar el botón a español
    switchContentLanguage("en");
  } else {
    // Cambiar a español
    document.documentElement.lang = "es";
    document.getElementById("language-btn").textContent = "ENGLISH"; // Cambiar el botón a inglés
    switchContentLanguage("es");
  }
}

// Función para cambiar el contenido según el idioma seleccionado
function switchContentLanguage(language) {
  const elements = document.querySelectorAll('[data-es], [data-en]');
  elements.forEach(function(element) {
    if (language === 'es') {
      element.textContent = element.getAttribute('data-es');
    } else {
      element.textContent = element.getAttribute('data-en');
    }
  });
}

// Detectar el idioma al cargar la página y ajustar el botón
document.addEventListener("DOMContentLoaded", function() {
  let currentLanguage = document.documentElement.lang || "es"; // Si no está definido, default a español
  if (currentLanguage === "en") {
    document.getElementById("language-btn").textContent = "ESPAÑOL";
    switchContentLanguage("en");
  }
});
