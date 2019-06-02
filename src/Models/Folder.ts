import File from "./File";

export default class Folder {

    constructor(
        public readonly name: string,
        public readonly content: (Folder|File)[]
    ) {}
}
