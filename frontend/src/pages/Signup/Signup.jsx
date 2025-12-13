// src/pages/Signup/Signup.jsx
export default function Signup() {
    return (
      <div className="max-w-md mx-auto mt-10 border p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>
  
        <input type="text" placeholder="Name" className="w-full border px-3 py-2 mb-3 rounded" />
        <input type="email" placeholder="Email" className="w-full border px-3 py-2 mb-3 rounded" />
        <input type="password" placeholder="Password" className="w-full border px-3 py-2 mb-3 rounded" />
  
        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Sign Up
        </button>
      </div>
    );
  }
  