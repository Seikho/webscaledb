export declare type Config = {
    [key: string]: any;
};
export declare function backup(filename: string, callback?: (error?: any) => void): void;
export declare function restore(filename: string, callback?: (error?: any, store?: Config) => void): void;
export declare function get(key?: string): any | undefined;
export declare function set(key: string, value: any): void;
