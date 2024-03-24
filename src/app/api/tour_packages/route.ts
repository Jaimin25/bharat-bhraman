import { NextResponse } from "next/server";

import { prisma } from "../../_utils/db";
export async function GET() {
  const tourPackages = await prisma.package.findMany({
    select: {
      pID: true,
      images: true,
      packageTitle: true,
      price: true,
      locations: true,
      duration: true,
      createdAt: true,
      updatedAt: true,
      available: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  if (tourPackages) {
    return NextResponse.json({ statusCode: 200, message: "Packages Found!", details: tourPackages });
  } else {
    return NextResponse.json({
      statusCode: 404,
      message: "No Package Found!",
    });
  }
}
