import React, {Component} from 'react';

import File from "../../../../Models/File";
import {Tab} from "./Tab";
import "./TabManager.css"
import {FileCloser, FileOpener} from "../../Editor";

export default class TabManager extends Component<TabManagerProps> {

    render(): React.ReactNode {
        const {openedFiles, currentFile, onOpenFile, onCloseFile} = this.props;
        return (
            <div className="tabs-container">
                {
                    openedFiles.map(file => (
                        <Tab key={file.name}
                             file={file}
                             isCurrent={file === currentFile}
                             onSelectFile={() => onOpenFile(file)}
                             onCloseFile={() => onCloseFile(file)}/>
                    ))
                }
            </div>
        );
    }
}


interface TabManagerProps extends FileOpener, FileCloser {
    currentFile: File | null,
    openedFiles: File[]
}
