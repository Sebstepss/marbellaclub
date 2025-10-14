import Link from 'next/link';

export default function Header() {
  const navItems = [
    { href: '/', label: 'Inicio' },
    { href: '/eventos', label: 'Eventos' },
    { href: '/clases-de-salsa', label: 'Clases de Salsa' },
    { href: '/listas-gratis', label: 'Listas Gratis' },
    { href: '/menu', label: 'Menú' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <nav className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-gray-900 hover:text-gray-700 transition-colors"
        >
          Marbella Club
        </Link>

        <ul className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
