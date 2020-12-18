const mongoose = require('mongoose');

const eventoSchema = mongoose.Schema({
  Nombre: { type: String, required: true },
  Ubicacion: { type: String, required: true },
  FechaInicio: { type: String, required: true },
  FechaFin: { type: String, required: true },
  numNotificaciones: { type: Number, required: true },
  Tipo: { type: String, required: true },
  Notificaciones: { type: Array, default: [] },
});

module.exports = mongoose.model('evento', eventoSchema);
