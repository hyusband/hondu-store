"use client"

import { useCartStore } from "@/store/useCartStore"
import Link from "next/link"
import { ChevronRight, ArrowLeft } from "lucide-react"

export default function CheckoutPage() {
    const { items, totalPrice } = useCartStore()

    if (items.length === 0) {
        return (
            <div className="container mx-auto px-4 py-32 text-center min-h-[60vh] flex flex-col items-center justify-center">
                <h1 className="text-3xl font-black uppercase mb-4">Tu bolsa está vacía</h1>
                <p className="text-gray-500 mb-8">Agrega algunas gorras increíbles a tu carrito para proceder al pago.</p>
                <Link
                    href="/"
                    className="bg-black text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors"
                >
                    Volver a la tienda
                </Link>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 md:px-8 py-16">
            {}
            <div className="flex items-center gap-4 mb-12">
                <Link href="/" className="flex items-center text-sm font-bold uppercase tracking-wider text-gray-500 hover:text-black transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Volver
                </Link>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
                {}
                <div className="lg:w-2/3">
                    <h2 className="text-2xl font-black uppercase tracking-wide mb-8">Información de Envío</h2>

                    <form className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-bold mb-2">Nombre</label>
                                <input type="text" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-black" placeholder="Tu nombre" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">Apellidos</label>
                                <input type="text" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-black" placeholder="Tus apellidos" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-2">Dirección</label>
                            <input type="text" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-black" placeholder="Calle, número, apto." />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-bold mb-2">Ciudad</label>
                                <input type="text" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-black" placeholder="Tu ciudad" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">Código Postal</label>
                                <input type="text" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-black" placeholder="Ej. 28001" />
                            </div>
                        </div>

                        <h2 className="text-2xl font-black uppercase tracking-wide mt-12 mb-8">Pago (Simulación)</h2>
                        <div className="bg-gray-50 p-6 border border-gray-200 text-center">
                            <p className="text-gray-500 mb-4">Aquí se integrará Stripe Checkout Elements.</p>
                            <button
                                type="button"
                                className="w-full bg-black text-white font-bold uppercase tracking-wider py-4 hover:bg-gray-800 transition-colors"
                                onClick={() => alert("Simulando pago de Stripe...")}
                            >
                                Pagar ${totalPrice().toFixed(2)}
                            </button>
                        </div>
                    </form>
                </div>

                {}
                <div className="lg:w-1/3">
                    <div className="bg-gray-50 p-6 border border-gray-100 sticky top-32">
                        <h2 className="text-xl font-black uppercase tracking-wide mb-6">Resumen del Pedido</h2>

                        <div className="flex flex-col gap-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
                            {items.map(item => (
                                <div key={item.id} className="flex justify-between items-center py-2 border-b border-gray-200/50 last:border-0">
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-sm">{item.name}</span>
                                        <span className="text-xs text-gray-500">Cant: {item.quantity}</span>
                                    </div>
                                    <span className="font-bold whitespace-nowrap">${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-3 mb-6 border-t border-gray-200 pt-4">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span>${totalPrice().toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Envío (Standard)</span>
                                <span>Gratis</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center border-t border-black pt-4">
                            <span className="font-black uppercase">Total</span>
                            <span className="text-2xl font-black">${totalPrice().toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
