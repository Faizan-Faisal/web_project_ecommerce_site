import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Product Details</h1>
      <p className="text-gray-600">Product ID: {id}</p>

      <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
        Add to Cart
      </button>
    </div>
  );
}
