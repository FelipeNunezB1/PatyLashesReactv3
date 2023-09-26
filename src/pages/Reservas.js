import Reserv from '../components/Reserv'
import UseFetch from '../components/UseFetch'
import ResponsiveAppBar from '../components/navbar/Nav'
import '../assetsimagescss/css/Eyebrows.css'
import Footer from '../components/Footer/Footer';



const Reservas = () => {
    const { data, isPending, error } = UseFetch('http://localhost:8000/reservas')

    return (
        <div className="boody">
            <ResponsiveAppBar />
            <div className="top">
                <div className="titulo-container" id="Cejas">
                    <h2>Reservas</h2>
                </div>
                <div className="Reservas">
                    {error && <div>{error}</div>}
                    {isPending && <div>Loading...</div>}
                    {data && <Reserv reservas={data} title="Reservas" />}
                </div>
            </div>
            <Footer />
        </div>

    );
}

export default Reservas;