import fs from 'fs';
import util from 'util';
import path from 'path';
import mongoose from 'mongoose';
import user from './seeds/user.seed';

const readDir = util.promisify(fs.readdir);

const toTitleCase = (str: string) => {
    return str.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
    });
};

// Load seeds of all models
export default async function seedDB(runMongoSaveMiddleware: boolean = false) {
    const seedFilesPath = path.resolve(process.cwd(), 'test/seeds');
    const dir = await readDir(seedFilesPath);
    const seedFiles = dir.filter((f) => f.endsWith('.seed.ts'));

    for (const file of seedFiles) {
        const fileName = file.split('.seed.ts')[0];
        const modelName = toTitleCase(fileName);
        const model = mongoose.models[modelName];

        if (!model) throw new Error(`Cannot find Model '${modelName}'`);
        let fileContents;

        switch (fileName) {
            case 'user':
                fileContents = user;
                break;
            default:
                return console.log('No seeds found');
        }

        runMongoSaveMiddleware
            ? await model.create(fileContents)
            : await model.insertMany(fileContents);
    }
}
