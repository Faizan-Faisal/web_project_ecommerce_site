export default function AdminLogin() {
    return (
      <div className="max-w-md mx-auto mt-20 border p-6 rounded">
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
  
        <input className="w-full border p-2 mb-3" placeholder="Email" />
        <input className="w-full border p-2 mb-3" placeholder="Password" />
  
        <button className="w-full bg-black text-white py-2 rounded">
          Login
        </button>
      </div>
    );
  }
  