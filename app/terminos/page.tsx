export default function TerminosPage() {
    return (
        <div className="container mx-auto px-4 md:px-8 py-32 max-w-4xl">
            <div className="mb-12 border-b-4 border-black pb-8">
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                    Términos de Uso
                </h1>
                <p className="text-gray-500 mt-4 font-medium">Última actualización: Noviembre 2026</p>
            </div>

            <div className="prose prose-lg text-gray-700 max-w-none">
                <p className="lead text-xl text-black font-medium mb-8">
                    Bienvenido a Hondumajes. Al acceder a esta tienda online (el "Sitio") y/o utilizar nuestros servicios, tú aceptas de forma irrevocable regirte por los siguientes Términos y Condiciones.
                </p>

                <h2 className="text-2xl font-black uppercase mt-12 mb-6">1. Condiciones Generales</h2>
                <p>
                    Nos reservamos el derecho de rechazar el servicio a cualquier persona, por cualquier motivo, en cualquier momento.
                    Entiendes que tu contenido (sin incluir la información de tarjetas de crédito) puede transferirse sin encriptar, y
                    (a) implicar transmisiones a través de varias redes, y (b) cambios para conformarse y adaptarse a los requerimientos
                    técnicos de redes o dispositivos en conexión.
                </p>

                <h2 className="text-2xl font-black uppercase mt-12 mb-6">2. Exactitud y Modificación de Precios</h2>
                <p>
                    Los precios de nuestros productos web están sujetos a cambios sin un aviso temporal previo. Si has añadido algo al
                    carrito pero hay una actualización repentina, el pago se ajustará al valor actual de la plataforma, a menos que ya
                    hayas pagado en el Checkout. No nos haremos responsables ante ti, ni ante ningún tercero, de cualquier modificación,
                    cambio de precio, o cancelación del e-commerce.
                </p>

                <h2 className="text-2xl font-black uppercase mt-12 mb-6">3. Productos y Colecciones Especiales</h2>
                <p>
                    Ciertos productos (como la "Edición Limitada") pueden estar disponibles exclusivamente de forma online o por drop especial.
                    Agotamos todas las formas técnicas disponibles con el fin de exhibir con la máxima fidelidad los colores e imágenes
                    del stock. Sin embargo, no podemos asegurar que el monitor de tu ordenador será preciso.
                    Nos reservamos el derecho a delimitar la venta de mercancía a cualquier radio o jurisdicción legal.
                </p>

                <h2 className="text-2xl font-black uppercase mt-12 mb-6">4. Propiedad Intelectual</h2>
                <p>
                    Todo el contenido incluido en la web: la estructura geométrica, logotipos, clips, el nombre "Hondumajes", el código en
                    frontend o backend, es propiedad intrínseca de la tienda o en su caso de nuestros proveedores de la industria.
                    Prohibido el uso general de la patente para crear copias alteradas para comercialización.
                </p>

                <h2 className="text-2xl font-black uppercase mt-12 mb-6">5. Legislación Vigente</h2>
                <p>
                    Las disputas o quejas legales de carácter administrativo relacionadas meramente con estos Términos se orientarán por
                    la legislación local designada bajo sede mercantil de la compañía. Contacto directo: <strong>legal@hondumajes.com</strong>
                </p>
            </div>
        </div>
    )
}
