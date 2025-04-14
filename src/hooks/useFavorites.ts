"use client"

import useSWR from "swr"; // like reactQuery

import fetcher from "@/lib/fetcher"

const useFavorites = () => {
    const {data, error, isLoading, mutate} = useSWR("/api/favorites", fetcher, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateIfStale: false,
    });

    return {data, error, isLoading, mutate};
};

export default useFavorites;