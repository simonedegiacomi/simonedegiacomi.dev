import File from "./File";

export default class Folder {

    content: (File|Folder)[] = [];

    static createRoot(): Folder {
        return new Folder(null, null);
    }

    constructor(
        public readonly parentFolder: Folder | null,
        public readonly name: string | null
    ) { }


    isRoot(): boolean {
        return this.parentFolder === null;
    }

    add(fileOrFolder: (File | Folder)) {
        this.content.push(fileOrFolder);
    }

    getPath (): string {
        if (this.isRoot()) {
            return '/';
        }
        // @ts-ignore
        return `${this.parentFolder.getPath()}${this.name}/`;
    }

}
