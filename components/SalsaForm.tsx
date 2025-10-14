'use client';

import { useState } from 'react';

export default function SalsaForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    rut: '',
    telefono: '',
    email: '',
    participacion: '',
    nivelBaile: '',
    aceptaPoliticas: false,
    confirmaAsistencia: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/salsa-registrations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert('¡Reserva enviada exitosamente!');
        setFormData({
          nombreCompleto: '',
          rut: '',
          telefono: '',
          email: '',
          participacion: '',
          nivelBaile: '',
          aceptaPoliticas: false,
          confirmaAsistencia: false,
        });
        setStep(1);
      } else {
        alert('Error al enviar la reserva. Por favor intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar la reserva. Por favor intenta nuevamente.');
    }
  };

  const isStep1Valid = () => {
    return formData.nombreCompleto && formData.rut && formData.telefono && formData.email;
  };

  const isStep2Valid = () => {
    return formData.participacion && formData.nivelBaile;
  };

  const isStep3Valid = () => {
    return formData.aceptaPoliticas && formData.confirmaAsistencia;
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Header Section - 2 columnas con mismo ancho del form */}
      <div className="mb-8 w-full max-w-2xl grid grid-cols-[4fr_1fr] gap-0">
        {/* Columna 1 - Título (80%) */}
        <div className="bg-black px-6 py-6 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
            Reserva tu cupo
          </h1>
        </div>

        {/* Columna 2 - Cupos limitados (20%) */}
        <div className="flex items-center justify-center bg-white px-2 py-6 border border-gray-200">
          <p className="text-[10px] md:text-xs font-extrabold text-red-600 uppercase tracking-wide text-center leading-tight">
            Cupos Limitados
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full max-w-2xl rounded-lg bg-white p-8 shadow-lg">
        {/* Progress Indicator */}
        <div className="mb-8 flex justify-between">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`flex h-10 w-10 items-center justify-center rounded-full font-bold transition-colors ${
                step >= s ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}
            >
              {s}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {/* Paso 1: Datos Personales */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Paso 1: Datos Personales
              </h2>

              <div>
                <label htmlFor="nombreCompleto" className="mb-2 block text-sm font-semibold text-gray-700">
                  Nombre completo <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="nombreCompleto"
                  name="nombreCompleto"
                  value={formData.nombreCompleto}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20"
                  placeholder="Ingresa tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="rut" className="mb-2 block text-sm font-semibold text-gray-700">
                  RUT <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="rut"
                  name="rut"
                  value={formData.rut}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20"
                  placeholder="12.345.678-9"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="mb-2 block text-sm font-semibold text-gray-700">
                  Teléfono (WhatsApp) <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20"
                  placeholder="+56 9 1234 5678"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-700">
                  Correo electrónico <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20"
                  placeholder="tu@email.com"
                />
              </div>

              <button
                type="button"
                onClick={handleNext}
                disabled={!isStep1Valid()}
                className="mt-6 w-full rounded-lg bg-red-600 px-6 py-3 font-bold text-white transition-colors hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                Siguiente
              </button>
            </div>
          )}

          {/* Paso 2: Información de Participación */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Paso 2: Información de Participación
              </h2>

              <div>
                <label className="mb-3 block text-sm font-semibold text-gray-700">
                  ¿Vienes solo/a o en pareja? <span className="text-red-600">*</span>
                </label>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 rounded-lg border border-gray-300 p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                    <input
                      type="radio"
                      name="participacion"
                      value="solo"
                      checked={formData.participacion === 'solo'}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-red-600 focus:ring-red-600"
                    />
                    <span className="text-gray-900 font-medium">Solo/a</span>
                  </label>
                  <label className="flex items-center space-x-3 rounded-lg border border-gray-300 p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                    <input
                      type="radio"
                      name="participacion"
                      value="pareja"
                      checked={formData.participacion === 'pareja'}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-red-600 focus:ring-red-600"
                    />
                    <span className="text-gray-900 font-medium">En pareja</span>
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="nivelBaile" className="mb-2 block text-sm font-semibold text-gray-700">
                  Nivel de baile <span className="text-red-600">*</span>
                </label>
                <select
                  id="nivelBaile"
                  name="nivelBaile"
                  value={formData.nivelBaile}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20"
                >
                  <option value="">Selecciona tu nivel</option>
                  <option value="principiante">Principiante</option>
                  <option value="intermedio">Intermedio</option>
                  <option value="avanzado">Avanzado</option>
                </select>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-full rounded-lg border-2 border-gray-300 px-6 py-3 font-bold text-gray-700 transition-colors hover:bg-gray-50"
                >
                  Anterior
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!isStep2Valid()}
                  className="w-full rounded-lg bg-red-600 px-6 py-3 font-bold text-white transition-colors hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-gray-300"
                >
                  Siguiente
                </button>
              </div>
            </div>
          )}

          {/* Paso 3: Confirmaciones */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Paso 3: Confirmaciones
              </h2>

              <div className="space-y-4">
                <label className="flex items-start space-x-3 rounded-lg border border-gray-300 p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="checkbox"
                    name="aceptaPoliticas"
                    checked={formData.aceptaPoliticas}
                    onChange={handleInputChange}
                    required
                    className="mt-1 h-4 w-4 rounded text-red-600 focus:ring-red-600"
                  />
                  <span className="text-sm text-gray-900">
                    Acepto las políticas promocionales de Marbella Disco Club.{' '}
                    <span className="text-red-600">*</span>
                  </span>
                </label>

                <label className="flex items-start space-x-3 rounded-lg border border-gray-300 p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="checkbox"
                    name="confirmaAsistencia"
                    checked={formData.confirmaAsistencia}
                    onChange={handleInputChange}
                    required
                    className="mt-1 h-4 w-4 rounded text-red-600 focus:ring-red-600"
                  />
                  <span className="text-sm text-gray-900">
                    Confirmo mi asistencia y entiendo que el cupo es limitado.{' '}
                    <span className="text-red-600">*</span>
                  </span>
                </label>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-full rounded-lg border-2 border-gray-300 px-6 py-3 font-bold text-gray-700 transition-colors hover:bg-gray-50"
                >
                  Anterior
                </button>
                <button
                  type="submit"
                  disabled={!isStep3Valid()}
                  className="w-full rounded-lg bg-red-600 px-6 py-3 font-bold text-white transition-colors hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-gray-300"
                >
                  Enviar Reserva
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
