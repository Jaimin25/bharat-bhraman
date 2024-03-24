import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/src/app/_utils/db";
import { validateUser } from "@/src/app/api/lib/validate-user";

export async function POST(req: NextRequest) {
  const { uid, email, sessionId } = await req.json();

  const authenticatedUser = await validateUser(uid, sessionId);

  if (!authenticatedUser) {
    return NextResponse.json({ statusCode: 401, message: "Uauthorized!" });
  }

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
