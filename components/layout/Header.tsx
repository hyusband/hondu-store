"use client"

import Link from "next/link"
import { ShoppingBag, Search, Heart, User, Menu, X } from "lucide-react"
import { useCartStore } from "@/store/useCartStore"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const cartItemsCount = useCartStore((state) => state.totalItems())
    const setIsOpen = useCartStore((state) => state.setIsOpen)

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
    }, [isMobileMenuOpen])

    useEffect(() => {
        setMounted(true)
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className={cn(
            "fixed top-0 w-full z-50 transition-all duration-300",
            isScrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-100 py-4" : "bg-transparent py-6"
        )}>
            <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
                { }
                <Link href="/" className="text-2xl font-black tracking-tighter uppercase z-10">
                    Hondumajes
                </Link>

                { }
                <nav className="hidden md:flex items-center gap-8 font-medium text-sm tracking-wide">
                    <Link href="/categorias/coleccion-urbana" className="hover:text-gray-500 transition-colors">Urbana</Link>
                    <Link href="/categorias/deportes" className="hover:text-gray-500 transition-colors">Deportes</Link>
                    <Link href="/categorias/limited" className="hover:text-gray-500 transition-colors">Edición Limitada</Link>
                </nav>

                { }
                <div className="flex items-center gap-5 z-10">
                    <button aria-label="Search" className="hover:opacity-70 transition-opacity">
                        <Search className="w-5 h-5" />
                    </button>
                    <button aria-label="Favorites" className="hover:opacity-70 transition-opacity hidden sm:block">
                        <Heart className="w-5 h-5" />
                    </button>
                    <button aria-label="Account" className="hover:opacity-70 transition-opacity hidden sm:block">
                        <User className="w-5 h-5" />
                    </button>
                    <button
                        aria-label="Cart"
                        className="hover:opacity-70 transition-opacity relative"
                        onClick={() => setIsOpen(true)}
                    >
                        <ShoppingBag className="w-5 h-5" />
                        {mounted && cartItemsCount > 0 && (
                            <span className="absolute -top-1 -right-2 bg-black text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                                {cartItemsCount}
                            </span>
                        )}
                    </button>
                    <button
                        aria-label="Menu"
                        className="hover:opacity-70 transition-opacity md:hidden ml-2"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu className="w-6 h-6 text-black" />
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={cn(
                    "fixed inset-0 z-[100] bg-white flex flex-col pt-24 px-8 md:hidden transition-transform duration-300 ease-in-out",
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}>
                    <button
                        aria-label="Close Menu"
                        className="absolute top-6 right-4 p-2 hover:opacity-70"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <X className="w-8 h-8 text-black" />
                    </button>
                    <nav className="flex flex-col gap-8 font-black text-4xl tracking-tighter uppercase mt-12">
                        <Link href="/shop" onClick={() => setIsMobileMenuOpen(false)}>Catálogo</Link>
                        <Link href="/categorias/coleccion-urbana" onClick={() => setIsMobileMenuOpen(false)}>Urbana</Link>
                        <Link href="/categorias/deportes" onClick={() => setIsMobileMenuOpen(false)}>Deportes</Link>
                        <Link href="/categorias/limited" onClick={() => setIsMobileMenuOpen(false)}>Limitada</Link>
                    </nav>
                    <div className="mt-auto mb-12 flex flex-col gap-6 text-xl font-medium text-gray-500">
                        <Link href="/nosotros" className="hover:text-black transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Nosotros</Link>
                        <Link href="/ayuda/contacto" className="hover:text-black transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contacto</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
