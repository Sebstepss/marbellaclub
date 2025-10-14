-- CreateTable
CREATE TABLE "salsa_registrations" (
    "id" TEXT NOT NULL,
    "nombreCompleto" TEXT NOT NULL,
    "rut" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "participacion" TEXT NOT NULL,
    "nivelBaile" TEXT NOT NULL,
    "aceptaPoliticas" BOOLEAN NOT NULL,
    "confirmaAsistencia" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "salsa_registrations_pkey" PRIMARY KEY ("id")
);
