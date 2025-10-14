import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const registration = await prisma.salsaRegistration.create({
      data: {
        nombreCompleto: body.nombreCompleto,
        rut: body.rut,
        telefono: body.telefono,
        email: body.email,
        participacion: body.participacion,
        nivelBaile: body.nivelBaile,
        aceptaPoliticas: body.aceptaPoliticas,
        confirmaAsistencia: body.confirmaAsistencia,
      },
    });

    return NextResponse.json({ success: true, data: registration }, { status: 201 });
  } catch (error) {
    console.error('Error creating registration:', error);
    return NextResponse.json({ success: false, error: 'Error al guardar la reserva' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const registrations = await prisma.salsaRegistration.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json({ success: true, data: registrations });
  } catch (error) {
    console.error('Error fetching registrations:', error);
    return NextResponse.json({ success: false, error: 'Error al obtener las reservas' }, { status: 500 });
  }
}
