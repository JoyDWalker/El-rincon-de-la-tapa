// Cargar noticias desde un archivo JSON externo
document.addEventListener("DOMContentLoaded", function () {
  cargarNoticias();
});

function cargarNoticias() {
  const contenedor = document.getElementById("contenedor-noticias");

  if (!contenedor) {
    return;
  }

  fetch("data/noticias.json")
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
        article.classList.add("noticia");

        article.innerHTML = `
          <h3>${noticia.titulo}</h3>
          <p class="fecha">${noticia.fecha}</p>
          <p>${noticia.descripcion}</p>
        `;

        contenedor.appendChild(article);
      });
    })
    .catch(function (error) {
      contenedor.innerHTML = `<p>Error al cargar las noticias: ${error.message}</p>`;
    });
}
