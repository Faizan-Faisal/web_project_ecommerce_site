export default function Products() {
    const products = [
      { id: 1, name: "Almonds", price: 1200 },
      { id: 2, name: "Cashews", price: 1500 },
    ];
  
    return (
      <div className="p-10">
        <h1 className="text-3xl font-bold mb-6">Manage Products</h1>
  
        <table className="w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
  
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td className="border p-2">{p.name}</td>
                <td className="border p-2">Rs {p.price}</td>
                <td className="border p-2 space-x-3">
                  <button className="px-3 py-1 bg-blue-600 text-white rounded">
                    Edit
                  </button>
                  <button className="px-3 py-1 bg-red-600 text-white rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  