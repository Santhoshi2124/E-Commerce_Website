import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext);
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <Link to="/" className="text-2xl font-bold tracking-wide">ShopSmart</Link>
      <Link to="/cart" className="flex items-center space-x-2">
        <span className="text-lg">🛒</span>
        <span className="text-lg">Cart ({cart.length})</span>
      </Link>
    </nav>
  );
}
