import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="col-md-6 text-center">
      <h1>404</h1>
      <h2>UH OH! You're lost.</h2>
      <p>
        The page you are looking for does not exist. How you got here is a
        mystery. But you can click the button below to go back to the homepage.
      </p>
      <Link to="/" className="btn btn-outline-danger">
        HOME
      </Link>
    </div>
  );
};

export default NotFound;
