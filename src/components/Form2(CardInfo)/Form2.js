import React, { useState } from 'react';
import './form2.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function Form2({ closeModal, handleUpdateData }) {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const infoModal = { titulo, descripcion, precio };
    setPending(true);
  
    try {
      const response = await fetch('http://localhost:8000/cardinfo', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(infoModal),
      });
  
      if (!response.ok) {
        throw new Error('Error al agregar el nuevo servicio');
      }
  
      setPending(false);
      closeModal();
      handleUpdateData(); // Actualizar los datos después de agregar un nuevo servicio
    } catch (error) {
      console.error(error);
      setPending(false);
    }
  };
  

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <Typography style={{ textAlign: 'left' }} variant="h6" color="initial">
            Nombre
          </Typography>
          <input type="text" required value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        </div>
        <div>
          <Typography style={{ textAlign: 'left' }} variant="h6" color="initial">
            Descripcion
          </Typography>
          <TextField
            type="text"
            multiline
            value={descripcion}
            required
            rows={4}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <div>
          <Typography style={{ textAlign: 'left' }} variant="h6" color="initial">
            Precio
          </Typography>
          <input type="text" required value={precio} onChange={(e) => setPrecio(e.target.value)} />
        </div>
        <p>{titulo}</p>
        {!pending && (
          <Button type="submit" variant="outlined" color="primary" style={{ textAlign: 'center' }}>
            Agregar nuevo servicio
          </Button>
        )}
        {pending && (
          <Button disable type="submit" variant="outlined" color="primary" style={{ textAlign: 'center' }}>
            Agregando reserva...
          </Button>
        )}
      </form>
    </div>
  );
}
