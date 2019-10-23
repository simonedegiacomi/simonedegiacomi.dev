import React, {Component, MouseEventHandler} from "react";
import classNames from 'classnames';

import File from "../../../../../Models/File";
import Folder from "../../../../../Models/Folder";
import {FileComponent} from "./FileComponent";
import "./FolderComponent.css";
import FolderToggleTriggerIcon from "../../../../../icons/folder-arrow.svg";

export class FolderComponent extends Component<FolderComponentProps, FolderComponentState> {

    state: FolderComponentState = {
        expanded: true
    };

    render(): React.ReactNode {
        const {folder} = this.props;
        const {expanded} = this.state;
        return (
            <div onClick={this.handleClick}
                 className={classNames({folder: true, expanded})}>
                <div className="folder-name-and-toggler">
                    {
                        !folder.isRoot() &&
                        <img alt="folder icon" src={FolderToggleTriggerIcon} className="folder-toggler"/>
                    }
                    {folder.name}
                </div>
                {
                    this.renderChildren()
                }
            </div>
        );
    }

    handleClick:MouseEventHandler = (e) => {
        e.stopPropagation();
        if (!this.props.folder.isRoot()) {
            this.setState(({expanded}, _) => ({expanded: !expanded}));
        }
    };

    renderChildren() {
        const {folder} = this.props;
        return (
            <ul>
                {
                    folder.content.map(fileOrFolder => (
                        <li key={fileOrFolder.getPath()}>
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
        const {onOpenFile} = this.props;
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

interface FolderComponentState {
    expanded: boolean
}
