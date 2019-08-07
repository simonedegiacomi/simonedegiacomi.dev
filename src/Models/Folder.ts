import File from "./File";

export default class Folder {

    content: (File|Folder)[] = [];

    static createRoot(): Folder {
        return new Folder(null, '');
    }

    constructor(
        public readonly parentFolder: Folder | null,
        public readonly name: string
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

    getFile(filePath: string): File|Folder {
        console.log('searching', filePath)
        const pieces = filePath.split('/');

        if (pieces[0] === this.name) {
            pieces.splice(0, 1);
        } else {
            throw new Error('file not found');
        }

        for (const item of this.content) {
            if (item.name === pieces[0]) {
                if (item instanceof File) {
                    return item;
                } else {
                    return item.getFile(pieces.join('/'));
                }
            }
        }

        throw new Error('file not found');
    }
}
