import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartSidebar } from "@/components/layout/CartSidebar";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hondumajes.com'),
  title: {
    template: '%s | Hondumajes',
    default: 'Hondumajes | Gorras Premium y Estilo Urbano',
  },
  description: "La tienda online definitiva de gorras. Descubre la nueva colección premium. Estructura, estilo y actitud en cada detalle.",
  keywords: ["gorras", "snapback", "trucker", "dad hat", "fitted", "Honduras", "streetwear", "moda urbana", "Hondumajes", "caps"],
  authors: [{ name: "Hondumajes Team" }],
  creator: "Hondumajes",
  publisher: "Hondumajes",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Hondumajes | Gorras Premium",
    description: "Domina la calle con la nueva colección de gorras premium.",
    url: "https://hondumajes.com",
    siteName: "Hondumajes",
    images: [
      {
        url: "https://images.unsplash.com/photo-1533827432537-70133748f5c8?q=80&w=2070&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Hondumajes Colección Premium",
      }
    ],
    locale: "es_HN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hondumajes | Gorras Premium",
    description: "Domina la calle con la nueva colección de gorras premium.",
    images: ["https://images.unsplash.com/photo-1533827432537-70133748f5c8?q=80&w=2070&auto=format&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CartSidebar />
      </body>
    </html>
  );
}
