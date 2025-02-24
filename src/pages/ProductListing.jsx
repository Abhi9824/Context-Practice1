import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Headphones", price: 150 },
];

const ProductListing = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div className="container mt-4">
      <h2>Products</h2>
      <ul className="list-group">
        {products.map((product) => {
          const inCart = cart.some((item) => item.id === product.id);

          return (
            <li
              key={product.id}
              className="list-group-item d-flex justify-content-between"
            >
              <span>
                {product.name} - ${product.price}
              </span>
              <button
                className={`btn ${inCart ? "btn-danger" : "btn-primary"}`}
                onClick={() =>
                  inCart ? removeFromCart(product.id) : addToCart(product)
                }
              >
                {inCart ? "Remove from Cart" : "Add to Cart"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductListing;
