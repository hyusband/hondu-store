"use client"

import { use } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react"

type HelpContent = {
    title: string;
    content: React.ReactNode;
}

const HELP_DATA: Record<string, HelpContent> = {
    tallas: {
        title: "Guía de Tallas",
        content: (
            <div className="space-y-6">
                <p className="lead text-lg text-black font-medium">
                    Encontrar el ajuste perfecto es fundamental. Nuestras gorras están diseñadas bajo estándares universales, pero cada estilo (Fitted, Snapback, Dad Hat) tiene comportamientos diferentes.
                </p>
                <h3 className="text-xl font-bold uppercase mt-8">Gorras Fitted (A Medida)</h3>
                <p>
                    Las gorras Fitted no tienen cierre ajustable en la parte posterior. Debes medir la circunferencia de tu cabeza, justo por encima de las cejas y las orejas.
                </p>
                <div className="overflow-x-auto mt-4">
                    <table className="min-w-full border border-gray-200 text-left text-sm">
                        <thead className="bg-gray-50 border-b border-gray-200 uppercase font-black">
                            <tr>
                                <th className="p-4 border-r border-gray-200">Talla USA</th>
                                <th className="p-4 border-r border-gray-200">Pulgadas</th>
                                <th className="p-4">Centímetros (CM)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-100">
                                <td className="p-4 border-r border-gray-100">7</td>
                                <td className="p-4 border-r border-gray-100">22</td>
                                <td className="p-4">55.8</td>
                            </tr>
                            <tr className="border-b border-gray-100 bg-gray-50/50">
                                <td className="p-4 border-r border-gray-100">7 1/8</td>
                                <td className="p-4 border-r border-gray-100">22 3/8</td>
                                <td className="p-4">56.8</td>
                            </tr>
                            <tr className="border-b border-gray-100">
                                <td className="p-4 border-r border-gray-100">7 1/4</td>
                                <td className="p-4 border-r border-gray-100">22 3/4</td>
                                <td className="p-4">57.7</td>
                            </tr>
                            <tr className="border-b border-gray-100 bg-gray-50/50">
                                <td className="p-4 border-r border-gray-100">7 3/8</td>
                                <td className="p-4 border-r border-gray-100">23 1/8</td>
                                <td className="p-4">58.7</td>
                            </tr>
                            <tr className="border-b border-gray-100">
                                <td className="p-4 border-r border-gray-100">7 1/2</td>
                                <td className="p-4 border-r border-gray-100">23 1/2</td>
                                <td className="p-4">59.6</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3 className="text-xl font-bold uppercase mt-8">Snapback y Strapback (Unitalla)</h3>
                <p>
                    Estas gorras vienen en talla única y se ajustan a la mayoría de cabezas adultas (entre 54 cm y 60 cm), gracias a su broche de plástico o correa trasera.
                </p>
            </div>
        )
    },
    envios: {
        title: "Envíos y Entregas",
        content: (
            <div className="space-y-6">
                <p className="lead text-lg text-black font-medium">
                    Hondumajes hace envíos a nivel nacional e internacional con las mejores empresas de paquetería para garantizar que tu pedido llegue seguro.
                </p>
                <h3 className="text-xl font-bold uppercase mt-8">Tiempos de Procesamiento</h3>
                <p>
                    Todos los pedidos se despachan en un plazo de 24 a 48 horas hábiles tras la confirmación del pago.
                </p>
                <h3 className="text-xl font-bold uppercase mt-8">Envíos Nacionales</h3>
                <p>
                    - <strong>Envío Estándar:</strong> 3-5 días hábiles. Costo: $5.00 (Gratis en pedidos superiores a $50).<br />
                    - <strong>Envío Express:</strong> 1-2 días hábiles. Costo: $12.00.
                </p>
                <h3 className="text-xl font-bold uppercase mt-8">Envíos Internacionales</h3>
                <p>
                    Cubrimos el resto de Centroamérica y Estados Unidos. Los tiempos promedio de entrega varían de 7 a 15 días laborables dependiendo de controles aduaneros locales.
                    Costos calculados automáticamente en el proceso de pago (Checkout).
                </p>
            </div>
        )
    },
    devoluciones: {
        title: "Devoluciones",
        content: (
            <div className="space-y-6">
                <p className="lead text-lg text-black font-medium">
                    Queremos que ames tu gorra Hondumajes. Si no es así, te respaldamos con nuestra política de devoluciones sin fricción.
                </p>
                <h3 className="text-xl font-bold uppercase mt-8">Plazo de Devolución</h3>
                <p>
                    Tienes un plazo de <strong>30 días naturales</strong> desde que recibes el pedido para iniciar un proceso de cambio o devolución.
                </p>
                <h3 className="text-xl font-bold uppercase mt-8">Condiciones</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li>El artículo debe estar sin uso, en sus condiciones originales.</li>
                    <li>Todas las etiquetas, pegatinas y viseras deben estar intactas y adheridas originalmentre.</li>
                    <li>Gorras manipuladas (con manchas de sudor o dobladas intencionalmente) serán rechazadas.</li>
                </ul>
                <h3 className="text-xl font-bold uppercase mt-8">Proceso</h3>
                <p>
                    Para iniciar una devolución, escríbenos a devoluciones@hondumajes.com. Recibirás un ticket y una etiqueta imprimible de envío.
                    Una vez comprobado el producto en nuestras instalaciones, reembolsaremos el dinero a tu método de pago inicial en un rango de 3-5 días.
                </p>
            </div>
        )
    },
    contacto: {
        title: "Contacto",
        content: (
            <div className="space-y-6">
                <p className="lead text-lg text-black font-medium">
                    ¿Tienes dudas sobre un pedido, un diseño o quieres ser distribuidor autorizado? Estamos aquí para escucharte.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-12">
                    <div className="bg-gray-50 p-8 border border-gray-100 flex flex-col gap-4">
                        <Mail className="w-8 h-8 font-black mb-2" />
                        <h3 className="text-xl font-black uppercase">Vía Email</h3>
                        <p className="text-gray-500 text-sm">Respondemos correos en menos de 24 horas laborables.</p>
                        <a href="mailto:soporte@hondumajes.com" className="font-bold border-b border-black w-fit hover:text-gray-600 transition-colors">soporte@hondumajes.com</a>
                    </div>
                    <div className="bg-gray-50 p-8 border border-gray-100 flex flex-col gap-4">
                        <Phone className="w-8 h-8 font-black mb-2" />
                        <h3 className="text-xl font-black uppercase">Atención Telefónica</h3>
                        <p className="text-gray-500 text-sm">Línea abierta Lunes - Viernes: 9am a 6pm.</p>
                        <a href="tel:+595984837180" className="font-bold border-b border-black w-fit hover:text-gray-600 transition-colors">+(595) 984837180</a>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-xl font-black uppercase mb-6">Oficina Central</h3>
                    <div className="flex items-start gap-4 text-gray-600 bg-gray-50 p-6">
                        <MapPin className="w-6 h-6 text-black shrink-0" />
                        <p>
                            Montevideo Nº 173<br />
                            Edificio Boquerón<br />
                            Asunción, Paraguay
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default function HelpPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);

    const contentData = HELP_DATA[slug] || {
        title: `Ayuda: ${slug.replace('-', ' ')}`,
        content: (
            <div className="text-gray-600">
                <p className="text-lg">Acabas de acceder a una sección que está en construcción o no existe.</p>
                <p className="mt-4">Por favor, usa el menú para regresar u opta por contactar directamente a servicio al cliente.</p>
            </div>
        )
    };

    return (
        <div className="container mx-auto px-4 md:px-8 py-32 flex flex-col md:flex-row gap-12 lg:gap-24 relative">

            { }
            <div className="md:w-1/4">
                <div className="sticky top-32">
                    <Link href="/" className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-gray-500 hover:text-black transition-colors mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Volver
                    </Link>
                    <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-6">Centro de Ayuda</h2>
                    <nav className="flex flex-col gap-4 text-lg font-medium">
                        <Link href="/ayuda/tallas" className={`${slug === 'tallas' ? 'text-black font-black' : 'text-gray-500 hover:text-black'} transition-colors`}>
                            Guía de Tallas
                        </Link>
                        <Link href="/ayuda/envios" className={`${slug === 'envios' ? 'text-black font-black' : 'text-gray-500 hover:text-black'} transition-colors`}>
                            Envíos y Entregas
                        </Link>
                        <Link href="/ayuda/devoluciones" className={`${slug === 'devoluciones' ? 'text-black font-black' : 'text-gray-500 hover:text-black'} transition-colors`}>
                            Devoluciones
                        </Link>
                        <Link href="/ayuda/contacto" className={`${slug === 'contacto' ? 'text-black font-black' : 'text-gray-500 hover:text-black'} transition-colors`}>
                            Contacto
                        </Link>
                    </nav>
                </div>
            </div>

            { }
            <div className="md:w-3/4 max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12 capitalize border-b-4 border-black pb-8">
                    {contentData.title}
                </h1>
                <div className="prose prose-lg prose-gray text-gray-700 max-w-none">
                    {contentData.content}
                </div>
            </div>

        </div>
    )
}
