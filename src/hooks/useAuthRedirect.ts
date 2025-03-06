import { NextPageContext } from "next";
import { getSession } from "next-auth/react"

export default async (context: NextPageContext) => {
    const session = await getSession();
    console.log(session)
    if (!session) {
      return {
        redirect: {
          destination: "/auth",
          permanent: false,
        },
      };
    }
    return {
      props: {},
    };
}