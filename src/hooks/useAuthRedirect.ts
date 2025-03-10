import { getSession } from "next-auth/react"
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default () => {

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