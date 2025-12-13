import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-green-600">
        DryFruits Store
      </Link>

      <div className="space-x-6">
        <Link to="/" className="hover:text-green-600">Home</Link>
        <Link to="/products" className="hover:text-green-600">Products</Link>
        <Link to="/cart" className="hover:text-green-600">Cart</Link>
        <Link to="/login" className="hover:text-green-600">Login</Link>
        <Link to="/signup" className="hover:text-green-600">Signup</Link>

        {/* Admin */}
        <Link
          to="/admin/login"
          className="bg-black text-white px-3 py-1 rounded"
        >
          Admin
        </Link>
      </div>
    </nav>
  );
}
