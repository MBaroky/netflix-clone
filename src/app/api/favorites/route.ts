import {delayResponse}  from '@/lib/delayResponse';
import { NextRequest, NextResponse } from "next/server";

import serverAuth from "@/lib/serverAuth";
import prismadb from "@/lib/prismadb";
import { delay, without } from "lodash";

export async function POST(req:NextRequest){
    try{
        const {currentUser} = await serverAuth(req)
        const {movieId} = await req.json();
        const existingMovie = await prismadb.movie.findUnique({
            where: {
                id: movieId
            }
        })

        if(!existingMovie){
            return NextResponse.json({error: 'Invalid ID'}, {status: 422})
        }
        const user = await prismadb.user.update({
            where: {
                email: currentUser.email || ''
            },
            data: {
                favouriteIds: {
                    push: movieId
                }
            }
        })
        return NextResponse.json(user, {status: 200})

    }catch(err){
        console.log(err)
        return NextResponse.json({error: 'Error adding the movie'}, {status: 400})
    }
}

export async function DELETE(req:NextRequest){
    try{
        const {currentUser} = await serverAuth(req)
        const {movieId} = await req.json();
        const existingMovie = await prismadb.movie.findUnique({
            where: {
                id: movieId
            }
        })
        if(!existingMovie){
            return NextResponse.json({error: 'Invalid ID'}, {status: 422})
        }
        // Check if the movie is in the user's favourites
        if(!currentUser?.favouriteIds?.includes(movieId)){
            return NextResponse.json({error: 'Movie not in favourites'}, {status: 422})
        }

        const updatedFavourites = without(currentUser.favouriteIds, movieId)
        const updatedUser = await prismadb.user.update({
            where: {
                email: currentUser.email || ''
            },
            data: {
                favouriteIds: updatedFavourites
            }
        })
        return NextResponse.json(updatedUser, {status: 200})

    }catch(err){
        console.log(err)
        return NextResponse.json({error: 'Error removing the movie'}, {status: 400})
    }
}

export async function GET(req:NextRequest){
    try{
        const {currentUser} = await serverAuth(req)
        const favouriteMovies = await prismadb.movie.findMany({
            where: {
                id: {
                    in: currentUser?.favouriteIds
                }
            }
        })
        // await delayResponse(10000)
        return NextResponse.json(favouriteMovies, {status: 200})
    }catch(err){
        console.log(err)
        return NextResponse.json({error: 'Error fetching the movies'}, {status: 400})
    }
}