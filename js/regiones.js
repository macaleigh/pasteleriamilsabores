const REGIONES = [
  {
    nombre: "Región Metropolitana de Santiago",
    comunas: ["Santiago", "Providencia", "Las Condes", "Maipú", "Puente Alto"]
  },
  {
    nombre: "Región de la Araucanía",
    comunas: ["Temuco", "Villarrica", "Angol", "Pucón"]
  },
  {
    nombre: "Región de Ñuble",
    comunas: ["Chillán", "San Carlos", "Bulnes", "Quirihue"]
  }
];

function inicializarRegionesComunas(selectRegionId, selectComunaId) {
  const selectRegion = document.getElementById(selectRegionId);
  const selectComuna = document.getElementById(selectComunaId);
  if (!selectRegion || !selectComuna) return;

  selectRegion.innerHTML = '<option value="">-- Seleccione la región --</option>';
  REGIONES.forEach((r, index) => {
    const opt = document.createElement("option");
    opt.value = r.nombre;
    opt.textContent = r.nombre;
    selectRegion.appendChild(opt);
  });

  function llenarComunas() {
    const region = REGIONES.find(r => r.nombre === selectRegion.value);
    selectComuna.innerHTML = '<option value="">-- Seleccione la comuna --</option>';
    selectComuna.disabled = !region;
    if (region) {
      region.comunas.forEach(c => {
        const opt = document.createElement("option");
        opt.value = c;
        opt.textContent = c;
        selectComuna.appendChild(opt);
      });
    }
  }

  selectRegion.addEventListener("change", llenarComunas);
  llenarComunas();
}
