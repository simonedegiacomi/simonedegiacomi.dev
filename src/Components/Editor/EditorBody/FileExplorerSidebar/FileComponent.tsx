import React, {Component} from "react";

import FileIcon from "../../../../icons/file.svg";
import File from "../../../../Models/File";
import "./FileComponent.css";

export class FileComponent extends Component<FileComponentProps> {

    render(): React.ReactNode {
        const {file, onOpenFile} = this.props;
        return (
            <div onClick={() => onOpenFile(file)} className="file-icon-and-name">
                <img src={FileIcon} className="file-icon"/>
                {file.name}
            </div>
        );
    }
}

interface FileComponentProps {
    file: File,
    onOpenFile: (fileToOpen: File) => void
}
