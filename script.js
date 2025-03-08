// Mejorado para rendimiento en dispositivos móviles

document.addEventListener("DOMContentLoaded", () => {
  const languageBtn = document.getElementById("language-btn");
  const currentLanguage = localStorage.getItem("language") || "es";
  
  // Aplicar idioma guardado
  setLanguage(currentLanguage);

  // Manejar cambio de idioma
  languageBtn.addEventListener("click", () => {
    const newLanguage = document.documentElement.lang === "es" ? "en" : "es";
    setLanguage(newLanguage);
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
