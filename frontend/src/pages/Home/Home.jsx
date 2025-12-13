// src/pages/Home/Home.jsx
import Banner from "../../components/Banner/Banner";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function Home() {
  const sampleProducts = [
    { id: 1, name: "Almonds", price: 1200, img: "/almonds.jpg" },
    { id: 2, name: "Cashews", price: 1500, img: "/cashews.jpg" },
  ];

  return (
    <div>
      <Banner />

      <h2 className="text-3xl font-bold text-center mt-10">Best Sellers</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {sampleProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
