import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Marbella Club - Música Latina y Eventos",
  description: "El mejor lugar para disfrutar de música latina, clases de salsa y eventos en Marbella",
  metadataBase: new URL('https://marbellaclub.com'),
  openGraph: {
    title: "Marbella Club - Música Latina y Eventos",
    description: "El mejor lugar para disfrutar de música latina, clases de salsa y eventos en Marbella",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marbella Club - Música Latina y Eventos",
    description: "El mejor lugar para disfrutar de música latina, clases de salsa y eventos en Marbella",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="flex min-h-screen flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
