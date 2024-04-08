import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import css from "../MovieCast/MovieCast.module.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getMovieCredits } from "../../components/services/api";

const defaultImg =
  "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const resp = await getMovieCredits(movieId);
        setCast(resp);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
    console.log(getData());
  }, [movieId]);
  return (
    <div>
      {cast !== undefined && cast.length > 0
        ? cast.map((el) => (
            <ul className={css.list} key={el.id}>
              <li>
                <img
                  src={
                    el.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${el.profile_path}`
                      : defaultImg
                  }
                  width={250}
                  alt="poster"
                />
              </li>
              <p>{el.name}</p>
              <p>{el.character}</p>
            </ul>
          ))
        : "THERE ARE NOTHING"}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
    </div>
  );
};

export default MovieCast;
