import { NextRequest, NextResponse } from "next/server";

import serverAuth from "@/lib/serverAuth";
import prismadb from "@/lib/prismadb";

async function handler(req: NextRequest) {
    if (req.method !== 'GET') {
        return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
    }

    try {
        await serverAuth(req);

        const movieCount = await prismadb.movie.count();
        const randomIndex = Math.floor(Math.random() * movieCount);
        const randomMovie = await prismadb.movie.findMany({
            take: 1,
            skip: randomIndex,
        });

        if (randomMovie.length === 0) {
            return NextResponse.json({ error: 'No movies found' }, { status: 404 });
        }

        return NextResponse.json(randomMovie[0], { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error }, { status: 400 });
    }
}

export {handler as POST, handler as GET};