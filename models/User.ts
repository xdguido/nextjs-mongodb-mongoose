import { Schema, model } from 'mongoose';

const userSchema = new Schema(
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

export const User = model('User', userSchema);
