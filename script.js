// Mejorado para rendimiento en dispositivos móviles con menú lateral solo en móviles

document.addEventListener("DOMContentLoaded", () => {
  const languageBtn = document.getElementById("language-btn");
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");
  const closeMenuBtn = document.getElementById("close-menu");
  const currentLanguage = localStorage.getItem("language") || "es";
  
  // Aplicar idioma guardado
  setLanguage(currentLanguage);

  // Manejar cambio de idioma
  languageBtn.addEventListener("click", () => {
    const newLanguage = document.documentElement.lang === "es" ? "en" : "es";
    setLanguage(newLanguage);
  });

  // Solo activar el menú lateral en móviles
  if (window.innerWidth <= 767) {
    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });

    closeMenuBtn.addEventListener("click", () => {
      sidebar.classList.remove("open");
    });
  }
});

function setLanguage(language) {
  document.documentElement.lang = language;
  localStorage.setItem("language", language);
  document.getElementById("language-btn").textContent = language === "es" ? "ENGLISH" : "ESPAÑOL";
  
  document.querySelectorAll("[data-es], [data-en]").forEach(element => {
    element.textContent = element.getAttribute(`data-${language}`);
  });
}



document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");
  const closeMenu = document.getElementById("close-menu");

  if (menuToggle && sidebar && closeMenu) {
    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });

    closeMenu.addEventListener("click", () => {
      sidebar.classList.remove("open");
    });

    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener("click", (event) => {
      if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
        sidebar.classList.remove("open");
      }
    });
  }
});
