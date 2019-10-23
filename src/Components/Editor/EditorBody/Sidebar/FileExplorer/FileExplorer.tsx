import React, {Component, ReactNode} from "react";

import File from "../../../../../Models/File";
import Folder from "../../../../../Models/Folder";
import {FolderComponent} from "./FolderComponent";
import {FileOpener} from "../../../Editor";

export default class FileExplorer extends Component<FileExplorerProps> {

    render(): ReactNode {
        const {root, onOpenFile} = this.props;
        return (
            <div className="file-explorer">
                {
                    !root &&
                    <p>Please wait</p>
                }

                {
                    root &&
                    <FolderComponent folder={root} onOpenFile={onOpenFile}/>
                }
            </div>
        );
    }

}

export interface FileExplorerProps extends FileOpener {
    root: Folder | null,
    currentFile: File | null
}
