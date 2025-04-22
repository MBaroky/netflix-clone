"use client"

import useSWR from "swr"; // like reactQuery

import fetcher from "@/lib/fetcher"

const useMovie = (id?:string) => {
    const {data, error, isLoading} = useSWR(id?`/api/movies/${id}`:null, fetcher,{
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateIfStale: false,
        // fallbackData: {
        //     title: "Loading ..."
        // }, // Provide fallback data for SSR
        // suspense: true,
    });


    return {data, error, isLoading};
};

export default useMovie;