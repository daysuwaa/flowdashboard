import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  // Just log or mock whatever
  console.log("Mock API received:", body);

  return NextResponse.json({ message: "Profile saved successfully!" }, { status: 200 });
}