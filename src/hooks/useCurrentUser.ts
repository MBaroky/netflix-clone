"use client"

import useSWR from "swr"; // like reactQuery

import fetcher from "@/lib/fetcher"
import { useServerFetch } from "./useServerFetch";

const useCurrentUser = () => {
    const {data, error, isLoading, mutate} = useSWR("/api/current", fetcher);

    // const { loading: isLoading, error, data } = useServerFetch<any>('/api/current');


    return {data, error, isLoading, mutate};
    // return {data, error, isLoading};
};

export default useCurrentUser;