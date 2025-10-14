'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      <nav className="container mx-auto h-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Desktop View */}
        <div className="hidden lg:flex h-full items-center justify-between">
          {/* Left Navigation */}
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

          {/* Centered Logo for Desktop */}
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

          {/* Right Navigation */}
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
        </div>

        {/* Mobile View */}
        <div className="lg:hidden flex h-full items-center justify-between">
          {/* Left-aligned Logo for Mobile */}
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

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-white hover:bg-red-600 rounded"
            aria-label="Menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menú Móvil */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-black border-t border-gray-800">
            <ul className="px-4 pt-2 pb-3 space-y-1">
              {[...leftNavItems, ...rightNavItems].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-2 text-sm font-normal uppercase tracking-wide text-white transition-all hover:bg-red-600 hover:text-white rounded"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
