
import { NextResponse } from 'next/server';
import { consultarTiposNegociacao } from '@/lib/sankhya-api';

export async function GET() {
  try {
    const tiposNegociacao = await consultarTiposNegociacao();
    return NextResponse.json({ tiposNegociacao });
  } catch (error: any) {
    console.error('Erro ao buscar tipos de negociação:', error);
    return NextResponse.json(
      { error: error.message || 'Erro ao buscar tipos de negociação' },
      { status: 500 }
    );
  }
}
