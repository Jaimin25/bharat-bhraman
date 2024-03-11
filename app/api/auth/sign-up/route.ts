import { NextRequest, NextResponse } from "next/server";
import { ID } from "node-appwrite";

import { singUpUser } from "@/store/appwriteService";

export async function POST(request: NextRequest) {
  const { fullname, email, mobileNo, password } = await request.json();

  const res = await singUpUser(ID.unique(), fullname, email, password);
  console.log(mobileNo);
  if (res) {
    return NextResponse.json({ statusCode: 200, message: "User Created", user: res });
  } else {
    return NextResponse.json({ statusCode: 500, message: "Error Creating User" });
  }
}
