import mongoose from 'mongoose';
import seedDB from '../test/seedDB';
import colors from 'colors';

export default async function connectDB() {
    if (!mongoose.connection.readyState) {
        mongoose.set('strictQuery', true);
        mongoose.set('debug', true);
        const conn = await mongoose.connect('mongodb://localhost:27017/nextjs-mongodb-demo');
        if (conn) {
            console.log(colors.cyan(`MongoDB Connected: ${conn.connection.host}`));
            await seedDB(true);
        }
    }
}
