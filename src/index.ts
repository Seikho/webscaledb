import {readFile, writeFile} from 'fs';

let webscaleDb: { [key: string]: any } = {};

export function backup(filename: string, callback?: (error?: any) => void) {
    const json = JSON.stringify(webscaleDb);
    writeFile(filename, json, callback || (() => {}));
}

export function restore(filename: string, callback?: (error?: any, store?: typeof webscaleDb) => void) {
    readFile(filename, (error, data) => {
        if (callback == null) return;

        if (error) return callback(error);

        try {
            const parsed = JSON.parse(data.toString());
            webscaleDb = parsed;
            callback(null, parsed);
        }
        catch (ex) {
            callback(ex);
        }
    })
}

export function get(key?: string): any | undefined {
    if (key === undefined) {
        return webscaleDb;
    }

    return webscaleDb[key];
}

export function set(key: string, value: any): void {
    webscaleDb[key] = value;
}
