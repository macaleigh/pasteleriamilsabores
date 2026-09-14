const PRODUCTOS_INICIALES = [
  { codigo: "TC001", categoria: "Tortas Cuadradas", nombre: "Torta Cuadrada de Chocolate", precio: 45000, stock: 12, stockCritico: 3, descripcion: "Deliciosa torta de chocolate con capas de ganache y un toque de avellanas. Personalizable con mensajes especiales.", imagen: "🍫" },
  { codigo: "TC002", categoria: "Tortas Cuadradas", nombre: "Torta Cuadrada de Frutas", precio: 50000, stock: 8, stockCritico: 3, descripcion: "Una mezcla de frutas frescas y crema chantilly sobre un suave bizcocho de vainilla, ideal para celebraciones.", imagen: "🍓" },
  { codigo: "TT001", categoria: "Tortas Circulares", nombre: "Torta Circular de Vainilla", precio: 40000, stock: 15, stockCritico: 4, descripcion: "Bizcocho de vainilla clásico relleno con crema pastelera y cubierto con un glaseado dulce.", imagen: "🍰" },
  { codigo: "TT002", categoria: "Tortas Circulares", nombre: "Torta Circular de Manjar", precio: 42000, stock: 10, stockCritico: 3, descripcion: "Torta tradicional chilena con manjar y nueces, un deleite para los amantes de los sabores dulces y clásicos.", imagen: "🍰" },
  { codigo: "PI001", categoria: "Postres Individuales", nombre: "Mousse de Chocolate", precio: 5000, stock: 30, stockCritico: 8, descripcion: "Postre individual cremoso y suave, hecho con chocolate de alta calidad.", imagen: "🍮" },
  { codigo: "PI002", categoria: "Postres Individuales", nombre: "Tiramisú Clásico", precio: 5500, stock: 25, stockCritico: 8, descripcion: "Un postre italiano individual con capas de café, mascarpone y cacao.", imagen: "🍮" },
  { codigo: "PSA001", categoria: "Productos Sin Azúcar", nombre: "Torta Sin Azúcar de Naranja", precio: 48000, stock: 6, stockCritico: 2, descripcion: "Torta ligera y deliciosa, endulzada naturalmente, ideal para quienes buscan opciones más saludables.", imagen: "🍊" },
  { codigo: "PSA002", categoria: "Productos Sin Azúcar", nombre: "Cheesecake Sin Azúcar", precio: 47000, stock: 7, stockCritico: 2, descripcion: "Suave y cremoso, este cheesecake es una opción perfecta para disfrutar sin culpa.", imagen: "🍰" },
  { codigo: "PT001", categoria: "Pastelería Tradicional", nombre: "Empanada de Manzana", precio: 3000, stock: 40, stockCritico: 10, descripcion: "Pastelería tradicional rellena de manzanas especiadas, perfecta para un dulce desayuno o merienda.", imagen: "🥟" },
  { codigo: "PT002", categoria: "Pastelería Tradicional", nombre: "Tarta de Santiago", precio: 6000, stock: 20, stockCritico: 5, descripcion: "Tradicional tarta española hecha con almendras, azúcar y huevos.", imagen: "🥧" },
  { codigo: "PG001", categoria: "Productos Sin Gluten", nombre: "Brownie Sin Gluten", precio: 4000, stock: 18, stockCritico: 5, descripcion: "Rico y denso, este brownie es perfecto para quienes necesitan evitar el gluten sin sacrificar el sabor.", imagen: "🍫" },
  { codigo: "PG002", categoria: "Productos Sin Gluten", nombre: "Pan Sin Gluten", precio: 3500, stock: 22, stockCritico: 5, descripcion: "Suave y esponjoso, ideal para sándwiches o para acompañar cualquier comida.", imagen: "🍞" },
  { codigo: "PV001", categoria: "Productos Vegana", nombre: "Torta Vegana de Chocolate", precio: 50000, stock: 5, stockCritico: 2, descripcion: "Torta de chocolate húmeda y deliciosa, hecha sin productos de origen animal.", imagen: "🍫" },
  { codigo: "PV002", categoria: "Productos Vegana", nombre: "Galletas Veganas de Avena", precio: 4500, stock: 26, stockCritico: 6, descripcion: "Crujientes y sabrosas, estas galletas son una excelente opción para un snack saludable y vegano.", imagen: "🍪" },
  { codigo: "TE001", categoria: "Tortas Especiales", nombre: "Torta Especial de Cumpleaños", precio: 55000, stock: 9, stockCritico: 3, descripcion: "Diseñada especialmente para celebraciones, personalizable con decoraciones y mensajes únicos.", imagen: "🎂" },
  { codigo: "TE002", categoria: "Tortas Especiales", nombre: "Torta Especial de Boda", precio: 60000, stock: 4, stockCritico: 2, descripcion: "Elegante y deliciosa, esta torta está diseñada para ser el centro de atención en cualquier boda.", imagen: "🎂" }
];

const CATEGORIAS = [
  "Tortas Cuadradas",
  "Tortas Circulares",
  "Postres Individuales",
  "Productos Sin Azúcar",
  "Pastelería Tradicional",
  "Productos Sin Gluten",
  "Productos Vegana",
  "Tortas Especiales"
];

const CLAVE_PRODUCTOS = "msabores_productos";

function obtenerProductos() {
  const guardados = localStorage.getItem(CLAVE_PRODUCTOS);
  if (guardados) {
    try {
      return JSON.parse(guardados);
    } catch (e) {
      console.error("Error leyendo productos de localStorage", e);
    }
  }
  guardarProductos(PRODUCTOS_INICIALES);
  return PRODUCTOS_INICIALES;
}

function guardarProductos(productos) {
  localStorage.setItem(CLAVE_PRODUCTOS, JSON.stringify(productos));
}

function obtenerProductoPorCodigo(codigo) {
  return obtenerProductos().find(p => p.codigo === codigo);
}
