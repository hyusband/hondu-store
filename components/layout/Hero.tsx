import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-gray-100">
            {}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533827432537-70133748f5c8?q=80&w=2070&auto=format&fit=crop')" }}
            />
            {}
            <div className="absolute inset-0 z-10 bg-black/40" />

            {}
            <div className="relative z-20 text-center text-white px-4 max-w-4xl">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-4 leading-none text-balance">
                    Domina la Calle
                </h1>
                <p className="text-lg md:text-2xl font-medium mb-10 max-w-2xl mx-auto text-gray-200">
                    Descubre la nueva colección de gorras premium. Estructura, estilo y actitud en cada detalle.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="/shop"
                        className="group inline-flex items-center justify-center bg-white text-black font-bold uppercase tracking-wider px-8 py-4 w-full sm:w-auto hover:bg-gray-200 transition-colors"
                    >
                        Comprar Ahora
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="/categorias/limited"
                        className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold uppercase tracking-wider px-8 py-4 w-full sm:w-auto hover:bg-white hover:text-black transition-colors"
                    >
                        Ver Edición Limitada
                    </Link>
                </div>
            </div>
        </section>
    )
}
