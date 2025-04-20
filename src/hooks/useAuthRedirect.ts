import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation";
import { env } from "process";

export const useAuthRedirect = async () => {

      const session = await getServerSession(authOptions);
      if (!session) {
        redirect(env.NEXTAUTH_LOGIN_URL || "/login");
      }
}