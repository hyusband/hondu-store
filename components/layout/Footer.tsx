import Link from "next/link"

export function Footer() {
    return (
        <footer className="bg-black text-white py-16 px-4 md:px-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                {}
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold uppercase tracking-wider text-sm mb-2">Colecciones</h4>
                    <Link href="/categorias/snapback" className="text-gray-400 hover:text-white text-sm transition-colors">Snapback</Link>
                    <Link href="/categorias/trucker" className="text-gray-400 hover:text-white text-sm transition-colors">Trucker</Link>
                    <Link href="/categorias/dad-hat" className="text-gray-400 hover:text-white text-sm transition-colors">Dad Hat</Link>
                    <Link href="/categorias/fitted" className="text-gray-400 hover:text-white text-sm transition-colors">Fitted</Link>
                </div>

                {}
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold uppercase tracking-wider text-sm mb-2">Ayuda</h4>
                    <Link href="/ayuda/tallas" className="text-gray-400 hover:text-white text-sm transition-colors">Guía de Tallas</Link>
                    <Link href="/ayuda/envios" className="text-gray-400 hover:text-white text-sm transition-colors">Envíos y Entregas</Link>
                    <Link href="/ayuda/devoluciones" className="text-gray-400 hover:text-white text-sm transition-colors">Devoluciones</Link>
                    <Link href="/ayuda/contacto" className="text-gray-400 hover:text-white text-sm transition-colors">Contacto</Link>
                </div>

                {}
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold uppercase tracking-wider text-sm mb-2">Hondumajes</h4>
                    <Link href="/nosotros" className="text-gray-400 hover:text-white text-sm transition-colors">Acerca de</Link>
                    <Link href="/noticias" className="text-gray-400 hover:text-white text-sm transition-colors">Noticias</Link>
                    <Link href="/tiendas" className="text-gray-400 hover:text-white text-sm transition-colors">Nuestras Tiendas</Link>
                </div>

                {}
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold uppercase tracking-wider text-sm mb-2">Únete y recibe novedades</h4>
                    <p className="text-gray-400 text-sm">Sé el primero en conocer los nuevos lanzamientos y ofertas exclusivas.</p>
                    <div className="flex mt-2">
                        <input
                            type="email"
                            placeholder="Tu correo electrónico"
                            className="bg-transparent border-b border-gray-600 px-0 py-2 w-full text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors rounded-none"
                        />
                        <button className="bg-white text-black font-bold uppercase tracking-wider px-6 py-2 text-sm ml-4 hover:bg-gray-200 transition-colors">
                            Únete
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                <p>&copy; {new Date().getFullYear()} Hondumajes, Inc. Todos los derechos reservados.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <Link href="/privacidad" className="hover:text-white transition-colors">Política de Privacidad</Link>
                    <Link href="/terminos" className="hover:text-white transition-colors">Términos de Uso</Link>
                </div>
            </div>
        </footer>
    )
}
