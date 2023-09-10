import React, { useEffect, useState } from 'react';
import ResponsiveAppBar from './Nav';
import Modal2 from './Modal2';
import CardINfoo from './CardINfoo';
import './App1.css';
import './Eyebrows.css';

const Eyebrows = () => {
  const [cardinfo, setCardinfo] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/cardinfo');
      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }
      const data = await response.json();
      setCardinfo(data);
      setIsPending(false);
    } catch (error) {
      setError(error.message);
      setIsPending(false);
    }
  };

  const handleUpdateData = () => {
    fetchData();
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/cardinfo/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Error al eliminar el servicio');
      }
      handleUpdateData(); // Actualizar los datos después de eliminar el servicio
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="App2">
      <ResponsiveAppBar />
      <div className="titulo-card-extension" id="Cejas">
        <h2>Cejasss</h2>
      </div>
      <Modal2 handleUpdateData={handleUpdateData} />
      {error && <div>{error}</div>}
      {isPending && <div>Cargando...</div>}
      <main>
        <CardINfoo cardinfo={cardinfo} handleDelete={handleDelete} />
      </main>
    </div>
  );
};

export default Eyebrows;
