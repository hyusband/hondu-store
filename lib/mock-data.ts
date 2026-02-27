import { Product } from "@/types";

export const MOCK_PRODUCTS: Product[] = [
    {
        id: "1",
        name: "Classic Snapback",
        description: "Una gorra snapback estructurada con visera plana. El clásico urbano que nunca falla y combina con todo. Fabricada con materiales de primera calidad para garantizar una larga durabilidad.",
        price: 35.00,
        stock: 100,
        category_id: "coleccion-urbana",
        category_name: "Colección Urbana",
        material: "100% Algodón",
        closure_type: "Snapback",
        images: [
            "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        id: "2",
        name: "Runner Light",
        description: "Diseñada para atletas. Material ligero, transpirable y reflectante.",
        price: 45.00,
        stock: 50,
        category_id: "deportes",
        category_name: "Deportes",
        material: "Poliéster Reciclado",
        closure_type: "Velcro ajustable",
        images: [
            "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        id: "3",
        name: "Dad Hat Heritage",
        description: "Algodón lavado, corona sin estructura y visera curva. Comodidad vintage.",
        price: 30.00,
        stock: 200,
        category_id: "dad-hat",
        category_name: "Dad Hat",
        material: "Algodón lavado",
        closure_type: "Strapback",
        images: [
            "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        id: "4",
        name: "X-Treme Pro Fitted",
        description: "Ajuste perfecto, tejido elástico de alto rendimiento.",
        price: 55.00,
        stock: 20,
        category_id: "fitted",
        category_name: "Fitted",
        material: "Blend elástico",
        closure_type: "Fitted",
        images: [
            "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        id: "5",
        name: "Trucker Essential",
        description: "Malla trasera para respirabilidad máxima. Estilo relajado clásico.",
        price: 25.00,
        stock: 150,
        category_id: "trucker",
        category_name: "Trucker",
        material: "Poliéster y Malla",
        closure_type: "Snapback",
        images: [
            "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        id: "6",
        name: "Premium Snapback",
        description: "Nuestra snapback con materiales premium y acabados a mano.",
        price: 60.00,
        stock: 30,
        category_id: "snapback",
        category_name: "Snapback",
        material: "Lana Premium",
        closure_type: "Snapback",
        images: [
            "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1000&auto=format&fit=crop"
        ]
    }
];
