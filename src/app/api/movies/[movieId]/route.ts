import { delayResponse } from '@/lib/delayResponse';
import serverAuth from "@/lib/serverAuth";
import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest, props: { params: Promise<{ movieId: string }> }) {
    const params = await props.params;
    try {
        const { currentUser } = await serverAuth(req);
        if (!currentUser) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const { movieId } = params;

        if (typeof movieId !== "string") {
            return NextResponse.json({ error: "Invalid movie id" }, { status: 400 });
        }

        if (!movieId) {
            return NextResponse.json({ error: "Movie id is required" }, { status: 400 });
        }


        const movie = await prismadb.movie.findUnique({
            where: {
                id: movieId
            },
        });

        if (!movie) {
            return NextResponse.json({ error: "Movie not found" }, { status: 404 });
        }

        await delayResponse(10000);

        return NextResponse.json(movie, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error }, { status: 400 });
    }
}