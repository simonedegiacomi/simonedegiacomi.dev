import React, {Component} from "react";

import FileIcon from "../../../../../icons/file.svg";
import File from "../../../../../Models/File";
import "./FileComponent.css";

export class FileComponent extends Component<FileComponentProps> {

    render(): React.ReactNode {
        const {file} = this.props;
        return (
            <span onClick={this.onOpenFile} className="file-icon-and-name">
                <img alt="file icon" src={FileIcon} className="file-icon"/>
                {file.name}
            </span>
        );
    }

    onOpenFile = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        this.props.onOpenFile(this.props.file);
    }
}

interface FileComponentProps {
    file: File,
    onOpenFile: (fileToOpen: File) => void
}
