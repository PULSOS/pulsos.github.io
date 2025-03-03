// Cambiar idioma
function toggleLanguage() {
  let currentLanguage = document.documentElement.lang;

  if (currentLanguage === "es") {
    // Cambiar a inglés
    document.documentElement.lang = "en";
    document.getElementById("language-btn").textContent = "ESPAÑOL";
    switchContentLanguage("en");
  } else {
    // Cambiar a español
    document.documentElement.lang = "es";
    document.getElementById("language-btn").textContent = "ENGLISH";
    switchContentLanguage("es");
  }
}

// Cambiar contenido dependiendo del idioma
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

// Detectar el idioma predeterminado al cargar la página y ajustar el botón
document.addEventListener("DOMContentLoaded", function() {
  let currentLanguage = document.documentElement.lang || "es"; // Predeterminado a español
  if (currentLanguage === "en") {
    document.getElementById("language-btn").textContent = "ESPAÑOL";
    switchContentLanguage("en");
  } else {
    switchContentLanguage("es");
  }
});
