// Wait until all HTML content is loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario-presupuesto");
  if (!formulario) return;

  // References to the form fields
  const nombre = document.getElementById("nombre");
  const apellidos = document.getElementById("apellidos");
  const telefono = document.getElementById("telefono");
  const email = document.getElementById("email");
  const producto = document.getElementById("producto");
  const plazo = document.getElementById("plazo");
  const extras = document.querySelectorAll(".extra");
  const condiciones = document.getElementById("condiciones");
  const mensajeFormulario = document.getElementById("mensaje-formulario");

  // References to the budget summary
  const subtotalElemento = document.getElementById("subtotal");
  const descuentoElemento = document.getElementById("descuento");
  const totalElemento = document.getElementById("total");

  // Regular expressions used to validate the fields
  const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\\s]{1,15}$/;
  const regexApellidos = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\\s]{1,40}$/;
  const regexTelefono = /^[0-9]{9}$/;
  const regexEmail = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

  function mostrarError(id, mensaje) {
    document.getElementById(id).textContent = mensaje;
  }

  function limpiarError(id) {
    document.getElementById(id).textContent = "";
  }

  function validarNombre() {
    const valor = nombre.value.trim();

    if (!regexNombre.test(valor)) {
      mostrarError("error-nombre", "El nombre solo puede tener letras y un máximo de 15 caracteres.");
      return false;
    }

    limpiarError("error-nombre");
    return true;
  }

  function validarApellidos() {
    const valor = apellidos.value.trim();

    if (!regexApellidos.test(valor)) {
      mostrarError("error-apellidos", "Los apellidos solo pueden tener letras y un máximo de 40 caracteres.");
      return false;
    }

    limpiarError("error-apellidos");
    return true;
  }

  function validarTelefono() {
    telefono.value = telefono.value.replace(/\\D/g, "").slice(0, 9);
    const valor = telefono.value.trim();

    if (!regexTelefono.test(valor)) {
      mostrarError("error-telefono", "El teléfono debe contener exactamente 9 números.");
      return false;
    }

    limpiarError("error-telefono");
    return true;
  }

  function validarEmail() {
    const valor = email.value.trim();

    if (!regexEmail.test(valor)) {
      mostrarError("error-email", "Introduce un correo electrónico válido.");
      return false;
    }

    limpiarError("error-email");
    return true;
  }

  function validarCondiciones() {
    if (!condiciones.checked) {
      mostrarError("error-condiciones", "Debes aceptar las condiciones para enviar el formulario.");
      return false;
    }

    limpiarError("error-condiciones");
    return true;
  }

  function validarPlazo() {
    const dias = Number(plazo.value);

    if (!dias || dias < 1 || dias > 90) {
      return false;
    }

    return true;
  }

  function calcularDescuento(subtotal, dias) {
    let porcentaje = 0;

    if (dias >= 30) {
      porcentaje = 15;
    } else if (dias >= 15) {
      porcentaje = 10;
    } else if (dias >= 7) {
      porcentaje = 5;
    }

    return subtotal * (porcentaje / 100);
  }

  function actualizarPresupuesto() {
    const precioProducto = Number(producto.value) || 0;
    const dias = Number(plazo.value) || 0;
    let totalExtras = 0;

    extras.forEach(function (extra) {
      if (extra.checked) {
        totalExtras += Number(extra.value);
      }
    });

    const subtotal = precioProducto + totalExtras;
    const descuento = calcularDescuento(subtotal, dias);
    const total = subtotal - descuento;

    subtotalElemento.textContent = subtotal.toFixed(2) + " €";
    descuentoElemento.textContent = descuento.toFixed(2) + " €";
    totalElemento.textContent = total.toFixed(2) + " €";
  }

  nombre.addEventListener("input", validarNombre);
  apellidos.addEventListener("input", validarApellidos);
  telefono.addEventListener("input", validarTelefono);
  email.addEventListener("input", validarEmail);

  producto.addEventListener("change", actualizarPresupuesto);
  plazo.addEventListener("input", actualizarPresupuesto);

  extras.forEach(function (extra) {
    extra.addEventListener("change", actualizarPresupuesto);
  });

  condiciones.addEventListener("change", validarCondiciones);

  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const formularioValido =
      validarNombre() &&
      validarApellidos() &&
      validarTelefono() &&
      validarEmail() &&
      validarCondiciones() &&
      validarPlazo() &&
      producto.value !== "";

    if (producto.value === "") {
      mensajeFormulario.textContent = "Debes seleccionar un tipo de servicio.";
      mensajeFormulario.classList.add("mensaje-error-general");
      mensajeFormulario.classList.remove("mensaje-exito");
      return;
    }

    if (formularioValido) {
      mensajeFormulario.textContent = "Solicitud enviada correctamente. Hemos recibido tu petición.";
      mensajeFormulario.classList.add("mensaje-exito");
      mensajeFormulario.classList.remove("mensaje-error-general");

      formulario.reset();
      actualizarPresupuesto();
      limpiarError("error-condiciones");
    } else {
      mensajeFormulario.textContent = "Revisa el formulario antes de enviarlo.";
      mensajeFormulario.classList.add("mensaje-error-general");
      mensajeFormulario.classList.remove("mensaje-exito");
    }
  });

  formulario.addEventListener("reset", function () {
    setTimeout(function () {
      limpiarError("error-nombre");
      limpiarError("error-apellidos");
      limpiarError("error-telefono");
      limpiarError("error-email");
      limpiarError("error-condiciones");
      mensajeFormulario.textContent = "";
      mensajeFormulario.classList.remove("mensaje-exito", "mensaje-error-general");
      actualizarPresupuesto();
    }, 0);
  });

  actualizarPresupuesto();
});
