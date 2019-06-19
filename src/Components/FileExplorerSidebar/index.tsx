import React, {Component, ReactNode} from "react";

import "./FileExplorerSidebar.css";
import File from "../../Models/File";
import Folder from "../../Models/Folder";
import {FolderComponent} from "./FolderComponent";

export default class FileExplorerSidebar extends Component<FileExplorerSidebarProps> {

    render(): ReactNode {
        const {root, onOpenFile} = this.props;
        return (
            <div className="file-explorer-sidebar">
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

interface FileExplorerSidebarProps {
    root: Folder | null,
    currentFile: File | null,
    onOpenFile: (fileToOpen: File) => void
}


