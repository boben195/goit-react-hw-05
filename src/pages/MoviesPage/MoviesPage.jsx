import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";

import { useEffect, useState } from "react";
import { getSearchMovie } from "../../components/services/api";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  /*3 main states************* */
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  /*3 main states************* */

  const [params, setParams] = useSearchParams();
  const searchFilm = params.get("query" ?? "");

  const [query, setQuery] = useState("");
  const onAdd = (value) => {
    setQuery(value);
    params.set("query", value);
    setParams(params);
  };
  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const resp = await getSearchMovie(searchFilm);
        setMovie(resp);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [searchFilm]);

  return (
    <div>
      <SearchBar onAdd={onAdd} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {movie && <MovieList movie={movie} />}
    </div>
  );
};

export default MoviesPage;
