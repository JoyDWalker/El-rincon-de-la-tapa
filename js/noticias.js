// Ejecuta la carga de noticias cuando el DOM está listo
document.addEventListener("DOMContentLoaded", cargarNoticias);

// Carga las noticias desde un archivo JSON externo
function cargarNoticias() {
  const contenedor = document.getElementById("contenedor-noticias");

  // Verifica que exista el contenedor en la página
  if (!contenedor) return;

  // Solicita el archivo JSON mediante fetch
  fetch("data/noticias.json")
    .then(function (respuesta) {
      // Comprueba si la respuesta es válida
      if (!respuesta.ok) {
        throw new Error("No se pudo cargar el archivo de noticias.");
      }

      // Convierte la respuesta a formato JSON
      return respuesta.json();
    })
    .then(function (datos) {
      // Limpia el contenedor antes de insertar las noticias
      contenedor.innerHTML = "";

      // Recorre e inserta cada noticia en el documento
      datos.forEach(function (noticia) {
        const article = document.createElement("article");
        const titulo = document.createElement("h3");
        const fecha = document.createElement("p");
        const descripcion = document.createElement("p");

        article.classList.add("noticia");
        fecha.classList.add("fecha");

        titulo.textContent = noticia.titulo;
        fecha.textContent = noticia.fecha;
        descripcion.textContent = noticia.descripcion;

        article.appendChild(titulo);
        article.appendChild(fecha);
        article.appendChild(descripcion);
        contenedor.appendChild(article);
      });
    })
    .catch(function (error) {
      // Muestra un mensaje si ocurre un error en la carga
      contenedor.innerHTML = `<p>Error al cargar las noticias: ${error.message}</p>`;
    });
}