import React, {Component} from 'react';
import Folder from "../../Models/Folder";
import File from "../../Models/File";

export default class TabManager extends Component<TabManagerProps> {

    render(): React.ReactNode {
        const {currentFile} = this.props;
        return (
            <div>
                {currentFile ? currentFile.name : 'No files open'}
            </div>
        );
    }
}


interface TabManagerProps {
    currentFile: File | null,
    openedFiles: File[]
}


