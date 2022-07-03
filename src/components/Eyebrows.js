import ResponsiveAppBar from './Nav'
import './Eyebrows.css'
import CardMedia from '@mui/material/CardMedia';
import React from "react";
import Lifting from '../imagenes/Lifting.jpg'
import Modal from '../components/Modal'


const Eyebrows = () => {
    return (
        <div className="contenedor">
            <ResponsiveAppBar />
            <div className="titulo-card-extension" id="Cejas">
                <h2>Cejas</h2>
            </div>

            <div class="contenedorFondo">
                <div class="container-cejas">
                    <div class="card">
                        <CardMedia
                            component="img"
                            height="194"
                            image={Lifting}
                            alt="Paella dish"
                        />
                        <div class="card-body">
                            <h5 class="card-title">Perfilado de cejas</h5>
                            <p class="card-text">
                                -Perfilado normal de cejas
                            </p>
                            <p class="card-text">
                                - Duracion : 1:30 Hrs
                            </p>
                            <p class="card-text">
                                - Valor : $5.000
                            </p>
                            <Modal />

                        </div>
                    </div>
                    <div class="card">
                        <CardMedia
                            component="img"
                            height="194"
                            image={Lifting}
                            alt="Paella dish"
                        />
                        <div class="card-body">
                            <h5 class="card-title">Visagismo de cejas</h5>
                            <p class="card-text">
                                - Visajismo normal de cejas
                            </p>
                            <p class="card-text">
                                - Duracion : 1 Hora
                            </p>
                            <p class="card-text">
                                - Valor : $10.000
                            </p>
                            <Modal />

                        </div>
                    </div>
                  
                    <div class="card">
                        <CardMedia
                            component="img"
                            height="194"
                            image={Lifting}
                            alt="Paella dish"
                        />
                        <div class="card-body">
                            <h5 class="card-title">Visagismo y Henna</h5>
                            <p class="card-text">
                                - Visajismo en conjungo con Henna
                            </p>
                            <p class="card-text">
                                - Duracion : 30 Minutos
                            </p>
                            <p class="card-text">
                                - Valor : $12.0000
                            </p>
                            <Modal />

                        </div>
                    </div>
                    <div class="card">
                        <CardMedia
                            component="img"
                            height="194"
                            image={Lifting}
                            alt="Paella dish"
                        />
                        <div class="card-body">
                            <h5 class="card-title">Fijacion de cejas</h5>
                            <p class="card-text">
                                - Se realiza fijacion de cejas por un tiempo estimado
                            </p>
                            <p class="card-text">
                                - Duracion : 30 Minutos
                            </p>
                            <p class="card-text">
                                - Valor : $12.000
                            </p>
                            <Modal />

                        </div>
                    </div>
                    <div class="card">
                        <CardMedia
                            component="img"
                            height="194"
                            image={Lifting}
                            alt="Paella dish"
                        />
                        <div class="card-body">
                            <h5 class="card-title">Brow lamination + botox</h5>
                            <p class="card-text">
                                - Se realiza brow lamination acompañado de botox
                            </p>
                            <p class="card-text">
                                - Duracion : 30 Minutos
                            </p>
                            <p class="card-text">
                                - Valor : $15.000
                            </p>
                            <Modal />

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Eyebrows;