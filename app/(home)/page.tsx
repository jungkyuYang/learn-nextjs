import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import { API_URL } from "../constants";

export const metadata = {
  title: "Home",
};

async function getMovie() {
  const response = await fetch(API_URL);
  return response.json();
}

export default async function page() {
  //await new Promise((resolve) => setTimeout(resolve, 10000));
  const movies = await getMovie();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
