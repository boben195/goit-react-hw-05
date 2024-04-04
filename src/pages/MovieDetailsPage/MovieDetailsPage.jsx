import { getMovieById } from "../../components/services/api";
import { Suspense, useState } from "react";
import {
  useParams,
  NavLink,
  Link,
  Outlet,
  useLocation,
} from "react-router-dom";

import css from "../MovieDetailsPage/MovieDetailsPage.module.css";

import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import clsx from "clsx";
import { useEffect } from "react";

const getNavLinkClass = ({ isActive }) =>
  clsx(css.headerLink, {
    [css.active]: isActive,
  });

const MovieDetailsPage = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? "/";

  const { movieId } = useParams();

  /*3 main states************* */
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  /*3 main states************* */
  const defaultImg =
    "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";
  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const resp = await getMovieById(movieId);
        setMovie(resp);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [movieId]);

  return (
    <div>
      <Link to={backLink}>GO BACK</Link>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {movie && (
        <div>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : defaultImg
            }
            width={250}
            alt="poster"
          />
          <h2>{movie.title}</h2>
          <p>USER SCORE: {movie.vote_average}</p>
          <h3>OVERVIEW</h3>
          <p>{movie.overview}</p>
          <h3>GENRES</h3>
          {/* <ul>
            {movie.map((el) => (
              <li key={el.id}>{el.name}</li>
            ))}
          </ul> */}
        </div>
      )}
      <div>
        <h3>ADDITIONAL INFORMATION</h3>
        <NavLink className={getNavLinkClass} to="cast">
          CAST
        </NavLink>
        <NavLink className={getNavLinkClass} to="reviews">
          REVIEWS
        </NavLink>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
