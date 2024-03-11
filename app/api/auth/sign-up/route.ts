import { NextRequest, NextResponse } from "next/server";
import { AppwriteException } from "appwrite";

import prisma from "@/app/_utils/db";
import { singUpUser } from "@/store/appwriteService";

export async function POST(request: NextRequest) {
  const { fullname, email, mobileNo, password } = await request.json();

  const res = await singUpUser("", fullname, email, password);

  if (res instanceof AppwriteException) {
    return NextResponse.json({ statusCode: res.code, message: res.message });
  } else {
    const createUser = await prisma.user.create({
      data: {
        uid: "z",
        fullname,
        email,
        emailVerified: false,
        mobile: mobileNo.toString(),
      },
    });

    if (createUser) {
      return NextResponse.json({ statusCode: 200, message: "User Created", user: res });
    } else {
      return NextResponse.json({ statusCode: 500, message: "Internal Server Error!" });
    }
  }
}
