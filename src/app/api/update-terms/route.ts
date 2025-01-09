import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOption);

    if (!session) {
      return NextResponse.json(
        { message: "Not authenticated" },
        { status: 401 }
      );
    }

    const userEmail = session.user?.email;
    console.log("User email:", userEmail);

    if (!userEmail) {
      return NextResponse.json(
        { message: "User email not found" },
        { status: 400 }
      );
    }

    // Update `hasAgreedTerms` using Prisma
    await prisma.user.update({
      where: { email: userEmail },
      data: { hasAgreedTerms: true },
    });

    return NextResponse.json({
      message: "Terms and conditions accepted.",
    });
  } catch (error) {
    console.error("Error updating terms agreement:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
