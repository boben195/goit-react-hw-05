import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import css from "../MovieReviews/MovieReviews.module.css";

import { useState, useEffect } from "react";
import { getMovieReviews } from "../services/api";
import { useParams } from "react-router-dom";

const MovieReviews = () => {
  const [review, setReview] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const resp = await getMovieReviews(movieId);
        setReview(resp);
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
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {review && (
        <ul className={css.list}>
          {review.map((el) => (
            <li key={el.id}>
              <p className={css.author}>{el.author}</p>
              <p>{el.content}</p>
            </li>
          ))}
        </ul>
      )}
      {!review.lenght === 0 && <p>THERE ARE NOT ANY REVIEW!!!</p>}
    </div>
  );
};

export default MovieReviews;
