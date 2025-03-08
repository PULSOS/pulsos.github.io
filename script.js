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



document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");
  const closeBtn = document.getElementById("close-menu");

  if (menuBtn && sidebar && closeBtn) {
      // Abrir menú lateral
      menuBtn.addEventListener("click", function () {
          sidebar.classList.add("open");
      });

      // Cerrar menú lateral
      closeBtn.addEventListener("click", function () {
          sidebar.classList.remove("open");
      });

      // Cerrar el menú si se hace clic fuera de él
      document.addEventListener("click", function (event) {
          if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
              sidebar.classList.remove("open");
          }
      });
  }
    // Asegurar que el menú lateral tenga las opciones correctas
    const sidebarNav = sidebar.querySelector("nav");
    if (sidebarNav) {
        sidebarNav.innerHTML = `
            <ul>
                <li><a href="index.html" data-es="INICIO" data-en="HOME">INICIO</a></li>
                <li><a href="edicion2025.html" data-es="EDICIÓN 2025" data-en="EDITION 2025">EDICIÓN 2025</a></li>
                <li><a href="contacto.html" data-es="CONTACTO" data-en="CONTACT">CONTACTO</a></li>
            </ul>
        `;
    }
});
