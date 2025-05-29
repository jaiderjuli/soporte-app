const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Datos quemados
const solicitudes = [
  {
    id: 1,
    nombre: 'Juan Pérez',
    correo: 'juan@example.com',
    descripcion: 'No puedo ingresar al sistema',
    estado: 'Abierta'
  },
  {
    id: 2,
    nombre: 'María López',
    correo: 'maria@example.com',
    descripcion: 'Error al guardar datos',
    estado: 'Cerrada'
  }
];

// Endpoint de prueba
app.get('/api/solicitudes', (req, res) => {
  res.json(solicitudes);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));

