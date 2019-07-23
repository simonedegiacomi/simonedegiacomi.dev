import React, {Component, ReactNode} from "react";

import "./FileExplorerSidebar.css";
import File from "../../../../Models/File";
import Folder from "../../../../Models/Folder";
import {FolderComponent} from "./FolderComponent";
import {FileOpener} from "../../Editor";

export default class FileExplorerSidebar extends Component<FileExplorerSidebarProps> {

    render(): ReactNode {
        const {root, onOpenFile} = this.props;
        return (
            <div className={this.getClasses()}>
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

    getClasses () {
        let classes = "file-explorer-sidebar ";
        if (this.props.mobileMenuOpen) {
            classes += "mobile-menu-open"
        }
        return classes;
    }

}

interface FileExplorerSidebarProps extends FileOpener{
    root: Folder | null,
    currentFile: File | null,
    mobileMenuOpen: boolean
}


