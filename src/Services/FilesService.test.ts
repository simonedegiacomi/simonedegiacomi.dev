import FilesService from "./FilesService";
import Folder from "../Models/Folder";

it('parses correctly the received json', async () => {
    // given
    const fileList = [{
        "name": "Projects",
        "type": "folder",
        "content": [{
            "name": "Future",
            "type": "folder",
            "content": [{
                "name": "Next project.md",
                "type": "file"
            }]
        }, {
            "name": "Portfolio.md",
            "type": "file"
        }]
    }, {
        "name": "About me.md",
        "type": "file"
    }];
    mockJestToReturn(fileList);

    // when
    const root = await FilesService.getRoot();

    // then
    expect(root.content).toHaveLength(2);

    const projectFolder = root.content[0] as Folder;
    expect(projectFolder.name).toBe("Projects");
    expect(projectFolder.content).toHaveLength(2);

    const aboutMeFile = root.content[1];
    expect(aboutMeFile.name).toBe("About me.md");
});

const mockJestToReturn = (result) => jest.spyOn(global, "fetch")
    .mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(result)
    }));
