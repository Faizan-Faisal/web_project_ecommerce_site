export default function Checkout() {
    return (
      <div className="p-10 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>
  
        <input className="w-full border p-2 mb-3" placeholder="Address" />
        <input className="w-full border p-2 mb-3" placeholder="Phone" />
  
        <button className="w-full bg-green-600 text-white py-2 rounded">
          Place Order
        </button>
      </div>
    );
  }
  