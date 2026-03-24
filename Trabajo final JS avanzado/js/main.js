// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  marcarPaginaActiva();
});

// Marca el enlace correspondiente a la página actual
function marcarPaginaActiva() {
  const enlaces = document.querySelectorAll(".navegacion a");
  const paginaActual = window.location.pathname.split("/").pop();

  enlaces.forEach(function (enlace) {
    const archivoEnlace = enlace.getAttribute("href");

    if (archivoEnlace === paginaActual || (paginaActual === "" && archivoEnlace === "index.html")) {
      enlace.classList.add("activa");
    }
  });
}
