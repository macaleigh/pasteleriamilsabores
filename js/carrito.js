const CLAVE_CARRITO = "msabores_carrito";

function obtenerCarrito() {
  const guardado = localStorage.getItem(CLAVE_CARRITO);
  if (!guardado) return [];
  return JSON.parse(guardado);
}

function guardarCarrito(carrito) {
  localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));
  actualizarContadorCarrito();
}

// Agrega un producto al carrito. Si ya está, le suma la cantidad.
function agregarAlCarrito(codigo, cantidad = 1) {
  const producto = obtenerProductoPorCodigo(codigo);
  if (!producto) {
    return { ok: false, mensaje: "El producto no existe." };
  }

  const carrito = obtenerCarrito();
  let item = null;
  for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].codigo === codigo) item = carrito[i];
  }

  const cantidadActual = item ? item.cantidad : 0;

  if (cantidadActual + cantidad > producto.stock) {
    return { ok: false, mensaje: `No hay suficiente stock de "${producto.nombre}".` };
  }

  if (item) {
    item.cantidad = item.cantidad + cantidad;
  } else {
    carrito.push({
      codigo: producto.codigo,
      nombre: producto.nombre,
      precio: producto.precio,
      imagen: producto.imagen,
      cantidad: cantidad
    });
  }

  guardarCarrito(carrito);
  return { ok: true, mensaje: `"${producto.nombre}" se agregó al carrito.` };
}

function actualizarCantidad(codigo, nuevaCantidad) {
  const carrito = obtenerCarrito();

  if (nuevaCantidad <= 0) {
    eliminarDelCarrito(codigo);
    return;
  }

  for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].codigo === codigo) {
      carrito[i].cantidad = nuevaCantidad;
    }
  }
  guardarCarrito(carrito);
  if (typeof renderizarCarrito === "function") renderizarCarrito();
}

function eliminarDelCarrito(codigo) {
  const carritoNuevo = [];
  const carrito = obtenerCarrito();
  for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].codigo !== codigo) carritoNuevo.push(carrito[i]);
  }
  guardarCarrito(carritoNuevo);
  if (typeof renderizarCarrito === "function") renderizarCarrito();
}

function vaciarCarrito() {
  guardarCarrito([]);
  if (typeof renderizarCarrito === "function") renderizarCarrito();
}

function totalCarrito() {
  const carrito = obtenerCarrito();
  let total = 0;
  for (let i = 0; i < carrito.length; i++) {
    total = total + carrito[i].precio * carrito[i].cantidad;
  }
  return total;
}

function cantidadTotalCarrito() {
  const carrito = obtenerCarrito();
  let total = 0;
  for (let i = 0; i < carrito.length; i++) {
    total = total + carrito[i].cantidad;
  }
  return total;
}

function formatearCLP(valor) {
  return "$" + Math.round(valor).toLocaleString("es-CL");
}

// Actualiza el número del carrito que se ve en el header de todas las páginas.
function actualizarContadorCarrito() {
  const elementos = document.querySelectorAll(".carrito-contador");
  elementos.forEach(el => {
    el.textContent = cantidadTotalCarrito();
  });
}

document.addEventListener("DOMContentLoaded", actualizarContadorCarrito);
