// src/app.js
const express = require('express');
const cors = require('cors');
const skillsRoutes = require('./routes/skillsRoutes');
const app = express();

app.use(cors()); // Habilitar CORS
app.use(express.json()); // Para que el servidor entienda los datos en formato JSON

// Usar las rutas de skills
app.use('/skills', skillsRoutes);

// Ruta raíz (opcional) para probar el servidor
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de habilidades');
});

// Configurar el puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en http://localhost:${PORT}`);
});
