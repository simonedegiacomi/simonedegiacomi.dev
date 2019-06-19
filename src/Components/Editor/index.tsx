import React, {Component} from "react";

import "./Editor.css";
import EditorHeader from "../EditorHeader";
import FileExplorerSidebar from "../FileExplorerSidebar";
import TabManager from "../TabManager";
import FileViewer from "../FileViewer";
import EditorFooter from "../EditorFooter/EditorFooter";
import File from "../../Models/File";
import Folder from "../../Models/Folder";
import FilesService from "../../Services/FilesService";
import {file} from "@babel/types";

export default class Editor extends Component<any, EditorState> {

    state: EditorState = {
        root: null,
        openedFiles: [],
        currentFile: null
    };

    async componentDidMount() {
        await this.fetchRoot();
    }

    async fetchRoot() {
        try {
            const root = await FilesService.getRoot();
            this.setState({root});
        } catch (e) {
            console.error(e);
        }
    }

    render(): React.ReactNode {
        return (
            <div className="editor">
                <EditorHeader/>
                <EditorBody {...this.state} onOpenFile={this.handleOpenFile} onCloseFile={this.handleCloseFile}/>
                <EditorFooter/>
            </div>
        );
    }

    handleOpenFile = (fileToOpen: File) => {
        this.setState({
           openedFiles: [...this.state.openedFiles, fileToOpen],
           currentFile: fileToOpen
        });
    };

    handleCloseFile = (fileToClose: File) => {
    };
}

interface EditorState {
    root: Folder | null,
    openedFiles: File[],
    currentFile: File | null
}

const EditorBody: React.FunctionComponent<EditorBodyProps> = ({root, openedFiles, currentFile, onOpenFile}) => (
    <div className="editor-body">
        <FileExplorerSidebar root={root} currentFile={currentFile} onOpenFile={onOpenFile}/>

        {/*<div>
            <TabManager openedFiles={openedFiles}/>
            <FileViewer currentFile={currentFile}/>
        </div>*/}
    </div>
);

interface EditorBodyProps extends EditorState {
    onOpenFile: (fileToOpen: File) => void,
    onCloseFile: (fileToClose: File) => void
}
