// /node/dni.js

// Asegúrate que la URL apunte al puerto de tu servidor de Express (3003)
const SERVER_URL = "http://localhost:3003";

const formDni = document.getElementById("formDni");
const inputDni = document.getElementById("inputDni");
const btnConsultar = document.getElementById("btnConsultar");
const resultado = document.getElementById("resultado");
const loading = document.getElementById("informacion-dni");
const errorDiv = document.getElementById("error");

formDni.addEventListener("submit", async (e) => {
  e.preventDefault();
  await consultarDNI();
});

async function consultarDNI() {
  const dni = inputDni.value.trim();
  limpiarResultados();

  if (!dni || dni.length !== 8 || !/^\d+$/.test(dni)) {
    mostrarError("Por favor, ingresa un DNI válido de 8 dígitos");
    return;
  }

  mostrarLoading(true);
  btnConsultar.disabled = true;

  try {
    // Petición a tu propio backend de Express
    const response = await fetch(`${SERVER_URL}/api/dni/${dni}`);

    if (!response.ok) {
      // Si la respuesta no es 200 (ej: 400 o 500), leemos el error JSON que envía tu servidor
      const errorData = await response.json();
      throw new Error(errorData.mensaje || errorData.error || "Error al consultar el DNI");
    }

    const data = await response.json();
    mostrarResultado(data);
  } catch (error) {
    console.error("Error", error);
    mostrarError(error.message);
  } finally {
    mostrarLoading(false);
    btnConsultar.disabled = false;
  }
}

function mostrarResultado(data) {
  // Los nombres de propiedad (apellidoPaterno, etc.) son los que mapeaste en server.js
  resultado.innerHTML = `
    <div class="card mt-4">
      <div class="card-header bg-success text-white">
        Información Encontrada
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><strong>DNI:</strong> ${
            data.dni || "N/A"
          }</li>
          <li class="list-group-item"><strong>Nombres:</strong> ${
            data.nombres || "N/A"
          }</li>
          <li class="list-group-item"><strong>Apellido Paterno:</strong> ${
            data.apellidoPaterno || "N/A"
          }</li>
          <li class="list-group-item"><strong>Apellido Materno:</strong> ${
            data.apellidoMaterno || "N/A"
          }</li>
          <li class="list-group-item"><strong>Código de verificación:</strong> ${
            data.codVerifica || "N/A"
          }</li>
        </ul>
      </div>
    </div>
  `;
  resultado.style.display = "block";
}

function mostrarError(mensaje) {
  errorDiv.innerHTML = `
    <div class="alert alert-danger d-flex align-items-center" role="alert">
      <i class="fas fa-exclamation-triangle me-2"></i>
      <div>${mensaje}</div>
    </div>
  `;
  errorDiv.style.display = "block";
}

function mostrarLoading(show) {
  loading.innerHTML = show
    ? `<div class="d-flex justify-content-center mt-3">
         <div class="spinner-border text-primary" role="status">
           <span class="visually-hidden">Cargando...</span>
         </div>
       </div>`
    : "";
}

function limpiarResultados() {
  resultado.innerHTML = "";
  resultado.style.display = "none";
  errorDiv.innerHTML = "";
  errorDiv.style.display = "none";
}