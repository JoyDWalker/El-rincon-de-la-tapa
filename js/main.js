// Run the function when the DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  marcarPaginaActiva();
});

// Get the file name from a path
function obtenerNombreArchivo(ruta) {
  return ruta.split("/").pop();
}

// Highlight the current page link in the navigation
function marcarPaginaActiva() {
  const enlaces = document.querySelectorAll(".navegacion a");
  const paginaActual = obtenerNombreArchivo(window.location.pathname) || "index.html";

  enlaces.forEach(function (enlace) {
    enlace.classList.remove("activa");
    enlace.removeAttribute("aria-current");

    const archivoEnlace = obtenerNombreArchivo(enlace.getAttribute("href"));

    if (archivoEnlace === paginaActual) {
      enlace.classList.add("activa");
      enlace.setAttribute("aria-current", "page");
    }
  });
}
