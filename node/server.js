// /node/server.js

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch"); // Usamos node-fetch para la compatibilidad con 'require'

const app = express();
const PORT = process.env.PORT || 3003;

// Obtener variables de entorno
const API_TOKEN = process.env.API_TOKEN;
const API_BASE_URL = process.env.API_BASE_URL;

// Middlewares
app.use(
  cors({
    origin: ["http://localhost:8080", "http://127.0.0.1:8080", `http://localhost:${PORT}`],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());
// Sirve archivos estáticos (index.html, dni.js) desde la carpeta actual ('.')
app.use(express.static("."));

// **********************************************
// RUTA PARA CONSULTA DNI (ENDPOINT)
// **********************************************
app.get("/api/dni/:numero", async (req, res) => {
  const { numero } = req.params;

  // 1. Validación de configuración
  if (!API_TOKEN || !API_BASE_URL) {
      return res.status(500).json({
          error: "Error de configuración",
          mensaje: "API_TOKEN o API_BASE_URL no están configurados en el archivo .env",
      });
  }

  // 2. Validación de formato de DNI
  if (!numero || numero.length !== 8 || !/^\d+$/.test(numero)) {
    return res.status(400).json({
      error: "El DNI debe tener 8 dígitos numéricos válidos",
    });
  }

  // 3. Consulta a la API Externa (usando tu URL y Token)
  try {
    const apiURL = `${API_BASE_URL}${numero}`;
    console.log("Consultando DNI en:", apiURL);

    // El token se envía en el encabezado 'Authorization' como Bearer Token
    const response = await fetch(apiURL, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      // Intenta obtener el error detallado de la API externa
      let errorDetail = `Error ${response.status} al consultar la API.`;
      try {
          const errorJson = await response.json();
          errorDetail = errorJson.message || errorJson.error || errorDetail;
      } catch (e) {
          // Si no es JSON, usa el estado
      }
      throw new Error(errorDetail);
    }

    const apiData = await response.json();

    // 4. Mapeo de la respuesta (se adapta a tu formato de respuesta: { success: true, datos: { ... } })
    if (!apiData.success || !apiData.datos) {
        // En caso de que la API devuelva éxito (200) pero sin datos
        throw new Error("DNI no encontrado o respuesta de la API no válida.");
    }

    const { dni, nombres, ape_paterno, ape_materno } = apiData.datos;

    // Devolvemos los datos mapeados al formato que espera el frontend
    res.json({
        dni: dni,
        nombres: nombres,
        apellidoPaterno: ape_paterno, // <--- Mapeo
        apellidoMaterno: ape_materno, // <--- Mapeo
        codVerifica: 'N/A', // No está en la respuesta de ejemplo, lo marcamos como N/A
    });

  } catch (error) {
    console.error("Error en la ruta /api/dni:", error);
    res.status(500).json({
      error: "Error interno del servidor",
      mensaje: error.message,
    });
  }
});

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});