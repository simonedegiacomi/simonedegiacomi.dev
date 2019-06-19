import React, {Component} from "react";

import File from "../../Models/File";
import Folder from "../../Models/Folder";
import {FileComponent} from "./FileComponent";
import "./FolderComponent.css";

export class FolderComponent extends Component<FolderComponentProps> {

    render(): React.ReactNode {
        const {folder} = this.props;
        return (
            <ul>
                {folder.name}
                {
                    folder.content.map(fileOrFolder => (
                        <li key={Math.random()}>
                            {
                                this.renderFileOrFolder(fileOrFolder)
                            }
                        </li>
                    ))
                }
            </ul>
        );
    }

    renderFileOrFolder(fileOrFolder: File | Folder): React.ReactNode {
        const {onOpenFile } = this.props;
        if (fileOrFolder instanceof File) {
            return <FileComponent file={fileOrFolder} onOpenFile={onOpenFile}/>;
        } else if (fileOrFolder instanceof Folder) {
            return <FolderComponent folder={fileOrFolder} onOpenFile={onOpenFile}/>;
        } else {
            return <p>Unknown item type</p>;
        }
    }
}

interface FolderComponentProps {
    folder: Folder,
    onOpenFile: (fileToOpen: File) => void
}
