import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  console.log("Token from middleware:", token);

  return NextResponse.next(); // Allow the request to proceed
}

export const config = {
  matcher: ["/","/sign-in"],
};
