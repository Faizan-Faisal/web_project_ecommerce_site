import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
        <Link to="/admin/add-product" className="admin-card">
          ➕ Add Product
        </Link>

        <Link to="/admin/products" className="admin-card">
          📦 Manage Products
        </Link>

        <Link to="/admin/orders" className="admin-card">
          🧾 Orders
        </Link>

        <Link to="/admin/users" className="admin-card">
          👥 Users
        </Link>
      </div>
    </div>
  );
}
