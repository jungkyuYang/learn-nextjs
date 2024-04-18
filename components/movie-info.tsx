import { API_URL } from "../app/constants";
import styles from "../styles/movie-info.module.css";

export async function getMovies(id: string) {
  //console.log(`Fetching videos:${Date.now()}`);
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw Error("hi");
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovies(id);
  console.log(movie);
  return (
    <div className={styles.container}>
      <img className={styles.poster} src={movie.poster_path}></img>
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>🎲{movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
