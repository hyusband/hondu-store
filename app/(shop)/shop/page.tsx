import { ProductGrid } from "@/components/shop/ProductGrid";
import { MOCK_PRODUCTS } from "@/lib/mock-data";

export default function ShopPage() {
    return (
        <div className="container mx-auto px-4 md:px-8 py-32">
            <div className="mb-12 border-b border-gray-100 pb-8">
                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                    TODA LA COLECCIÓN
                </h1>
                <p className="text-gray-500 mt-4 text-lg">
                    Mostrando todos nuestros {MOCK_PRODUCTS.length} productos disponibles.
                </p>
            </div>

            <ProductGrid products={MOCK_PRODUCTS} />
        </div>
    )
}
