import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from '@models/User';
import connectDB from '../../../utils/connectDB';

export default async function userHandler(req: NextApiRequest, res: NextApiResponse) {
    const { query, method } = req;
    await connectDB();
    switch (method) {
        case 'GET':
            // Get data from your database
            const user = await User.findById(query.id);
            res.status(200).json({ id: user._id, name: user.name });
            break;
        case 'PUT':
            // Update or create data in your database
            res.status(200).json({ id: user._id, name: user.name });
            break;
        default:
            res.setHeader('Allow', ['GET', 'PUT']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
