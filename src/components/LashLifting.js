import ResponsiveAppBar from './Nav'
import './Eyebrows.css'
import CardMedia from '@mui/material/CardMedia';
import React from "react";
import foto1 from '../imagenes/foto1.jpg'
import Modal from '../components/Modal'


const LashLifting = () => {

    return (
        <div className="contenedor">
            <ResponsiveAppBar />
            <div className="titulo-card-extension" id="Cejas">
                <h2>Lash Lifting</h2>
            </div>

            <div className="contenedorFondo">
                <div className="container-cejas">
                    <div className="card">
                        <CardMedia
                            component="img"
                            height="194"
                            image={foto1}
                            alt="Paella dish"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Perfilado de cejas</h5>
                            <p className="card-text">
                                -Perfilado normal de cejas
                            </p>
                            <p className="card-text">
                                - Duracion : 1:30 Hrs
                            </p>
                            <p className="card-text">
                                - Valor : $5.000
                            </p>
                            <Modal />
                        </div>
                    </div>
                    <div className="card">
                        <CardMedia
                            component="img"
                            height="194"
                            image={foto1}
                            alt="Paella dish"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Visagismo de cejas</h5>
                            <p className="card-text">
                                - Visajismo normal de cejas
                            </p>
                            <p className="card-text">
                                - Duracion : 1 Hora
                            </p>
                            <p className="card-text">
                                - Valor : $10.000
                            </p>
                            <Modal />
                        </div>
                    </div>
                    <div className="card">
                        <CardMedia
                            component="img"
                            height="194"
                            image={foto1}
                            alt="Paella dish"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Visagismo y Henna</h5>
                            <p className="card-text">
                                - Visajismo en conjungo con Henna
                            </p>
                            <p className="card-text">
                                - Duracion : 30 Minutos
                            </p>
                            <p className="card-text">
                                - Valor : $12.0000
                            </p>
                            <Modal />
                        </div>
                    </div>
                    <div className="card">
                        <CardMedia
                            component="img"
                            height="194"
                            image={foto1}
                            alt="Paella dish"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Fijacion de cejas</h5>
                            <p className="card-text">
                                - Se realiza fijacion de cejas por un tiempo estimado
                            </p>
                            <p className="card-text">
                                - Duracion : 30 Minutos
                            </p>
                            <p className="card-text">
                                - Valor : $12.000
                            </p>
                            <Modal />
                        </div>
                    </div>
                    <div className="card">
                        <CardMedia
                            component="img"
                            height="194"
                            image={foto1}
                            alt="Paella dish"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Brow lamination + botox</h5>
                            <p className="card-text">
                                - Se realiza brow lamination acompañado de botox
                            </p>
                            <p className="card-text">
                                - Duracion : 30 Minutos
                            </p>
                            <p className="card-text">
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

export default LashLifting;