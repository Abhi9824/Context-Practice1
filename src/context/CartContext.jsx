import { createContext, useState } from "react";

export const CartContext = createContext();

const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Headphones", price: 150 },
];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([products]);

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
