"use server"

import { createClient } from "@/lib/supabase/server"
import { CartItem } from "@/types"

export async function createCheckoutOrder(
    formData: { name: string; surname: string; address: string; city: string; zipcode: string },
    items: CartItem[],
    total: number
) {
    const supabase = await createClient();

    const { data: order, error: orderError } = await supabase
        .from("orders")
        .insert({
            total: total,
            shipping_address: formData,
            status: 'pending'
        })
        .select("id, display_id")
        .single();

    if (orderError || !order) {
        console.error("Error creando orden:", orderError);
        return { success: false, error: orderError?.message || 'Error desconocido' };
    }

    // Insertar Items
    // Nota: Si el ID de producto no es UUID aún (es un mock como "1"), lo guardamos como NULL o ignoramos el error, 
    // pero pronto cambiaremos los productos a UUID real de la DB.

    const orderItemsData = items.map(item => {
        const isMock = item.id.length < 10;
        return {
            order_id: order.id,
            product_id: isMock ? null : item.id,
            quantity: item.quantity,
            price: item.price
        }
    });

    const { error: itemsError } = await supabase
        .from("order_items")
        .insert(orderItemsData);

    if (itemsError) {
        console.error("Error insertando items:", itemsError);
    }

    return { success: true, display_id: order.display_id };
}
