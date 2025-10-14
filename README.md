# Marbella Club

Sitio web escalable construido con Next.js, Prisma, PostgreSQL y Tailwind CSS, optimizado para SEO y rendimiento.

## Características

- **Next.js 15** con App Router
- **TypeScript** para type safety
- **Tailwind CSS** para estilos minimalistas
- **Prisma ORM** con PostgreSQL
- **SSG/ISR** para SEO optimizado
- **Optimización de rendimiento** para PageSpeed 100/100

## Estructura del Proyecto

```
marbellaclub/
├── app/
│   ├── eventos/          # Página de eventos
│   ├── clases-de-salsa/  # Página de clases de salsa
│   ├── listas-gratis/    # Página de listas gratis
│   ├── menu/             # Página de menú
│   ├── layout.tsx        # Layout principal
│   ├── page.tsx          # Página de inicio
│   ├── globals.css       # Estilos globales
│   ├── robots.ts         # Configuración de robots
│   └── sitemap.ts        # Mapa del sitio
├── components/
│   ├── Header.tsx        # Header con navegación
│   └── Footer.tsx        # Footer minimalista
├── lib/
│   └── prisma.ts         # Cliente de Prisma
├── prisma/
│   └── schema.prisma     # Schema de base de datos
└── public/               # Archivos estáticos
```

## Configuración

1. **Instalar dependencias:**
```bash
npm install
```

2. **Configurar base de datos:**

Crea un archivo `.env` basado en `.env.example`:
```bash
DATABASE_URL="postgresql://user:password@localhost:5432/marbellaclub?schema=public"
```

3. **Generar cliente Prisma:**
```bash
npx prisma generate
```

4. **Ejecutar migraciones:**
```bash
npx prisma migrate dev
```

## Desarrollo

Ejecutar el servidor de desarrollo:
```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Producción

1. **Build:**
```bash
npm run build
```

2. **Start:**
```bash
npm start
```

## Optimizaciones de Rendimiento

- **SSG/ISR**: Páginas pre-renderizadas para mejor SEO
- **Image Optimization**: Next.js Image con AVIF/WebP
- **Code Splitting**: Carga automática de código por ruta
- **Font Optimization**: Fuentes optimizadas automáticamente
- **Minification**: CSS y JavaScript minificados

## Páginas

- `/` - Inicio
- `/eventos` - Eventos
- `/clases-de-salsa` - Clases de Salsa
- `/listas-gratis` - Listas Gratis
- `/menu` - Menú

## Tecnologías

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
