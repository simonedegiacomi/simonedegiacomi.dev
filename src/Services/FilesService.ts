import File from "../Models/File";
import Folder from "../Models/Folder";

export default {

    async getFileIndex(): Promise<(Folder | File)[]> {
        return [];
    },

    async getFileContent(file: File): Promise<string> {
        return "";
    }
}
