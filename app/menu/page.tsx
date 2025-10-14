import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menú - Marbella Club",
  description: "Consulta nuestra carta de cócteles y bebidas en Marbella Club",
};

export default function MenuPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">
        Menú
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Página de menú - En construcción
      </p>
    </div>
  );
}
