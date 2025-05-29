import React, { useState } from 'react';
import axios from 'axios';

const RequestForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    tema: '',
    resumen: '',
    detalle: '',
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/solicitudes', form);
    onAdd(res.data);
    setForm({ nombre: '', correo: '', telefono: '', tema: '', resumen: '', detalle: '' });
  };

  return (
    <form className="card p-4 mb-3" onSubmit={handleSubmit}>
      <h4>Crear solicitud</h4>
      <div className="mb-2">
        <input className="form-control" name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" />
      </div>
      <div className="mb-2">
        <input className="form-control" name="correo" value={form.correo} onChange={handleChange} placeholder="Correo" />
      </div>
      <div className="mb-2">
        <input className="form-control" name="telefono" value={form.telefono} onChange={handleChange} placeholder="Teléfono" />
      </div>
      <div className="mb-2">
        <input className="form-control" name="tema" value={form.tema} onChange={handleChange} placeholder="Tema de ayuda" />
      </div>
      <div className="mb-2">
        <input className="form-control" name="resumen" value={form.resumen} onChange={handleChange} placeholder="Resumen" />
      </div>
      <div className="mb-2">
        <textarea className="form-control" name="detalle" value={form.detalle} onChange={handleChange} placeholder="Detalle"></textarea>
      </div>
      <button className="btn btn-primary">Guardar</button>
    </form>
  );
};

export default RequestForm;
