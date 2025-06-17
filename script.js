// Referencias a elementos clave
const btnCambiarIdioma = document.getElementById("btn-cambiar-idioma");
const titulo = document.getElementById("titulo");
const btnMenuHamburguesa = document.getElementById("btn-menu-hamburguesa");
const menuEs = document.getElementById("menu-es");
const menuEn = document.getElementById("menu-en");

// Estado inicial del idioma
document.documentElement.lang = "es";

// Función para cerrar ambos menús y resetear botón hamburguesa
function cerrarMenus() {
  menuEs.classList.remove("menu-abierto");
  menuEn.classList.remove("menu-abierto");
  if (btnMenuHamburguesa) {
    btnMenuHamburguesa.setAttribute("aria-expanded", "false");
  }
}

// Cambiar idioma y actualizar contenido
btnCambiarIdioma.addEventListener("click", () => {
  const idiomaActual = document.documentElement.lang;

  if (idiomaActual === "es") {
    document.documentElement.lang = "en";
    titulo.src = "titulo-en.png";
    document.getElementById("section-es").style.display = "none";
    document.getElementById("section-en").style.display = "block";
    menuEs.style.display = "none";
    menuEn.style.display = "flex";
    btnCambiarIdioma.innerText = "ESPAÑOL";
  } else {
    document.documentElement.lang = "es";
    titulo.src = "titulo.png";
    document.getElementById("section-en").style.display = "none";
    document.getElementById("section-es").style.display = "block";
    menuEn.style.display = "none";
    menuEs.style.display = "flex";
    btnCambiarIdioma.innerText = "ENGLISH";
  }

  cerrarMenus();
});

// Toggle menú hamburguesa solo si el botón existe (solo móvil)
if (btnMenuHamburguesa) {
  btnMenuHamburguesa.addEventListener("click", () => {
    const idiomaActual = document.documentElement.lang;
    const menuVisible = idiomaActual === "es" ? menuEs : menuEn;

    const abierto = menuVisible.classList.contains("menu-abierto");

    if (abierto) {
      cerrarMenus();
    } else {
      // Cerrar el menú opuesto
      if (idiomaActual === "es") {
        menuEn.classList.remove("menu-abierto");
      } else {
        menuEs.classList.remove("menu-abierto");
      }
      menuVisible.classList.add("menu-abierto");
      btnMenuHamburguesa.setAttribute("aria-expanded", "true");
    }
  });
}
