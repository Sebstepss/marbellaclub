import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const leftNavItems = [
    { href: '/', label: 'Inicio' },
    { href: '/eventos', label: 'Eventos' },
    { href: '/reservas', label: 'Reservas' },
  ];

  const rightNavItems = [
    { href: '/listas-gratis', label: 'Lista Gratis' },
    { href: '/clases-de-salsa', label: 'Clases de Salsa' },
    { href: '/menu', label: 'Menú' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-black">
      <nav className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Columna 1 - Navegación Izquierda */}
        <ul className="flex items-center gap-6">
          {leftNavItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-normal uppercase tracking-wide text-white transition-all hover:bg-red-600 hover:text-white px-4 py-2 rounded"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Columna 2 - Logo Centro */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/images/logo.png"
            alt="Marbella Club"
            width={80}
            height={80}
            className="h-16 w-auto"
            priority
          />
        </Link>

        {/* Columna 3 - Navegación Derecha */}
        <ul className="flex items-center gap-6">
          {rightNavItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-normal uppercase tracking-wide text-white transition-all hover:bg-red-600 hover:text-white px-4 py-2 rounded"
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
