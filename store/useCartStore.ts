import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product, CartItem } from '@/types'

interface CartStore {
    items: CartItem[];
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    addItem: (product: Product) => void;
    removeItem: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    totalItems: () => number;
    totalPrice: () => number;
    clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            isOpen: false,
            setIsOpen: (isOpen) => set({ isOpen }),
            addItem: (product) => {
                const items = get().items;
                const existingItem = items.find(item => item.id === product.id);

                if (existingItem) {
                    set({ items: items.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) })
                } else {
                    set({ items: [...items, { ...product, quantity: 1 }] })
                }
                set({ isOpen: true }); // Open cart when adding item
            },
            removeItem: (id) => set({ items: get().items.filter(i => i.id !== id) }),
            updateQuantity: (id, quantity) => {
                if (quantity < 1) {
                    get().removeItem(id);
                    return;
                }
                set({ items: get().items.map(item => item.id === id ? { ...item, quantity } : item) })
            },
            totalItems: () => get().items.reduce((total, item) => total + item.quantity, 0),
            totalPrice: () => get().items.reduce((total, item) => total + (item.price * item.quantity), 0),
            clearCart: () => set({ items: [] })
        }),
        { name: 'hondumajes-cart' }
    )
)
