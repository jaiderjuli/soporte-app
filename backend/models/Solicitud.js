const mongoose = require('mongoose');

const solicitudSchema = new mongoose.Schema({
  nombre: String,
  correo: String,
  telefono: String,
  tema: String,
  resumen: String,
  detalle: String,
}, { timestamps: true });

module.exports = mongoose.model('Solicitud', solicitudSchema);
