import { NextRequest, NextResponse } from "next/server";

import serverAuth from "@/lib/serverAuth";
import prismadb from "@/lib/prismadb";

async function handler(req: NextRequest) {
    if (req.method !== 'GET') {
        return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
    }

    try {
        await serverAuth(req);

        const movies = await prismadb.movie.findMany();

        return NextResponse.json(movies, { status: 200 });

    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: err }, { status: 400 });
    }
}

export {handler as POST, handler as GET};