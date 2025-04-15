import serverAuth from "@/lib/serverAuth";
import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest, { params }: { params: { movieid: string } }) {
    try {
        const {currentUser} = await serverAuth(req);
        if (!currentUser) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const { movieid } = await params;

        if(typeof movieid !== "string"){
            return NextResponse.json({ error: "Invalid movie id" }, { status: 400 });
        }

        if(!movieid){
            return NextResponse.json({ error: "Movie id is required" }, { status: 400 });
        }
        const movie = await prismadb.movie.findUnique({
            where: {
                id: movieid
            },
        });
        if(!movie){
            return NextResponse.json({ error: "Movie not found" }, { status: 404 });
        }
        return NextResponse.json(movie, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error }, { status: 400 });

    }
}