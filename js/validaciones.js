const DOMINIOS_CORREO_PERMITIDOS = ["duoc.cl", "profesor.duoc.cl", "gmail.com"];

function formatoCorreoValido(correo) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(correo);
}

function dominioCorreoPermitido(correo) {
  const dominio = correo.split("@")[1]?.toLowerCase();
  return DOMINIOS_CORREO_PERMITIDOS.includes(dominio);
}

function validarRun(run) {
  const limpio = run.trim().toUpperCase();
  if (limpio.length < 7 || limpio.length > 9) return false;

  const cuerpo = limpio.slice(0, -1);
  const dv = limpio.slice(-1);

  const cuerpoSonNumeros = /^[0-9]+$/.test(cuerpo);
  const dvValido = /^[0-9K]$/.test(dv);

  return cuerpoSonNumeros && dvValido;
}

function mostrarError(inputId, mensaje) {
  const input = document.getElementById(inputId);
  const errorEl = document.getElementById(inputId + "-error");
  if (input) input.classList.add("campo-invalido");
  if (errorEl) errorEl.textContent = mensaje;
}

function limpiarError(inputId) {
  const input = document.getElementById(inputId);
  const errorEl = document.getElementById(inputId + "-error");
  if (input) input.classList.remove("campo-invalido");
  if (errorEl) errorEl.textContent = "";
}

function mostrarMensajeFormulario(elId, mensaje, tipo = "exito") {
  const el = document.getElementById(elId);
  if (!el) return;
  el.textContent = mensaje;
  el.className = "mensaje-formulario " + (tipo === "exito" ? "mensaje-exito" : "mensaje-error");
  el.style.display = "block";
}
