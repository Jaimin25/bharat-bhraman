import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/app/_utils/db";

export async function POST(req: NextRequest) {
  const { uid, email } = await req.json();

  const user = await prisma.user.findFirst({
    where: {
      uid: uid,
      email: email,
    },
    select: {
      mobileNo: true,
      emailVerified: true,
    },
  });

  const mobileNo = user?.mobileNo.toString();

  if (user) {
    return NextResponse.json({
      statusCode: 200,
      message: "User Found!",
      userDetails: { uid, email, emailVerified: user.emailVerified, mobileNo },
    });
  } else {
    return NextResponse.json({ statusCode: 404, message: "No User Found!" });
  }
}
