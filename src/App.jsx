import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { CartProvider } from "./context/CartContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ProductListing from "./pages/ProductListing";
import Cart from "./pages/Cart";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
