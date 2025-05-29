const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/solicitudController');

router.get('/', ctrl.obtenerSolicitudes);
router.post('/', ctrl.crearSolicitud);
router.delete('/:id', ctrl.eliminarSolicitud);

module.exports = router;
