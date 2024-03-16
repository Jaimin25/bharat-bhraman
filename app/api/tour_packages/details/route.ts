import { NextRequest, NextResponse } from "next/server";

import { prisma } from "./../../../_utils/db";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const pID = searchParams.get("data") as string;

  const packageDetails = await prisma.package.findUnique({
    where: {
      pID: pID,
    },
  });

  if (packageDetails) {
    return NextResponse.json({ statusCode: 200, message: "Package Found!", details: packageDetails });
  } else {
    return NextResponse.json({ statusCode: 404, message: "No Packaged Found!" });
  }
}
