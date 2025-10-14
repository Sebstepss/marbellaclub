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
              Marbella Club - El mejor lugar para disfrutar de la música latina y la cultura.
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
              <li>Email: info@marbellaclub.com</li>
              <li>Tel: +34 123 456 789</li>
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
