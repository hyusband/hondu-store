
ALTER TABLE orders ADD COLUMN IF NOT EXISTS display_id serial;

DROP POLICY IF EXISTS "Usuarios insertan órdenes" ON orders;
CREATE POLICY "Permitir crear órdenes anónimas" ON orders FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Usuarios insertan items en sus órdenes" ON order_items;
CREATE POLICY "Permitir crear items anónimos" ON order_items FOR INSERT WITH CHECK (true);
