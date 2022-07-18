import React, { useState } from "react";
import "./form2.css";
/* import Select from './Select' */
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';



export default function App({ closeModal }) {

  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [Precio, setPrecio] = useState('');
  const [pending, setPending] = React.useState(false);


  // eslint-disable-next-line no-unused-vars
  const [open, setOpen] = React.useState(false);
    // eslint-disable-next-line no-unused-vars
    const handleOpen = () => {
        setOpen(true);
    };
    // eslint-disable-next-line no-unused-vars
    const handleClose = () => {
        setOpen(false);
    };




  const handleSubmit = (e) => {
    e.preventDefault();
    const infoModal = { titulo, descripcion, Precio};


    setPending(true);

    fetch('http://localhost:8000/cardinfo' , {
      method:'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(infoModal),
    }).then(() =>{
      console.log("new pas add");
      setPending(false)
      closeModal(false)
    })
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
      
        <div>
          <Typography style={{ textAlign: 'left' }} variant="h6" color="initial">Nombre</Typography>
          <input
            type="text"
            required
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>

        <div>
          <Typography style={{ textAlign: 'left' }} variant="h6" color="initial">Descripcion</Typography>
          <input
            type="text"
            required
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <div>
          <Typography style={{ textAlign: 'left' }} variant="h6" color="initial">Precio</Typography>
          <input
            type="text"
            required
            value={Precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </div>
        <p>{titulo}</p>
       
       
        {!pending && <Button  type="submit" variant="outlined" color="primary" style={{ textAlign:'center'}}>Reservar</Button>}
        {pending && <Button  disable type="submit" variant="outlined" color="primary" style={{ textAlign:'center'}}>Agregando reserva...</Button>}

      </form>
    </div>
  );
}
