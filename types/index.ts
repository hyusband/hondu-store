export interface Category {
    id: string;
    name: string;
    slug: string;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    category_id: string;
    images: string[];
    material?: string;
    closure_type?: string;
    fit?: string;
    is_featured?: boolean;
    category_name?: string;
}

export interface CartItem extends Product {
    quantity: number;
}
