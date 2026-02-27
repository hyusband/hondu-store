import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NosotrosPage() {
    return (
        <div className="min-h-screen bg-white">
            {}
            <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517523955684-257a0701985a?q=80&w=2070&auto=format&fit=crop')" }}
                />
                <div className="absolute inset-0 z-10 bg-black/50" />
                <div className="relative z-20 text-center text-white px-4">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-4">
                        Nuestra Historia
                    </h1>
                    <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto">
                        Desde las calles de Tegucigalpa hacia el mundo. Redefiniendo la cultura urbana.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 px-4 md:px-8 container mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-8">
                            El Origen
                        </h2>
                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                Hondumajes nació en 2026 con una visión clara: elevar el estándar de las gorras urbanas.
                                Cansados de modelos genéricos y materiales que no aguantaban el ritmo de la calle, decidimos
                                tomar el control y crear las siluetas perfectas.
                            </p>
                            <p>
                                No somos solo una tienda; somos un laboratorio de diseño donde convergen las influencias
                                musicales, el deporte extremo y el arte contemporáneo. Cada colección limitada que lanzamos
                                cuenta una historia única, con materiales seleccionados a mano, desde algodones transpirables
                                hasta tejidos súper elásticos para atletas.
                            </p>
                            <p className="font-bold text-black text-xl border-l-4 border-black pl-4 my-8">
                                "Una gorra no es un accesorio, es la corona de tu estilo diario."
                            </p>
                            <p>
                                Nuestra misión sigue siendo la misma desde el día uno: calidad inquebrantable, diseños atrevidos y una
                                experiencia de uso que te haga sentir imbatible.
                            </p>
                        </div>
                    </div>
                    <div className="relative aspect-square bg-gray-100">
                        <Image
                            src="https://images.unsplash.com/photo-1520021389860-25fcbbedc9ab?q=80&w=1000&auto=format&fit=crop"
                            alt="Hondumajes Studio"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-black text-white py-24 px-4 md:px-8 text-center">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
                    Únete a la familia
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
                    No te conformes con lo de siempre. Encuentra tu estilo con nuestras colecciones curadas.
                </p>
                <Link
                    href="/shop"
                    className="inline-flex items-center justify-center bg-white text-black font-bold uppercase tracking-wider px-10 py-5 hover:bg-gray-200 transition-colors"
                >
                    Explorar Catálogo
                    <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
            </section>
        </div>
    )
}
