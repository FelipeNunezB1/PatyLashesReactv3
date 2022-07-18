/* import companyData from "./eyescopy.js"; */
import MovieCard from "./MovieCard";
import styles from './MovieGrid.module.css'


export default function MoviesGrid() {
  return (
    <ul className={styles.movieGrid}>
      {/* {companyData.map((movie) => (
        <MovieCard key={movie.id} movie={movie}/>
      ))} */}
    </ul>
  );
}
