"use server";
import { cache } from "react";

type FetchResult<T> = {
  data?: T;
  error?: string;
  isLoaded: boolean;
  mutate: () => Promise<T | undefined>;
};

const fetchFromAPI = cache(async <T>(url: string): Promise<FetchResult<T>> => {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch data");

    const data = await res.json();
    return { data, isLoaded: true,       mutate: async () => {
        const freshData = await fetch(url, { cache: "no-store" }).then((res) => res.json());
        return freshData;
      } };
  } catch (err: any) {
    return { error: err.message, isLoaded: true,       mutate: async () => {
        const freshData = await fetch(url, { cache: "no-store" }).then((res) => res.json());
        return freshData;
      } };
  }
});

export default fetchFromAPI;