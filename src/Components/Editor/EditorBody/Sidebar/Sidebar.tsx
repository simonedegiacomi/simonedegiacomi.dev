import React, {Component, ReactNode} from "react";

import "./Sidebar.css";
import {FileOpener} from "../../Editor";
import FileExplorer, {FileExplorerProps} from "./FileExplorer/FileExplorer";
import Contacts from "./Contacts";

export default class Sidebar extends Component<SidebarProps> {

    render(): ReactNode {
        const {root, onOpenFile, currentFile} = this.props;
        return (
            <div className={this.getClasses()}>
                <FileExplorer root={root} onOpenFile={onOpenFile} currentFile={currentFile}/>
                <Contacts/>
            </div>
        );
    }

    getClasses() {
        let classes = "sidebar ";
        if (this.props.mobileMenuOpen) {
            classes += "mobile-menu-open"
        }
        return classes;
    }

}

interface SidebarProps extends FileOpener, FileExplorerProps {
    mobileMenuOpen: boolean
}


