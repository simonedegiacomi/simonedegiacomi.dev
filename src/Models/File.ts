
export default class File {
    constructor (
        public readonly parentFolder: string,
        public readonly name: string
    ) {}

    get slug (): string {
        return "";
    }
}
