"use client"

import { useState } from "react"
import Image from "next/image"
import { ShoppingBag, ChevronRight } from "lucide-react"
import { useCartStore } from "@/store/useCartStore"
import Link from "next/link"
import { Product } from "@/types"

export function ProductClient({ product }: { product: Product }) {
    const addItem = useCartStore((state) => state.addItem)
    const [activeImage, setActiveImage] = useState(0)

    return (
        <div className="container mx-auto px-4 md:px-8 py-32">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-8 font-medium">
                <Link href="/" className="hover:text-black transition-colors">Inicio</Link>
                <ChevronRight className="w-4 h-4" />
                <Link href={`/categorias/${product.category_id}`} className="hover:text-black transition-colors">{product.category_name}</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-black">{product.name}</span>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                {/* Product Images */}
                <div className="lg:w-3/5 flex flex-col gap-4">
                    <div className="relative aspect-square md:aspect-[4/3] bg-[#F5F5F5] w-full overflow-hidden">
                        <Image
                            src={product.images[activeImage] || '/placeholder.jpg'}
                            alt={product.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {product.images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveImage(idx)}
                                className={`relative aspect-square bg-[#F5F5F5] overflow-hidden ${activeImage === idx ? 'ring-2 ring-black' : 'hover:opacity-80'}`}
                            >
                                <Image src={img} alt={`Thumbnail ${idx}`} fill className="object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div className="lg:w-2/5 flex flex-col pt-4 lg:sticky lg:top-32 h-fit">
                    <h1 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-none mb-4">{product.name}</h1>
                    <p className="text-2xl font-bold mb-8">${product.price.toFixed(2)}</p>

                    <p className="text-gray-600 mb-10 text-lg leading-relaxed">{product.description}</p>

                    <div className="space-y-6 mb-10">
                        <div className="flex justify-between py-4 border-b border-gray-200">
                            <span className="text-gray-500 font-medium">Material</span>
                            <span className="font-bold">{product.material || "Algodón"}</span>
                        </div>
                        <div className="flex justify-between py-4 border-b border-gray-200">
                            <span className="text-gray-500 font-medium">Cierre</span>
                            <span className="font-bold">{product.closure_type || "Ajustable"}</span>
                        </div>
                    </div>

                    <button
                        onClick={() => addItem(product)}
                        className="w-full bg-black text-white font-bold uppercase tracking-wider py-5 flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors text-lg"
                    >
                        <ShoppingBag className="w-6 h-6" />
                        Añadir a la Bolsa
                    </button>
                </div>
            </div>
        </div>
    )
}
