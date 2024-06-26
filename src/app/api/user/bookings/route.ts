import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/src/app/_utils/db";

import { validateUser } from "../../lib/validate-user";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const uid = searchParams.get("uid") as string;
  const email = searchParams.get("email") as string;
  const sessionId = searchParams.get("sessionId") as string;
  const authenticatedUser = await validateUser(uid, sessionId);

  if (!authenticatedUser) {
    return NextResponse.json({ statusCode: 401, message: "Uauthorized!" });
  }

  const bookings = await prisma.bookingQuery.findMany({
    where: {
      uid: uid,
      email: email,
    },
  });

  if (bookings) {
    return NextResponse.json({ statusCode: 200, message: "Booking Queries Found!", details: bookings });
  } else {
    return NextResponse.json({ statusCode: 400, message: "No Query Found!" });
  }
}

export async function DELETE(request: NextRequest) {
  const { uid, email, sessionId, bookingId } = await request.json();

  const authenticatedUser = await validateUser(uid, sessionId);

  if (!authenticatedUser) {
    return NextResponse.json({ statusCode: 401, message: "Uauthorized!" });
  }

  const deleteBooking = await prisma.bookingQuery.delete({
    where: {
      id: bookingId,
      uid: uid,
      email: email,
    },
  });

  if (deleteBooking) {
    return NextResponse.json({ statusCode: 200, message: "Booking Deleted!" });
  } else {
    return NextResponse.json({ statusCode: 500, message: "Internal Server Error" });
  }
}
