import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');

  // Call your FastAPI backend here to fetch products
  const res = await fetch(`http://localhost:8000/search/?query=${query}`);
  const products = await res.json();

  return NextResponse.json(products);
}