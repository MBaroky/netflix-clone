"use client";
import { getSession } from "next-auth/react"
import { redirect } from "next/navigation";
import { useEffect } from "react";

export const useAuthRedirect =  () => {

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      if (!session) {
        redirect("/auth");
      }
    };
    fetchSession();
  }, []);
}