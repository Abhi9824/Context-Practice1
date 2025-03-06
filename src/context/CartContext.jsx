import { useContext } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Headphones", price: 150 },
  { id: 4, name: "Bluetooth", price: 250 },
  { id: 5, name: "Speaker", price: 1500 },
  { id: 6, name: "radio", price: 450 },
];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((product) => product.id !== productId));
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
