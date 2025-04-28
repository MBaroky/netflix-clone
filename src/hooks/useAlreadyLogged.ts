import { getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function useAlreadyLogged() {
  const router = useRouter();
  //   check if user is already logged in
  useEffect(() => {
    const checkSession = async () => {
      const session = await getSession();
      if (session) {
        router.push(process.env.NEXTAUTH_CALLBACK_URL || "/profiles");
      }
    };
    checkSession();
  }, []);
}
