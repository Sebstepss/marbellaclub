'use client';

import { useEffect, useState } from 'react';

interface Registration {
  id: string;
  nombreCompleto: string;
  rut: string;
  telefono: string;
  email: string;
  participacion: string;
  nivelBaile: string;
  aceptaPoliticas: boolean;
  confirmaAsistencia: boolean;
  createdAt: string;
}

export default function AdminSalsaRegistrations() {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const fetchRegistrations = async () => {
    try {
      const response = await fetch('/api/salsa-registrations');
      const result = await response.json();

      if (result.success) {
        setRegistrations(result.data);
      }
    } catch (error) {
      console.error('Error fetching registrations:', error);
    } finally {
      setLoading(false);
    }
  };

  const downloadCSV = () => {
    if (registrations.length === 0) return;

    const headers = [
      'Fecha',
      'Nombre Completo',
      'RUT',
      'Teléfono',
      'Email',
      'Participación',
      'Nivel de Baile',
      'Acepta Políticas',
      'Confirma Asistencia'
    ];

    const rows = filteredRegistrations.map(reg => [
      new Date(reg.createdAt).toLocaleDateString('es-CL'),
      reg.nombreCompleto,
      reg.rut,
      reg.telefono,
      reg.email,
      reg.participacion,
      reg.nivelBaile,
      reg.aceptaPoliticas ? 'Sí' : 'No',
      reg.confirmaAsistencia ? 'Sí' : 'No'
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    link.setAttribute('href', url);
    link.setAttribute('download', `registros-salsa-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredRegistrations = registrations.filter(reg =>
    reg.nombreCompleto.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reg.rut.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reg.telefono.includes(searchTerm)
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando registros...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-black mb-2">Registros Clases de Salsa</h1>
          <p className="text-gray-600">Total: {registrations.length} registros</p>
        </div>

        {/* Actions Bar */}
        <div className="bg-white border border-gray-200 p-4 mb-6">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Download Button */}
            <button
              onClick={downloadCSV}
              disabled={filteredRegistrations.length === 0}
              className="px-6 py-2 bg-black text-white font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Descargar CSV
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase">
                    Fecha
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase">
                    Nombre
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase">
                    RUT
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase">
                    Teléfono
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase">
                    Participación
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase">
                    Nivel
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredRegistrations.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                      {searchTerm ? 'No se encontraron registros' : 'No hay registros'}
                    </td>
                  </tr>
                ) : (
                  filteredRegistrations.map((reg) => (
                    <tr key={reg.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                        {new Date(reg.createdAt).toLocaleDateString('es-CL')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
                        {reg.nombreCompleto}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {reg.rut}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {reg.telefono}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {reg.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 capitalize">
                        {reg.participacion}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 capitalize">
                        {reg.nivelBaile}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        {filteredRegistrations.length > 0 && searchTerm && (
          <div className="mt-4 text-sm text-gray-600 text-center">
            Mostrando {filteredRegistrations.length} de {registrations.length} registros
          </div>
        )}
      </div>
    </div>
  );
}
