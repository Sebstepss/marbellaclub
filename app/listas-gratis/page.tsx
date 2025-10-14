import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Listas Gratis - Marbella Club",
  description: "Consigue tu acceso gratuito a los eventos de Marbella Club",
};

export default function ListasGratisPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">
        Listas Gratis
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Página de listas gratis - En construcción
      </p>
    </div>
  );
}
