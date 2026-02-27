import { Metadata } from 'next'
import { MOCK_PRODUCTS } from "@/lib/mock-data"
import { notFound } from 'next/navigation'
import { ProductClient } from './ProductClient'

export function generateStaticParams() {
    return MOCK_PRODUCTS.map((product) => ({
        slug: product.id,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const product = MOCK_PRODUCTS.find(p => p.id === slug)

    if (!product) {
        return {
            title: 'Producto no encontrado'
        }
    }

    return {
        title: product.name,
        description: product.description.slice(0, 160),
        openGraph: {
            title: `${product.name} | Hondumajes`,
            description: product.description.slice(0, 160),
            url: `https://hondumajes.com/gorras/${product.id}`,
            type: 'website',
            images: [
                {
                    url: product.images[0],
                    width: 800,
                    height: 800,
                    alt: product.name,
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${product.name} | Hondumajes`,
            description: product.description.slice(0, 160),
            images: [product.images[0]],
        }
    }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const product = MOCK_PRODUCTS.find(p => p.id === slug)

    if (!product) {
        notFound()
    }

    return <ProductClient product={product} />
}
