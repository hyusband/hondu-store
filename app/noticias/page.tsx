import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ONDUMAJES_NEWS = [
    {
        id: 1,
        title: "Nueva Colección: Otoño/Invierno 2026",
        category: "Lanzamientos",
        date: "12 de Octubre, 2026",
        excerpt: "Nuestra última colección introduce telas térmicas y de pana, redefiniendo las gorras estructuradas para las temporadas más frías sin perder el borde urbano.",
        image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Hondumajes x Cultura: Pop-Up Event",
        category: "Eventos",
        date: "5 de Septiembre, 2026",
        excerpt: "Acompáñanos en el centro de la ciudad para nuestro próximo evento pop-up. Tendremos modelos únicos, DJS invitados y sesiones de customización en vivo.",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Sostenibilidad en Nuestro ADN",
        category: "Comunidad",
        date: "22 de Agosto, 2026",
        excerpt: "Descubre cómo estamos transformando nuestra cadena de producción utilizando poliéster reciclado y empaques compostables para reducir el impacto ambiental.",
        image: "https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=1000&auto=format&fit=crop"
    }
];

export default function NoticiasPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-32 px-4 md:px-8">
            <div className="container mx-auto">
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-center">
                    Noticias & Novedades
                </h1>
                <p className="text-xl text-gray-500 text-center mb-16 max-w-2xl mx-auto">
                    Mantente al tanto de nuestros lanzamientos limitados, eventos de comunidad y el futuro del streetwear local.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ONDUMAJES_NEWS.map((news) => (
                        <article key={news.id} className="bg-white border border-gray-100/50 shadow-sm overflow-hidden group flex flex-col cursor-pointer">
                            <div className="relative h-64 w-full overflow-hidden bg-gray-200">
                                <Image
                                    src={news.image}
                                    alt={news.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-xs font-bold bg-black text-white px-3 py-1 uppercase tracking-widest">{news.category}</span>
                                    <time className="text-sm font-medium text-gray-400">{news.date}</time>
                                </div>
                                <h2 className="text-2xl font-black uppercase leading-tight mb-4 group-hover:underline decoration-2 underline-offset-4">{news.title}</h2>
                                <p className="text-gray-600 mb-8 flex-grow">{news.excerpt}</p>
                                <div className="inline-flex items-center text-black font-bold uppercase tracking-wider text-sm mt-auto">
                                    Leer Historia Completa
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
