import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clases de Salsa - Marbella Club",
  description: "Aprende a bailar salsa con los mejores instructores en Marbella Club",
};

export default function ClasesDeSalsaPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">
        Clases de Salsa
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Página de clases de salsa - En construcción
      </p>
    </div>
  );
}
