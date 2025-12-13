import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Backend will be added later
    navigate("/admin/dashboard");
  };

  return (
    <div className="max-w-md mx-auto mt-20 border p-6 rounded shadow">
      <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>

      <input
        type="text"
        placeholder="Admin Email"
        className="w-full border px-3 py-2 mb-4 rounded"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full border px-3 py-2 mb-4 rounded"
      />

      <button
        onClick={handleLogin}
        className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
      >
        Login
      </button>
    </div>
  );
}
