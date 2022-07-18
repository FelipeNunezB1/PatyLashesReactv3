import React, { useState } from "react";
import "./form1.css";
import HelperText from './HelperText'
/* import Select from './Select' */
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';



export default function App({ closeModal }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profesional, setprofesional] = React.useState('');
  const [hora, setHora] = React.useState('');
  const [pending, setPending] = React.useState(false);

  const handleChange = (event) => {
    setprofesional(event.target.value);
  };

  const handleChangehora = (event) => {
    setHora(event.target.value);
  };
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
    const reserva = { name, email, profesional, hora };


    setPending(true);

    fetch('http://localhost:8000/reservas' , {
      method:'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(reserva),
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div style={{ textAlign: 'left' }}>
          <Typography style={{ textAlign: 'left' }} variant="h6" color="initial">Selecciona profesional</Typography>
          <div style={{ color: 'black' }}>
            <Select
              id="demo-simple-select"
              value={profesional}
              style={{ backgroundColor: 'white' }}
              displayEmpty
              onChange={handleChange}
            ><MenuItem value="">
                <em>Ninguna</em>
              </MenuItem>
              <MenuItem value="Valentina">Valentina</MenuItem>
              <MenuItem value="Patricia">Patricia</MenuItem>
              <MenuItem value="Javiera">Javiera</MenuItem>
            </Select>
          </div>
        </div>
        <div>
          <Typography style={{ textAlign: 'left' }} variant="h6" color="initial">Email</Typography>
          <input
            placeholder="Ejemplo@gmail.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </div>
        <div style={{ textAlign: 'left' }}>
          <Typography variant="h6" color="initial">Selecciona dia</Typography>
          <HelperText />
        </div>
        <div style={{ textAlign: 'left' }}>
          <Typography style={{ textAlign: 'left' }} variant="h6" color="initial">Hora</Typography>
          <Select
            id="demo-simple-select"
            value={hora}
            style={{ backgroundColor: 'white' }}
            displayEmpty
            onChange={handleChangehora}
          ><MenuItem value="">
              <em>Ninguna</em>
            </MenuItem>
            <MenuItem value={"14:00"}>14:00</MenuItem>
            <MenuItem value={"15:00"}>15:00</MenuItem>
            <MenuItem value={"16:00"}>16:00</MenuItem>
            <MenuItem value={"17:00"}>17:00</MenuItem>
            <MenuItem value={"18:00"}>18:00</MenuItem>
            <MenuItem value={"19:00"}>19:00</MenuItem>
          </Select>
        </div>
        {!pending && <Button  type="submit" variant="outlined" color="primary" style={{ textAlign:'center'}}>Reservar</Button>}
        {pending && <Button  disable type="submit" variant="outlined" color="primary" style={{ textAlign:'center'}}>Agregando reserva...</Button>}

      </form>
    </div>
  );
}
