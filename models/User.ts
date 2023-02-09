import mongoose, { Model } from 'mongoose';
import type { IUser } from '@interfaces';

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        avatar: String
    },
    {
        collection: 'users',
        timestamps: true,
        toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
        toObject: { virtuals: true } // So `console.log()` and other functions that use `toObject()` include virtuals
    }
);

export const User =
    (mongoose.models.User as Model<IUser>) || mongoose.model<IUser>('User', userSchema);
