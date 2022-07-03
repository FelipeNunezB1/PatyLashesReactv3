import ResponsiveAppBar from './Nav'
import './Eyebrows.css'
import React from "react";
import SwipeableTextMobileStepper from './ImgHome'



const Home = () => {

    return (
        <div className="vacio">
            <ResponsiveAppBar />
            {/*   <!-- Titulo y carrusel de imagenes--> */}
            <div className="titulo-card-estetica">
                <h2>Centro de estética y belleza</h2>
            </div>
            <div className="container2">
                <SwipeableTextMobileStepper />
            </div>

            {/*    <!-- div con mensaje de bienvenida--> */}
            <div className="container1">
                <div className="card-texto-index">
                    <div className="card-body">
                        Bienvenidas al centro estético “Paty Lashes” el cual entrega diferentes servicios para lo que
                        necesites,
                        tales como Extensión de pestañas efecto natural, efecto mascara, lifting laminado y ondulados.
                        ¡Ubícanos
                        en la ciudad de Rancagua!
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;