import { MapPin, Clock, Phone } from "lucide-react";

const STORES = [
    {
        id: 1,
        name: "Flagship Store Central",
        address: "Avenida Principal 1234, Distrito Moda, C.P. 10001",
        hours: "Lunes a Sábado: 10:00 - 20:00",
        phone: "+(504) 9999-0000",
        status: "Abierto Ahora"
    },
    {
        id: 2,
        name: "Boutique Norte",
        address: "Plaza Las Palmas, Nivel 2, Local 45",
        hours: "Lunes a Domingo: 11:00 - 21:00",
        phone: "+(504) 9999-1111",
        status: "Abierto Ahora"
    },
    {
        id: 3,
        name: "Outlet Sur (Rebajas)",
        address: "Bulevar Sur, Complejo Industrial Bodega 3",
        hours: "Jueves a Domingo: 09:00 - 18:00",
        phone: "+(504) 9999-2222",
        status: "Cerrado"
    }
];

export default function TiendasPage() {
    return (
        <div className="min-h-screen py-32 px-4 md:px-8 bg-white">
            <div className="container mx-auto">
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-center">
                    Nuestras Tiendas
                </h1>
                <p className="text-xl text-gray-500 text-center mb-16 max-w-2xl mx-auto">
                    Encuentra tu centro Hondumajes más cercano. Pruébate nuestras gorras, siente los materiales y recibe asesoría en tienda.
                </p>

                {/* Store Locator Layout */}
                <div className="flex flex-col lg:flex-row gap-12 border border-gray-100 mt-12">
                    {/* List of Stores */}
                    <div className="lg:w-1/3 flex flex-col divide-y divide-gray-100 max-h-[600px] overflow-y-auto">
                        {STORES.map((store) => (
                            <div key={store.id} className="p-8 hover:bg-gray-50 transition-colors cursor-pointer group">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-2xl font-black uppercase text-black">{store.name}</h3>
                                </div>
                                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
                                    {store.status}
                                </p>

                                <div className="space-y-4 text-gray-600 text-sm">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-5 h-5 text-black shrink-0" />
                                        <span>{store.address}</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Clock className="w-5 h-5 text-black shrink-0" />
                                        <span>{store.hours}</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Phone className="w-5 h-5 text-black shrink-0" />
                                        <span>{store.phone}</span>
                                    </div>
                                </div>

                                <button className="mt-8 font-bold uppercase tracking-widest text-sm border-b-2 border-transparent group-hover:border-black transition-colors pb-1">
                                    Ver Detalles
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Map Placeholder */}
                    <div className="lg:w-2/3 bg-gray-100 min-h-[400px] lg:min-h-full relative flex items-center justify-center">
                        {/* Si quisieran integrar Google Maps, iría aquí */}
                        <div className="absolute inset-0 bg-[#E5E3DF]" />
                        <div className="relative z-10 flex flex-col items-center opacity-40">
                            <MapPin className="w-16 h-16 text-black mb-4" />
                            <p className="font-bold uppercase tracking-widest text-lg text-black">Ubicación Interactiva (Mapa)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
