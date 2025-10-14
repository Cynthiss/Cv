const express = require('express');
const app = express();

// Ruta principal
app.get('/', (req, res) => {
  res.send('Hola Mundo desde Express!');
});

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
