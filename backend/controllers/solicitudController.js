const Solicitud = require('../models/Solicitud');

exports.obtenerSolicitudes = async (req, res) => {
  const solicitudes = await Solicitud.find();
  res.json(solicitudes);
};

exports.crearSolicitud = async (req, res) => {
  const nueva = new Solicitud(req.body);
  await nueva.save();
  res.json(nueva);
};

exports.eliminarSolicitud = async (req, res) => {
  await Solicitud.findByIdAndDelete(req.params.id);
  res.json({ mensaje: 'Solicitud eliminada' });
};
