const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

const app = express();
// Importa las rutas
const apiRoute = require('./routes/api');
// Middkewares revisiones logica, rediracciones Router, etc... app.use
app.use(bodyParser.json());
app.use('/api', apiRoute);
// Rutas
app.get('/', (req, res) => {
  res.send('Hello world');
});
// conectarse a la base de datos
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  console.log('CONEXION REALIZADA')
);
// PORT
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`listening on port ${port}`));
