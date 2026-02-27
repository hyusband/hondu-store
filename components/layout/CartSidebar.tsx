"use client"

import { useCartStore } from "@/store/useCartStore"
import { X, Minus, Plus, ShoppingBag } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export function CartSidebar() {
    const { isOpen, setIsOpen, items, removeItem, updateQuantity, totalPrice } = useCartStore()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <>
            {}
            <div
                className={cn(
                    "fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300",
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
                onClick={() => setIsOpen(false)}
            />

            {}
            <div
                className={cn(
                    "fixed top-0 right-0 w-full md:w-[450px] h-full bg-white z-[70] transform transition-transform duration-300 ease-in-out flex flex-col shadow-2xl",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                {/* Header */}
                <div className="px-6 py-6 border-b border-gray-100 flex items-center justify-between">
                    <h2 className="text-xl font-bold uppercase tracking-wide">Tu Bolsa</h2>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {}
                <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-gray-500">
                            <ShoppingBag className="w-16 h-16 mb-4 opacity-20" />
                            <p className="font-medium text-lg uppercase tracking-wide">Tu bolsa está vacía</p>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="mt-6 border-b border-black text-black font-semibold hover:text-gray-600 transition-colors"
                            >
                                Continuar Comprando
                            </button>
                        </div>
                    ) : (
                        items.map((item) => (
                            <div key={item.id} className="flex gap-4 border-b border-gray-100 pb-6 pr-2">
                                <div className="relative w-24 h-24 bg-gray-100 shrink-0">
                                    <Image
                                        src={item.images[0] || "/placeholder.jpg"}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start">
                                            <h3 className="font-semibold text-sm line-clamp-2 pr-4">{item.name}</h3>
                                            <p className="font-bold whitespace-nowrap">${item.price.toFixed(2)}</p>
                                        </div>
                                        <p className="text-sm text-gray-500 mt-1">{item.category_name}</p>
                                    </div>

                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex items-center border border-gray-300">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="px-3 py-1 hover:bg-gray-100 transition-colors"
                                            >
                                                <Minus className="w-4 h-4" />
                                            </button>
                                            <span className="px-4 py-1 text-sm font-medium border-x border-gray-300 min-w-[2.5rem] text-center">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="px-3 py-1 hover:bg-gray-100 transition-colors"
                                            >
                                                <Plus className="w-4 h-4" />
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => removeItem(item.id)}
                                            className="text-sm text-gray-500 underline hover:text-black transition-colors"
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {}
                {items.length > 0 && (
                    <div className="p-6 border-t border-gray-100 bg-gray-50">
                        <div className="flex justify-between items-center mb-6">
                            <span className="font-semibold uppercase text-sm">Total Estimado</span>
                            <span className="font-bold text-xl">${totalPrice().toFixed(2)}</span>
                        </div>
                        <Link
                            href="/checkout"
                            onClick={() => setIsOpen(false)}
                            className="w-full block text-center bg-black text-white font-bold py-4 uppercase tracking-wider hover:bg-gray-800 transition-colors"
                        >
                            Pasar por Caja
                        </Link>
                    </div>
                )}
            </div>
        </>
    )
}
