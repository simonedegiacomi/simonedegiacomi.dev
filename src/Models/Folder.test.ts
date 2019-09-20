import Folder from "./Folder";
import File from "./File";

describe('Folder unit test', () => {
    it('getFile() returns a file from the root', () => {
        // given
        const root = Folder.createRoot();
        const file = new File(root, 'test.md');
        root.add(file);

        // when
        const foundFile = root.getFileOrNull('/test.md');

        // then
        expect(foundFile).toBeTruthy();
        expect(foundFile.getPath()).toBe('/test.md');
    });

    it('getFile() returns a file from a folder', () => {
        // given
        const root = Folder.createRoot();
        const folder = new Folder(root, 'folder');
        root.add(folder);
        const file = new File(folder, 'test.md');
        folder.add(file);

        // when
        const foundFile = root.getFileOrNull('/folder/test.md');

        // then
        expect(foundFile).toBeTruthy();
        expect(foundFile.getPath()).toBe('/folder/test.md');
    });

    it("getFile() throws an exception if the file doesn't exist", () => {
        // given
        const root = Folder.createRoot();

        expect(() => root.getFileOrNull('/test.md'))
            .toThrow(new Error("file not found"));
    });

});
