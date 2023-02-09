import fs from 'fs';
import util from 'util';
import path from 'path';
import mongoose from 'mongoose';

const readDir = util.promisify(fs.readdir);

const toTitleCase = (str: string) => {
    return str.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};

const seedFilesPath = path.resolve(__dirname, '../../../../test/seeds');

// Load seeds of all models
export default async function seedDB(runMongoSaveMiddleware: boolean = false) {
    const dir = await readDir(seedFilesPath);
    const seedFiles = dir.filter((f) => f.endsWith('.seed.ts'));

    for (const file of seedFiles) {
        const fileName = file.split('.seed.ts')[0];
        const modelName = toTitleCase(fileName);
        const model = mongoose.models[modelName];

        if (!model) throw new Error(`Cannot find Model '${modelName}'`);
        const fileContents = await import(path.join(seedFilesPath, file));

        runMongoSaveMiddleware
            ? await model.create(fileContents.default)
            : await model.insertMany(fileContents.default);
    }
}
