import File from "../Models/File";
import Folder from "../Models/Folder";

const FILE_INDEX_URL = '/files/index.json';

export default {

    async getRoot(): Promise<Folder> {
        const jsonRoot = await getAsJson(FILE_INDEX_URL);
        return mapJsonFolderToRoot(jsonRoot);
    },

    async getFileContent(file: File): Promise<string> {
        return "";
    }
}

const getAsJson = async (url: string): Promise<any> => {
    const res = await fetch(url);
    return await res.json();
};

const mapJsonFolderToRoot = (jsonFolder: any[]): Folder => {
    const root = Folder.createRoot();
    insertFilesAndFoldersInFolder(root, jsonFolder);
    return root;
};

const insertFilesAndFoldersInFolder = (container: Folder, jsonFolder: any[]) => {
    jsonFolder.forEach(jsonFileOrFolder => {
        if (jsonFileOrFolder.type === "file") {
            container.add(new File(container, jsonFileOrFolder.name));
        } else {
            const folder = new Folder(container, jsonFileOrFolder.name);
            insertFilesAndFoldersInFolder(folder, jsonFileOrFolder.content);
            container.add(folder);
        }
    });
};

