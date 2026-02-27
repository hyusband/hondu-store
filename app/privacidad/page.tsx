export default function PrivacidadPage() {
    return (
        <div className="container mx-auto px-4 md:px-8 py-32 max-w-4xl">
            <div className="mb-12 border-b-4 border-black pb-8">
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                    Política de Privacidad
                </h1>
                <p className="text-gray-500 mt-4 font-medium">Última actualización: Noviembre 2026</p>
            </div>

            <div className="prose prose-lg text-gray-700 max-w-none">
                <p className="lead text-xl text-black font-medium mb-8">
                    En Hondumajes, nos tomamos muy en serio la privacidad de tus datos personales. Esta página detalla cómo y por qué recopilamos tu información cuando navegas o compras en nuestra plataforma.
                </p>

                <h2 className="text-2xl font-black uppercase mt-12 mb-6">1. Información que Recopilamos</h2>
                <p>
                    Podemos recopilar los siguientes datos personales cuando visitas nuestra web, creas una cuenta o realizas un pedido:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-8">
                    <li><strong>Datos de Identidad:</strong> Nombre, apellidos, nombre de usuario o identificador similar.</li>
                    <li><strong>Datos de Contacto:</strong> Dirección de facturación, dirección de entrega, dirección de correo electrónico y números de teléfono.</li>
                    <li><strong>Datos Financieros:</strong> Detalles de pagos (procesados a través de pasarelas seguras como Stripe; no almacenamos tarjetas en nuestros servidores).</li>
                    <li><strong>Datos Técnicos:</strong> Dirección de protocolo de Internet (IP), datos de inicio de sesión, tipo y versión del navegador.</li>
                </ul>

                <h2 className="text-2xl font-black uppercase mt-12 mb-6">2. Uso de tu Información Personal</h2>
                <p>Solo usaremos tu información personal cuando la ley nos lo permita. Los usos más comunes son:</p>
                <ul className="list-disc pl-6 space-y-2 mb-8">
                    <li>Para procesar y entregar la orden que has realizado en nuestra tienda.</li>
                    <li>Para registrarte como nuevo cliente y proveerte perfiles de compras (Si tienes cuenta).</li>
                    <li>Para gestionar nuestra relación contigo (notificaciones de facturación o envíos).</li>
                    <li>Para utilizar analíticas de datos y mejorar nuestro sitio web, productos/servicios y experiencia del cliente.</li>
                </ul>

                <h2 className="text-2xl font-black uppercase mt-12 mb-6">3. Cookies y Tecnologías de Seguimiento</h2>
                <p>
                    Utilizamos cookies y tecnologías de seguimiento similares (ej. web beacons) para rastrear la actividad en nuestro servicio.
                    Tú puedes instruir a tu navegador para que rechace todas las cookies, sin embargo, es posible que no puedas utilizar algunas partes de nuestro carrito de compras.
                </p>

                <h2 className="text-2xl font-black uppercase mt-12 mb-6">4. Seguridad de los Datos</h2>
                <p>
                    Hemos implementado sólidas medidas técnicas para prevenir que tu información personal se pierda accidentalmente, sea alterada o expuesta a terceros. Además, la interacción de pagos es cifrada a través de pasarelas certificadas con el mayor nivel de rigor financiero.
                </p>

                <h2 className="text-2xl font-black uppercase mt-12 mb-6">5. Tus Derechos</h2>
                <p>
                    Bajo ciertas circunstancias, la ley de protección de datos te otorga derechos. Tienes derecho a solicitar el acceso a tu data, correcciones, o borrado total. Si deseas borrar tu cuenta, contacta a nuestro equipo de privacidad en: <strong>privacidad@hondumajes.com</strong>
                </p>

            </div>
        </div>
    )
}
