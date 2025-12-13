// src/components/ProductCard/ProductCard.jsx
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="border rounded-lg shadow-md p-4 hover:shadow-xl transition"
    >
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-xl font-semibold mt-3">{product.name}</h3>
      <p className="text-green-600 text-lg font-bold mt-1">
        Rs {product.price}
      </p>
    </Link>
  );
}
