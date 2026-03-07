import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          MyStore
        </Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="/cart" className="navbar-link">
            Cart
          </Link>
        </div>
        <div className="navbar-auth">
          <Link to="/auth" className="btn btn-primary">
            Login
          </Link>
          <Link to="/auth" className="btn btn-secondary">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

