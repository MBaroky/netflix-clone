import { NextRequest, NextResponse } from "next/server";

import serverAuth from "@/lib/serverAuth";
import { NextApiResponse } from "next";

async function handler(req: NextRequest) {
    if (req.method !== 'GET') {
        return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
    }

    try {
        const { currentUser } = await serverAuth(req);

        return NextResponse.json(currentUser, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error }, { status: 400 });
    }
}

export {handler as POST, handler as GET};