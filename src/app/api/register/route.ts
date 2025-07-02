import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import { errorMessages } from "@/utils/constants";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, name, password } = body;

    // Input validation (you can customize this as needed)
    if (!email || !name || !password) {
      return  NextResponse.json(
        { error: errorMessages.EmptyInput },
        { status: 422 }
      );
    }

    const existingUser = await prismadb.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: errorMessages.DuplicateUser },
        { status: 422 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        image: "",
        emailVerified: new Date(),
        profiles: {
          create: {
            name: name || "New Profile",
          },
        },
      },
    });

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: errorMessages.default },
      { status: 500 }
    );
  }
}
