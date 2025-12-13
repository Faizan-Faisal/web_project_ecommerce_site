import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="max-w-md mx-auto mt-10 border p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

      <input className="w-full border px-3 py-2 mb-3 rounded" placeholder="Name" />
      <input className="w-full border px-3 py-2 mb-3 rounded" placeholder="Email" />
      <input className="w-full border px-3 py-2 mb-3 rounded" placeholder="Password" />

      <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
        Sign Up
      </button>

      <p className="text-center mt-4 text-sm">
        Already have an account?{" "}
        <Link to="/login" className="text-green-600 font-semibold">
          Login
        </Link>
      </p>
    </div>
  );
}
