import styles from "../assetsimagescss/css/Eyebrows.css";

import foto1 from '../assetsimagescss/images/foto1.jpg'


const MovieCard = ({ cardinfo }) => {
  console.log(styles);

  return (
    <div className="card">
      <li className={styles.movieCard}>
        <img
          className={styles.movieImage}
          src={foto1}
          alt={cardinfo.title}
          width={230}
          height={230}
        />
        <p>titulo: {cardinfo.titulo}</p>
        <p>descripcion: {cardinfo.descripcion}</p>
        <p>Precio: {cardinfo.Precio}</p>
        <div className="div"> {cardinfo.title}</div>
      </li>
    </div>

  );
};

export default MovieCard;
