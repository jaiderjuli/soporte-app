import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RequestForm from './components/RequestForm';
import RequestList from './components/RequestList';

function App() {
  const [solicitudes, setSolicitudes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/solicitudes')
      .then(res => setSolicitudes(res.data));
  }, []);

  const addSolicitud = nueva => setSolicitudes([nueva, ...solicitudes]);
  const deleteSolicitud = id => setSolicitudes(solicitudes.filter(s => s._id !== id));

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Sistema de Soporte Técnico</h1>
      <RequestForm onAdd={addSolicitud} />
      <RequestList solicitudes={solicitudes} onDelete={deleteSolicitud} />
    </div>
  );
}

export default App;

