export default function AddProduct() {
    return (
      <div className="p-10 max-w-xl">
        <h1 className="text-3xl font-bold mb-4">Add Product</h1>
  
        <input className="w-full border p-2 mb-3" placeholder="Product Name" />
        <input className="w-full border p-2 mb-3" placeholder="Price" />
        <button className="bg-green-600 text-white px-6 py-2 rounded">
          Save
        </button>
      </div>
    );
  }
  