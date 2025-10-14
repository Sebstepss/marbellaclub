export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-gray-200 bg-white">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
              Sobre Nosotros
            </h3>
            <p className="text-sm text-gray-600">
              Disco 100% Latina
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Viernes, Sábados y Domingos
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Barra libre Sábado y Domingo
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="/eventos" className="hover:text-gray-900 transition-colors">
                  Eventos
                </a>
              </li>
              <li>
                <a href="/reservas" className="hover:text-gray-900 transition-colors">
                  Reservas
                </a>
              </li>
              <li>
                <a href="/clases-de-salsa" className="hover:text-gray-900 transition-colors">
                  Clases de Salsa
                </a>
              </li>
              <li>
                <a href="/listas-gratis" className="hover:text-gray-900 transition-colors">
                  Listas Gratis
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
              Contacto
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Tel: +56 9 4941 3292</li>
              <li>
                <a
                  href="https://maps.google.com/?q=Edmundo+Pérez+Zujovic+4624,+Antofagasta,+Chile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 transition-colors"
                >
                  Av. Edmundo Pérez Zujovic 4624<br />
                  Antofagasta, Chile
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
              Síguenos
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {currentYear} Marbella Club. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
