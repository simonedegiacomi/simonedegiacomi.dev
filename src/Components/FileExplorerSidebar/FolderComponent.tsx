import React, {Component} from "react";

import File from "../../Models/File";
import Folder from "../../Models/Folder";
import {FileComponent} from "./FileComponent";
import "./FolderComponent.css";

export class FolderComponent extends Component<FolderComponentProps,FolderComponentState> {

    state: FolderComponentState = {
        expanded: true
    };

    render(): React.ReactNode {
        const {folder} = this.props;
        return (
            <div className={ this.getClasses() } onClick={this.handleClick}>
                {folder.name}
                <ul>
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
            </div>
        );
    }

    getClasses () {
        let classes = 'folder ';
        if (this.props.folder.isRoot()) {
            classes += 'root ';
        }
        if (this.state.expanded) {
            classes += 'expanded';
        }
        return classes
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

    handleClick = () => this.setState(({expanded}, _) => ({expanded: !expanded}))
}

interface FolderComponentProps {
    folder: Folder,
    onOpenFile: (fileToOpen: File) => void
}

interface FolderComponentState {
    expanded:boolean
}
