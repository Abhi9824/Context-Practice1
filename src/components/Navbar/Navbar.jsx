import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary px-4">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand fs-4 fw-bold">
          Shop
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link fs-5">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link fs-5 position-relative">
                Cart <span className="badge bg-danger ms-1">{cart.length}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
