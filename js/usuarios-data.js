const CLAVE_USUARIOS = "msabores_usuarios";

const USUARIOS_INICIALES = [
  { run: "190110229", nombre: "Macarena", apellidos: "Pérez Soto", correo: "macarena@duoc.cl", tipo: "Administrador", region: "Región Metropolitana de Santiago", comuna: "Santiago", direccion: "Av. Siempre Viva 123", fechaNacimiento: "1999-05-14" },
  { run: "152030057", nombre: "Javier", apellidos: "Muñoz Rojas", correo: "javier.munoz@gmail.com", tipo: "Vendedor", region: "Región de Ñuble", comuna: "Chillán", direccion: "Calle Las Rosas 456", fechaNacimiento: "1995-11-02" },
  { run: "178965038", nombre: "Camila", apellidos: "Torres Díaz", correo: "camila.torres@gmail.com", tipo: "Cliente", region: "Región de la Araucanía", comuna: "Temuco", direccion: "Pasaje Los Aromos 789", fechaNacimiento: "2000-02-20" }
];

function obtenerUsuarios() {
  const guardados = localStorage.getItem(CLAVE_USUARIOS);
  if (guardados) {
    try { return JSON.parse(guardados); } catch (e) { console.error(e); }
  }
  guardarUsuarios(USUARIOS_INICIALES);
  return USUARIOS_INICIALES;
}

function guardarUsuarios(usuarios) {
  localStorage.setItem(CLAVE_USUARIOS, JSON.stringify(usuarios));
}

function obtenerUsuarioPorRun(run) {
  return obtenerUsuarios().find(u => u.run === run);
}
