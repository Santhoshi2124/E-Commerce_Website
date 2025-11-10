import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition transform hover:scale-105">
      <img src={product.image} alt={product.name} className="h-48 w-full object-cover rounded-lg" />
      <h3 className="mt-3 text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-500">{product.description}</p>
      <p className="text-blue-600 font-bold mt-2">₹{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-3 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg w-full transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
