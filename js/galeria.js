// Base gallery data: each item includes title, category, description, and image
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
    imagen: "https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?auto=format&fit=crop&w=900&q=80"
  },
  {
    titulo: "Tabla ibérica",
    categoria: "tapas",
    descripcion: "Selección ibérica servida con pan y tomate.",
    imagen: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80"
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
    imagen: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=900&q=80"
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
    imagen: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?auto=format&fit=crop&w=900&q=80"
  },
  {
    titulo: "Terraza exterior",
    categoria: "local",
    descripcion: "Un rincón agradable para disfrutar al aire libre.",
    imagen: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80"
  }
];

// Initialize the gallery when the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  mostrarGaleria("todos");
  activarFiltros();
  prepararModal();
});

// Display gallery items according to the selected filter
function mostrarGaleria(filtro) {
  const contenedor = document.getElementById("galeria");
  if (!contenedor) return;

  contenedor.innerHTML = "";

  const elementosFiltrados = filtro === "todos"
    ? elementosGaleria
    : elementosGaleria.filter((elemento) => elemento.categoria === filtro);

  elementosFiltrados.forEach((elemento) => {
    const article = document.createElement("article");
    article.className = "item-galeria";

    article.innerHTML = `
      <button class="tarjeta-galeria" type="button" aria-label="Ver ${elemento.titulo}">
        <img src="${elemento.imagen}" alt="${elemento.titulo}">
        <div class="info-galeria">
          <h3>${elemento.titulo}</h3>
          <p>${elemento.descripcion}</p>
        </div>
      </button>
    `;

    article.querySelector(".tarjeta-galeria").addEventListener("click", () => {
      abrirModal(elemento);
    });

    contenedor.appendChild(article);
  });
}

// Activate the filter buttons
function activarFiltros() {
  const botones = document.querySelectorAll(".boton-filtro");

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      botones.forEach((item) => item.classList.remove("activo"));
      boton.classList.add("activo");
      mostrarGaleria(boton.dataset.filtro);
    });
  });
}

// Configure modal behavior
function prepararModal() {
  const modal = document.getElementById("modal");
  const cerrar = document.getElementById("cerrar-modal");

  if (!modal || !cerrar) return;

  cerrar.addEventListener("click", cerrarModal);

  modal.addEventListener("click", (evento) => {
    if (evento.target === modal) {
      cerrarModal();
    }
  });

  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") {
      cerrarModal();
    }
  });
}

// Open the modal with the selected item information
function abrirModal(elemento) {
  const modal = document.getElementById("modal");
  const imagen = document.getElementById("modal-imagen");
  const titulo = document.getElementById("modal-titulo");
  const descripcion = document.getElementById("modal-descripcion");

  if (!modal || !imagen || !titulo || !descripcion) return;

  imagen.src = elemento.imagen;
  imagen.alt = elemento.titulo;
  titulo.textContent = elemento.titulo;
  descripcion.textContent = elemento.descripcion;
  modal.classList.add("mostrar");
  modal.setAttribute("aria-hidden", "false");
}

// Close the modal
function cerrarModal() {
  const modal = document.getElementById("modal");
  if (!modal) return;

  modal.classList.remove("mostrar");
  modal.setAttribute("aria-hidden", "true");
}
