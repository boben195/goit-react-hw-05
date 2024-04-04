import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movie }) => {
  const location = useLocation();

  return (
    <div>
      <ul>
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
