import { useCart } from "../../context/CartContext";

const CartStatus = () => {
  const { cart } = useCart();
  return <span className="ms-3">🛒 {cart.length}</span>;
};

export default CartStatus;
