import ResponsiveAppBar from './Nav'
import './Eyebrows.css'
import CardMedia from '@mui/material/CardMedia';
import React from "react";
import Button from '@mui/material/Button'
import Lifting from '../imagenes/Lifting.jpg'
import PatyLashes from '../imagenes/PatyLashes.jpg'
import SwipeableTextMobileStepper from '../components/Carrusel'
import { Box, Container } from '@mui/material';

const Home = () => {
    return (
        <div class="vacio">
            <ResponsiveAppBar />
            {/*   <!-- Titulo y carrusel de imagenes--> */}
            <div class="titulo-card-estetica">
                <h2>Centro de estética y belleza</h2>
            </div>
            <div class="container2">
                <SwipeableTextMobileStepper />
            </div>

            {/*    <!-- div con mensaje de bienvenida--> */}
            <div class="container1">
                <div class="card-texto-index">
                    <div class="card-body">
                        Bienvenidas al centro estético “Paty Lashes” el cual entrega diferentes servicios para lo que
                        necesites,
                        tales como Extensión de pestañas efecto natural, efecto mascara, lifting laminado y ondulados.
                        ¡Ubícanos
                        en la ciudad de Rancagua!
                    </div>
                </div>
            </div>


            <footer>
                <Box>
                    <Container>
                        
                    </Container>
                </Box>

            </footer>

        </div>
    )
}

export default Home;