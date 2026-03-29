// Ejecuta la función cuando el DOM está listo
document.addEventListener("DOMContentLoaded", function () {
  marcarPaginaActiva();
});

// Obtiene el nombre del archivo desde una ruta
function obtenerNombreArchivo(ruta) {
  return ruta.split("/").pop();
}

// Resalta el enlace de la página actual en la navegación
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