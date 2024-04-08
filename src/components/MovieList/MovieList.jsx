import { Link, useLocation } from "react-router-dom";

import css from "../MovieList/MovieList.module.css";
const MovieList = ({ movie }) => {
  const location = useLocation();

  return (
    <div>
      <ul className={css.list}>
        {movie.map((el) => (
          <li key={el.id}>
            <Link to={`/movies/${el.id}`} state={location}>
              {el.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
