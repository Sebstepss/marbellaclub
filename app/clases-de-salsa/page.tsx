import type { Metadata } from "next";
import SalsaForm from "@/components/SalsaForm";

export const metadata: Metadata = {
  title: "Clases de Salsa - Marbella Club",
  description: "Aprende a bailar salsa con los mejores instructores en Marbella Club. Reserva tu cupo ahora, cupos limitados.",
};

export default function ClasesDeSalsaPage() {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SalsaForm />
      </div>
    </div>
  );
}
