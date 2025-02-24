import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartStatus = () => {
  const { cart } = useContext(CartContext);
  return <span className="ms-3">🛒 {cart.length}</span>;
};

export default CartStatus;
