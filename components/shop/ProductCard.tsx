"use client"

import Image from "next/image"
import Link from "next/link"
import { Product } from "@/types"
import { useCartStore } from "@/store/useCartStore"
import { ShoppingBag } from "lucide-react"

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const addItem = useCartStore((state) => state.addItem)

    return (
        <div className="group flex flex-col cursor-pointer">
            <Link href={`/gorras/${product.id}`} className="block relative w-full aspect-square bg-[#F5F5F5] rounded-sm overflow-hidden mb-4">
                {}
                <Image
                    src={product.images[0] || "/placeholder.jpg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                {}
                {product.images[1] && (
                    <Image
                        src={product.images[1]}
                        alt={`${product.name} Vista Alternativa`}
                        fill
                        className="object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                )}
            </Link>

            <div className="flex justify-between items-start gap-4">
                <div>
                    <h3 className="font-bold text-base leading-tight">
                        <Link href={`/gorras/${product.id}`} className="hover:underline decoration-2 underline-offset-4">
                            {product.name}
                        </Link>
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">{product.category_name || "Gorra"}</p>
                </div>
                <p className="font-bold whitespace-nowrap">${product.price.toFixed(2)}</p>
            </div>

            <div className="mt-4 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <button
                    onClick={(e) => {
                        e.preventDefault()
                        addItem(product)
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-black text-white font-bold uppercase tracking-wider py-3 text-sm hover:bg-gray-800 transition-colors"
                >
                    <ShoppingBag className="w-4 h-4" />
                    Añadir a la bolsa
                </button>
            </div>
        </div>
    )
}
