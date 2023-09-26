import ResponsiveAppBar from '../components/navbar/Nav'
import '../assetsimagescss/css/Eyebrows.css'
import React from "react";
import Footer from '../components/Footer/Footer';



const QuienesSomos = () => {

    return (
        <div className="boody">
            <ResponsiveAppBar />
            <div className="top">
                <div className='titulo-container'>
                    <h2>Quienes somos</h2>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default QuienesSomos;