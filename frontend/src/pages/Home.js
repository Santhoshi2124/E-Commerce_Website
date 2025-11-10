import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data";

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("products"));
    if (stored && stored.length > 0) setItems(stored);
    else {
      localStorage.setItem("products", JSON.stringify(products));
      setItems(products);
    }
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
