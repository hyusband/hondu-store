import { Product } from "@/types"
import { ProductCard } from "./ProductCard"

interface ProductGridProps {
    products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
    if (!products || products.length === 0) {
        return (
            <div className="py-24 text-center">
                <p className="text-gray-500 text-lg uppercase tracking-wider font-semibold">No se encontraron productos.</p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 sm:gap-x-6 gap-y-8 sm:gap-y-12">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}
