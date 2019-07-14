import Folder from "./Folder";

export default class File {

    constructor(
        public readonly container: Folder,
        public readonly name: string
    ) { }


    getPath () {
        return this.container.getPath() + this.name;
    }
}
