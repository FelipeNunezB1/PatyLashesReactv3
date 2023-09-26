import styles from './MovieGrid.module.css'
import CardINfooCard from "./CardINfooCard";


const Reserv = ({ reservas, cardinfo, titulo, handleDelete, Precio, descripcion }) => {
    return (
        <ul className={styles.movieGrid}>
            {cardinfo.map((cardinfo) => (
                <CardINfooCard key={cardinfo} cardinfo={cardinfo} />
            ))}
        </ul>
    );
}

export default Reserv;