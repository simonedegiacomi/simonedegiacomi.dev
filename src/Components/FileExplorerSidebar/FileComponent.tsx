import {Component} from "react";
import React from "react";
import File from "../../Models/File";

export class FileComponent extends Component<FileComponentProps> {

    render(): React.ReactNode {
        const {file, onOpenFile} = this.props;
        return (
            <div onClick={() => onOpenFile(file)}>
                {file.name}
            </div>
        );
    }
}

interface FileComponentProps {
    file: File,
    onOpenFile: (fileToOpen: File) => void
}
