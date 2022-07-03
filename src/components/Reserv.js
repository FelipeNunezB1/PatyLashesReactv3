import Divider from '@mui/material/Divider';


const Reserv = ({ reservas, name, handleDelete, hora, profesional }) => {
    return (
        <div className="reservas-list">
            <h2>{name}</h2>
            {reservas.map((reserva) => (
                <div className="reservas-previw">
                    <p>Nombre paciente: {reserva.name}</p>
                    <p>Hora: {reserva.hora}</p>
                    <p>Estilista: {reserva.profesional}</p>
                    <Divider style={{ background: 'white' }} />
                </div>
            ))}
        </div>


    );
}

export default Reserv;