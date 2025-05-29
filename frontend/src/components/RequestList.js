import React from 'react';
import axios from 'axios';

const RequestList = ({ solicitudes, onDelete }) => {
  const handleDelete = async id => {
    await axios.delete(`http://localhost:5000/api/solicitudes/${id}`);
    onDelete(id);
  };

  return (
    <div>
      {solicitudes.map(s => (
        <div key={s._id} className="card p-3 mb-2">
          <h5>{s.tema}</h5>
          <p><strong>Nombre:</strong> {s.nombre}</p>
          <p><strong>Resumen:</strong> {s.resumen}</p>
          <p><strong>Detalle:</strong> {s.detalle}</p>
          <button className="btn btn-danger btn-sm" onClick={() => handleDelete(s._id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default RequestList;
