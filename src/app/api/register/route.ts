import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { email, name, password } = body;

        const existingUser = await prismadb.user.findUnique({
            where: {
                email
            }
        });

        if (existingUser) {
            return NextResponse.json({ error: 'User already exists' }, { status: 422 });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prismadb.user.create({
            data: {
                email,
                name,
                hashedPassword,
                image: "",
                emailVerified: new Date(),
            },
        });

        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}