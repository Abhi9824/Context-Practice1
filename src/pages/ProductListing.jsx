import { products, useCart } from "../context/CartContext";

const ProductListing = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 text-primary fw-bold">Our Products</h2>
      <ul className="list-group shadow-sm rounded">
        {products.map((product) => {
          const inCart = cart.some((item) => item.id === product.id);

          return (
            <li
              key={product.id}
              className="list-group-item d-flex justify-content-between align-items-center py-3"
            >
              <span className="fw-semibold">
                {product.name} - <span className="text-success">${product.price}</span>
              </span>
              <button
                className={`btn ${inCart ? "btn-danger" : "btn-primary"} btn-sm fw-bold px-3`}
                onClick={() =>
                  inCart ? removeFromCart(product.id) : addToCart(product)
                }
              >
                {inCart ? "Remove" : "Add"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductListing;
