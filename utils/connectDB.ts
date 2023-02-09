import mongoose from 'mongoose';

export default async function connectDB() {
    if (!mongoose.connection.readyState) {
        mongoose.set('strictQuery', true);
        mongoose.set('debug', true);
        const conn = await mongoose.connect('mongodb://localhost:27017/dev-test');
    }
}
