// Datos de la galería del bar de tapas
const elementosGaleria = [
  {
    titulo: "Patatas bravas",
    categoria: "tapas",
    descripcion: "Uno de los clásicos del tapeo, crujientes y con salsa de la casa.",
    imagen: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80"
  },
  {
    titulo: "Croquetas caseras",
    categoria: "tapas",
    descripcion: "Croquetas cremosas y doradas, ideales para compartir.",
    imagen: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?auto=format&fit=crop&w=900&q=80"
  },
  {
    titulo: "Tabla de jamón",
    categoria: "tapas",
    descripcion: "Selección ibérica servida con pan y tomate.",
    imagen: "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=900&q=80"
  },
  {
    titulo: "Vino de la casa",
    categoria: "bebidas",
    descripcion: "Una selección cuidada para acompañar cada tapa.",
    imagen: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80"
  },
  {
    titulo: "Cañas bien frías",
    categoria: "bebidas",
    descripcion: "Perfectas para acompañar el ambiente del local.",
    imagen: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=900&q=80"
  },
  {
    titulo: "Salón principal",
    categoria: "local",
    descripcion: "Un espacio acogedor para comidas, cenas y celebraciones.",
    imagen: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80"
  },
  {
    titulo: "Barra de tapas",
    categoria: "local",
    descripcion: "La zona más viva del bar, ideal para disfrutar del tapeo tradicional.",
    imagen: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=900&q=80"
  },
  {
    titulo: "Terraza exterior",
    categoria: "local",
    descripcion: "Un rincón agradable para disfrutar al aire libre.",
    imagen: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80"
  }
];

// Espera a que cargue el DOM
document.addEventListener("DOMContentLoaded", function () {
  mostrarGaleria("todos");
  activarFiltros();
  prepararModal();
});

// Muestra los elementos según el filtro seleccionado
function mostrarGaleria(filtro) {
  const contenedor = document.getElementById("galeria");
  contenedor.innerHTML = "";

  const elementosFiltrados = filtro === "todos"
    ? elementosGaleria
    : elementosGaleria.filter(function (elemento) {
        return elemento.categoria === filtro;
      });

  elementosFiltrados.forEach(function (elemento) {
    const article = document.createElement("article");
    article.classList.add("item-galeria");

    article.innerHTML = `
      <button class="tarjeta-galeria" type="button">
        <img src="${elemento.imagen}" alt="${elemento.titulo}">
        <div class="info-galeria">
          <h3>${elemento.titulo}</h3>
          <p>${elemento.descripcion}</p>
        </div>
      </button>
    `;

    const boton = article.querySelector(".tarjeta-galeria");

    boton.addEventListener("click", function () {
      abrirModal(elemento);
    });

    contenedor.appendChild(article);
  });
}

// Activa los botones filtro
function activarFiltros() {
  const botones = document.querySelectorAll(".boton-filtro");

  botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
      botones.forEach(function (item) {
        item.classList.remove("activo");
      });

      boton.classList.add("activo");
      mostrarGaleria(boton.dataset.filtro);
    });
  });
}

// Prepara eventos del modal
function prepararModal() {
  const modal = document.getElementById("modal");
  const cerrar = document.getElementById("cerrar-modal");

  cerrar.addEventListener("click", cerrarModal);

  modal.addEventListener("click", function (evento) {
    if (evento.target === modal) {
      cerrarModal();
    }
  });
}

// Abre modal con la información del elemento
function abrirModal(elemento) {
  document.getElementById("modal-imagen").src = elemento.imagen;
  document.getElementById("modal-imagen").alt = elemento.titulo;
  document.getElementById("modal-titulo").textContent = elemento.titulo;
  document.getElementById("modal-descripcion").textContent = elemento.descripcion;

  document.getElementById("modal").classList.add("mostrar");
}

// Cierra el modal
function cerrarModal() {
  document.getElementById("modal").classList.remove("mostrar");
}
