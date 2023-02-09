import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from '@models/User';
import connectDB from '../../utils/connectDB';

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
    await connectDB();
    const users = await User.find({});
    res.status(200).json(users);
}
