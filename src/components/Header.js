import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="d-flex align-items-center flex-column">
      <h1>React router tutorial</h1>
      <ul className="nav-bar nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/profile">
            Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/postid">
            Post
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
