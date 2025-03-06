import { NextApiRequest, NextApiResponse } from "next";

import serverAuth from "@/lib/serverAuth";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { currentUser } = await serverAuth(req);

        return res.status(200).json(currentUser);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error });
    }
}

export {handler as POST, handler as GET};