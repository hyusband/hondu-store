
CREATE TABLE categories (
  id text PRIMARY KEY,
  name text NOT NULL,
  description text
);

CREATE TABLE products (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  slug text UNIQUE NOT NULL,
  name text NOT NULL,
  description text,
  price numeric(10, 2) NOT NULL,
  stock integer DEFAULT 0,
  category_id text REFERENCES categories(id) ON DELETE SET NULL,
  material text,
  closure_type text,
  images text[] DEFAULT '{}',
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE orders (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  status text DEFAULT 'pending', -- pending, paid, shipped, delivered, cancelled
  total numeric(10, 2) NOT NULL,
  stripe_session_id text,
  shipping_address jsonb,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE order_items (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id uuid REFERENCES orders(id) ON DELETE CASCADE,
  product_id uuid REFERENCES products(id) ON DELETE SET NULL,
  quantity integer NOT NULL,
  price numeric(10, 2) NOT NULL
);

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;


CREATE POLICY "Categorías son públicas" ON categories FOR SELECT USING (true);
CREATE POLICY "Productos son públicos" ON products FOR SELECT USING (true);

CREATE POLICY "Usuarios ven sus órdenes" ON orders FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Usuarios insertan órdenes" ON orders FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Usuarios ven items de sus órdenes" ON order_items FOR SELECT USING (
  EXISTS (
    SELECT 1 FROM orders WHERE orders.id = order_items.order_id AND orders.user_id = auth.uid()
  )
);
CREATE POLICY "Usuarios insertan items en sus órdenes" ON order_items FOR INSERT WITH CHECK (
  EXISTS (
    SELECT 1 FROM orders WHERE orders.id = order_items.order_id AND orders.user_id = auth.uid()
  )
);

INSERT INTO categories (id, name, description) VALUES
('coleccion-urbana', 'Colección Urbana', 'El clásico urbano que nunca falla.'),
('deportes', 'Deportes', 'Gorras diseñadas para atletas y alto rendimiento.'),
('dad-hat', 'Dad Hat', 'Ajuste desestructurado semi curvo, máxima comodidad.'),
('fitted', 'Fitted', 'Gorras a la medida exacta de tu cabeza, sin broche.'),
('trucker', 'Trucker', 'Malla de ventilación trasera.'),
('snapback', 'Snapback', 'La silueta estructurada rey del streetwear.');

INSERT INTO products (slug, name, description, price, stock, category_id, material, closure_type, images) VALUES
('classic-snapback', 'Classic Snapback', 'Una gorra snapback estructurada con visera plana...', 35.00, 100, 'coleccion-urbana', '100% Algodón', 'Snapback', ARRAY['https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1000&auto=format&fit=crop']),
('runner-light', 'Runner Light', 'Diseñada para atletas. Material ligero, transpirable y reflectante.', 45.00, 50, 'deportes', 'Poliéster Reciclado', 'Velcro ajustable', ARRAY['https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1000&auto=format&fit=crop']),
('dad-hat-heritage', 'Dad Hat Heritage', 'Algodón lavado, corona sin estructura y visera curva.', 30.00, 200, 'dad-hat', 'Algodón lavado', 'Strapback', ARRAY['https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1000&auto=format&fit=crop']),
('x-treme-pro-fitted', 'X-Treme Pro Fitted', 'Ajuste perfecto, tejido elástico de alto rendimiento.', 55.00, 20, 'fitted', 'Blend elástico', 'Fitted', ARRAY['https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1000&auto=format&fit=crop']),
('trucker-essential', 'Trucker Essential', 'Malla trasera para respirabilidad máxima. Estilo relajado clásico.', 25.00, 150, 'trucker', 'Poliéster y Malla', 'Snapback', ARRAY['https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1000&auto=format&fit=crop']),
('premium-snapback', 'Premium Snapback', 'Nuestra snapback con materiales premium y acabados a mano.', 60.00, 30, 'snapback', 'Lana Premium', 'Snapback', ARRAY['https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1000&auto=format&fit=crop']);
