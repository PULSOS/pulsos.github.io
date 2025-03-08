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
           // Verificar si ya existe el `nav` dentro del sidebar
    let sidebarNav = sidebar.querySelector("nav");
    if (!sidebarNav) {
        sidebarNav = document.createElement("nav");
        sidebar.appendChild(sidebarNav);
    }

    // Asegurar que el menú lateral tenga las opciones correctas
    sidebarNav.innerHTML = `
        <ul style="list-style: none; padding: 0; text-align: center; margin-top: 20px;">
            <li style="margin: 15px 0;"><a href="index.html" style="color: white; text-decoration: none; font-size: 20px; display: block;">INICIO</a></li>
            <li style="margin: 15px 0;"><a href="edicion2025.html" style="color: white; text-decoration: none; font-size: 20px; display: block;">EDICIÓN 2025</a></li>
            <li style="margin: 15px 0;"><a href="contacto.html" style="color: white; text-decoration: none; font-size: 20px; display: block;">CONTACTO</a></li>
        </ul>
    `;
});


