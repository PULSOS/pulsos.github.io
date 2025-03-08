// Mejorado para rendimiento en dispositivos móviles con menú lateral

document.addEventListener("DOMContentLoaded", () => {
  const languageBtn = document.getElementById("language-btn");
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");
  const currentLanguage = localStorage.getItem("language") || "es";
  
  // Aplicar idioma guardado
  setLanguage(currentLanguage);

  // Manejar cambio de idioma
  languageBtn.addEventListener("click", () => {
    const newLanguage = document.documentElement.lang === "es" ? "en" : "es";
    setLanguage(newLanguage);
  });

  // Manejar menú lateral
  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
});

function setLanguage(language) {
  document.documentElement.lang = language;
  localStorage.setItem("language", language);
  document.getElementById("language-btn").textContent = language === "es" ? "ENGLISH" : "ESPAÑOL";
  
  document.querySelectorAll("[data-es], [data-en]").forEach(element => {
    element.textContent = element.getAttribute(`data-${language}`);
  });
}
