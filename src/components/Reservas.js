import Reserv from './Reserv'
import UseFetch from './UseFetch'
import ResponsiveAppBar from './Nav'
import './Eyebrows.css'


const Reservas = () => {
    const { data, isPending, error } = UseFetch('http://localhost:8000/reservas')

    return (
        <div className="contenedor">
            <ResponsiveAppBar />
            <div className="top">
                <div className="titulo-card-extension" id="Cejas">
                    <h2>Reservas</h2>
                </div>
                <div className="Reservas">
                    {error && <div>{error}</div>}
                    {isPending && <div>Loading...</div>}
                    {data && <Reserv reservas={data} title="Reservas" />}
                </div>
            </div>
        </div>

    );
}

export default Reservas;