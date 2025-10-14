import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reservas - Marbella Club",
  description: "Reserva tu mesa o entrada para los eventos de Marbella Club",
};

export default function ReservasPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">
        Reservas
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Página de reservas - En construcción
      </p>
    </div>
  );
}
