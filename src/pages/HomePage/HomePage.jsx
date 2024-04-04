import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MovieList from "../../components/MovieList/MovieList";

import css from "../HomePage/HomePage.module.css";

import { getTrendingMovie } from "../../components/services/api";

import { useEffect, useState } from "react";

const HomePage = () => {
  /*3 main states************* */
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  /*3 main states************* */

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const resp = await getTrendingMovie();
        setMovie(resp);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <div className={css.box}>
      <h2>Trending Today</h2>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <MovieList movie={movie} />
    </div>
  );
};

export default HomePage;
