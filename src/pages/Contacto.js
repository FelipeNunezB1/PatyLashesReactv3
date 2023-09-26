import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import ResponsiveAppBar from '../components/navbar/Nav';
import Footer from '../components/Footer/Footer';

const Contacto = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Agrega aquí la lógica para enviar el formulario de contacto
    };

    return (
        <div className="boody">
            <ResponsiveAppBar />
            <div className="top">
                <div className="titulo-container">
                    <h2>Contacto</h2>
                </div>
                <Container maxWidth="sm">
                    <form onSubmit={handleSubmit}>
                        <Typography variant="h5" gutterBottom>
                            Envíanos un mensaje
                        </Typography>
                        <TextField
                            label="Nombre"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            required
                        />
                        <TextField
                            label="Correo Electrónico"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            required
                        />
                        <TextField
                            label="Mensaje"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            multiline
                            rows={4}
                            required
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="secondary" // Cambia esto al color deseado
                            startIcon={<SendIcon />}
                        >
                            Enviar
                        </Button>
                    </form>
                </Container>
            </div>
            <Footer />
        </div>
    );
};

export default Contacto;
