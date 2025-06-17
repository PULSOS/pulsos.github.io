const btnCambiarIdioma = document.getElementById("btn-cambiar-idioma");
const titulo = document.getElementById("titulo");

document.documentElement.lang = "es";

btnCambiarIdioma.addEventListener("click", () => {
  const idiomaActual = document.documentElement.lang;

  if (idiomaActual === "es") {
    document.documentElement.lang = "en";
    titulo.src = "titulo-en.png";
    document.getElementById("section-es").style.display = "none";
    document.getElementById("section-en").style.display = "block";
    document.getElementById("menu-es").style.display = "none";
    document.getElementById("menu-en").style.display = "flex";
    btnCambiarIdioma.innerText = "ESPAÑOL";
  } else {
    document.documentElement.lang = "es";
    titulo.src = "titulo.png";
    document.getElementById("section-en").style.display = "none";
    document.getElementById("section-es").style.display = "block";
    document.getElementById("menu-en").style.display = "none";
    document.getElementById("menu-es").style.display = "flex";
    btnCambiarIdioma.innerText = "ENGLISH";
  }
});