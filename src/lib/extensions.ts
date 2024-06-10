/**
 * Alias for Array.some
 * @param this 
 * @param predicate 
 * @returns 
 */
function any<T>(this: Array<T>,predicate: (item: T) => boolean): boolean {
    return this.some(predicate);
}
/**
 * Alias for Array.filter
 * @param this 
 * @param predicate 
 * @returns 
 */
function where<T>(this: Array<T>,predicate: (item: T) => boolean): T[] {
    return this.filter(predicate);
}

interface Array<T> { 
    any(predicate: (item: T) => boolean): boolean;
    where(predicate: (item: T) => boolean): T[];
}
Array.prototype.any = any;
Array.prototype.where = where;

interface Window {
    showDirectoryPicker(options?: {
        id?: any,
        mode?: "read" | "readwrite", 
        startIn?: FileSystemFileHandle | ("desktop" | "documents" | "downloads" | "music" | "pictures" | "videos")
    }): Promise<FileSystemDirectoryHandle>;
}