import ResponsiveAppBar from '../components/navbar/Nav'
import '../assetsimagescss/css/Eyebrows.css'
import React from "react";
import SwipeableTextMobileStepper from '../components/ImgHome'
import Footer from '../components/Footer/Footer';



const Home = () => {

    return (
        <div className="boody1">
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
            <Footer />
        </div>
    )
}

export default Home;