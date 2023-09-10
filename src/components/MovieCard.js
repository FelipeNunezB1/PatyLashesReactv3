import styles from "./MovieCard.module.css";

const MovieCard = ({ movie }) => {
  console.log(styles);
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.image; //en esta pagina deja las imagenes en 300 px concadenando la ubicacion en el json

  return (
      <li className={styles.movieCard}>
        <img
          className={styles.movieImage}
          src={imageUrl}
          alt={movie.title}
          width={230}
          height={345}
        />
        <div className="div"> {movie.title}</div>
      </li>
  );
};

export default MovieCard;
