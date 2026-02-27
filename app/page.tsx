import { Hero } from "@/components/layout/Hero";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { MOCK_PRODUCTS } from "@/lib/mock-data";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="py-24 px-4 md:px-8 container mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-black uppercase tracking-tight">Tendencias</h2>
        </div>

        <ProductGrid products={MOCK_PRODUCTS} />
      </section>
    </>
  );
}
