import { NextRequest, NextResponse } from "next/server";
import { AppwriteException } from "appwrite";
import { v4 as uuidv4 } from "uuid";

import { prisma } from "@/src/app/_utils/db";
import { singUpUser } from "@/src/store/appwriteService";

export async function POST(request: NextRequest) {
  const { fullname, email, mobileNo, password } = await request.json();

  const uuid = uuidv4();

  const userExists = await prisma.user.findFirst({
    where: {
      OR: [
        {
          email,
        },
        {
          mobileNo,
        },
      ],
    },
  });

  if (userExists)
    return NextResponse.json({ statusCode: 403, message: "User already exists with email or mobile no.!" });

  const createUser = await prisma.user.create({
    data: {
      uid: uuid,
      fullname,
      email,
      emailVerified: false,
      mobileNo: mobileNo,
    },
  });

  if (!createUser) {
    return NextResponse.json({ statusCode: 500, message: "Internal Server Error!" });
  }

  const res = await singUpUser(uuid, fullname, email, password);

  if (res instanceof AppwriteException) {
    return NextResponse.json({ statusCode: res.code, message: res.message });
  } else {
    return NextResponse.json({ statusCode: 200, message: "User Created!" });
  }
}
