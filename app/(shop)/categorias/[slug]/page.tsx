import { ProductGrid } from "@/components/shop/ProductGrid";
import { MOCK_PRODUCTS } from "@/lib/mock-data";
import { Metadata } from 'next';

export function generateStaticParams() {
    const uniqueCategories = Array.from(new Set(MOCK_PRODUCTS.map(p => p.category_id)));
    return uniqueCategories.map((categoryId) => ({
        slug: categoryId,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const categoryProducts = MOCK_PRODUCTS.filter(p => p.category_id === slug);
    const categoryName = categoryProducts.length > 0 ? categoryProducts[0].category_name : slug.replace('-', ' ');

    return {
        title: `Gorras ${categoryName}`,
        description: `Explora nuestra colección de gorras ${categoryName}. Estilos premium con diseños urbanos exclusivos.`,
        openGraph: {
            title: `Colección ${categoryName} | Hondumajes`,
            description: `Explora nuestra colección de gorras ${categoryName}. Estilos premium con diseños urbanos.`,
            url: `https://hondumajes.com/categorias/${slug}`,
        }
    }
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const categoryProducts = MOCK_PRODUCTS.filter(p => p.category_id === slug);
    const categoryName = categoryProducts.length > 0 ? categoryProducts[0].category_name : slug.replace('-', ' ');

    return (
        <div className="container mx-auto px-4 md:px-8 py-32">
            <div className="mb-12 border-b border-gray-100 pb-8">
                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter capitalize">
                    {categoryName}
                </h1>
                <p className="text-gray-500 mt-4 text-lg">
                    Mostrando {categoryProducts.length} producto(s) en esta colección.
                </p>
            </div>

            <ProductGrid products={categoryProducts} />
        </div>
    )
}
