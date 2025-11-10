import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart 🛒</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid gap-4">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center bg-white p-4 rounded-xl shadow">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">₹{item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded-lg"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right mt-4 font-bold text-lg">
            Total: ₹{total}
          </div>
        </div>
      )}
    </div>
  );
}
