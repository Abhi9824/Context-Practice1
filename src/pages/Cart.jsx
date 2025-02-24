import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="container mt-4">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="list-group">
          {cart.map((product, index) => (
            <li
              key={product.id}
              className="list-group-item d-flex justify-content-between"
            >
              <span>
                {product.name} - ${product.price}
              </span>
              <button
                className="btn btn-danger"
                onClick={() => removeFromCart(product.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
