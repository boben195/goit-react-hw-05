import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <p>404!!! NO FOUND!!!</p>
      <Link to="/">GET BACK</Link>
    </div>
  );
};

export default NotFoundPage;
