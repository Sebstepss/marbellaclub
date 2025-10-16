import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import LayoutWrapper from "@/components/LayoutWrapper";

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-rethink-sans",
});

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
      <body className={`${rethinkSans.variable} flex min-h-screen flex-col font-sans antialiased`}>
        <Providers>
          <LayoutWrapper>{children}</LayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}
