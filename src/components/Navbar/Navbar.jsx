import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar bg-light p-3 d-flex justify-content-between">
      <Link to="/" className="fs-4 fw-bold text-dark">
        Shop
      </Link>
      <div>
        <Link to="/" className="me-3">
          Products
        </Link>
        <Link to="/cart">Cart ({cart.length})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
