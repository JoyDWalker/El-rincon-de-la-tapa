document.addEventListener("DOMContentLoaded", cargarNoticias);

function cargarNoticias() {
  const contenedor = document.getElementById("contenedor-noticias");

  if (!contenedor) return;

  // Corrected path: noticias.json is in the root folder
  fetch("noticias.json")
    .then(function (respuesta) {
      if (!respuesta.ok) {
        throw new Error("No se pudo cargar el archivo de noticias.");
      }
      return respuesta.json();
    })
    .then(function (datos) {
      contenedor.innerHTML = "";

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
      contenedor.innerHTML = `<p>⚠️ Error al cargar las noticias: ${error.message}</p>`;
    });
}
