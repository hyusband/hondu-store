import { MetadataRoute } from 'next'
import { MOCK_PRODUCTS } from '@/lib/mock-data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://hondumajes.com'

    const staticRoutes = [
        '',
        '/shop',
        '/nosotros',
        '/noticias',
        '/tiendas',
        '/privacidad',
        '/terminos',
        '/ayuda/tallas',
        '/ayuda/envios',
        '/ayuda/devoluciones',
        '/ayuda/contacto',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    const productRoutes = MOCK_PRODUCTS.map((product) => ({
        url: `${baseUrl}/gorras/${product.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }))

    const categoryRoutes = [
        '/categorias/coleccion-urbana',
        '/categorias/deportes',
        '/categorias/dad-hat',
        '/categorias/fitted',
        '/categorias/trucker',
        '/categorias/snapback',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    return [...staticRoutes, ...productRoutes, ...categoryRoutes]
}
