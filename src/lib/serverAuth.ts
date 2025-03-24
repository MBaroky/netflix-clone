import next, { NextApiRequest } from "next";
import { NextRequest } from "next/server";
import { getSession } from "next-auth/react";

import prismadb from '@/lib/prismadb';
import { getServerSession } from "next-auth";
import { authOptions } from "./authOptions";


const serverAuth = async (req: NextRequest) => {
    // const session = await getSession({ req });
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
        throw new Error('Unauthorized');
    }

    const currentUser = await prismadb.user.findUnique({
        where: {
            email: session.user.email,
        },
    });

    if(!currentUser){
        throw new Error('Unauthorized');
    }

    return {currentUser};
}

export default serverAuth;