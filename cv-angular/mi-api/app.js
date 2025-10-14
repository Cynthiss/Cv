const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola Mundo desde Express!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor Express corriendo en http://localhost:${port}`);
});
