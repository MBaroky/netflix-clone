"use client"

import useSWR from "swr"; // like reactQuery

import fetcher from "@/lib/fetcher"

const useMovieList = () => {
    const {data, error, isLoading} = useSWR("/api/movies", fetcher,{
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateIfStale: false,
        // refreshInterval: 0,
        // dedupingInterval: 60000,
    });




    return {data, error, isLoading};
};

export default useMovieList;