import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { fullname, email, mobileNo, password } = await request.json();

  return NextResponse.json({ statusCode: 200, details: { fullname, email, mobileNo, password } });
}
