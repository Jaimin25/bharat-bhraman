import { NextRequest, NextResponse } from "next/server";

import { BookingQuery } from "@prisma/client";

import { validateUser } from "../../lib/validate-user";

import { prisma } from "./../../../_utils/db";

export async function POST(request: NextRequest) {
  const { values, sessionId }: { values: BookingQuery; sessionId: string } = await request.json();

  const authenticatedUser = await validateUser(values.uid, sessionId);

  if (!authenticatedUser) {
    return NextResponse.json({ statusCode: 401, message: "Uauthorized!" });
  }

  const checkIfQueryExists = await prisma.bookingQuery.findFirst({
    where: {
      uid: values.uid,
      pID: values.pID,
    },
  });

  if (!checkIfQueryExists) {
    const query = await prisma.bookingQuery.create({
      data: {
        id: values.id,
        uid: values.uid,
        pID: values.pID,
        packageTitle: values.packageTitle,
        fullname: values.fullname,
        email: values.email,
        mobileNo: values.mobileNo,
        adults: String(values.adults),
        child: String(values.child),
        infant: String(values.infant),
        status: values.status,
      },
    });

    if (query) {
      return NextResponse.json({ statusCode: 200, message: "Booking Query Successfully Added!", queryDetails: query });
    }
  } else {
    return NextResponse.json({ statusCode: 403, message: "Booking Query Already Present!" });
  }
}
