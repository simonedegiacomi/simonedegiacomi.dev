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

    // TODO: Maybe rename to showFile
    handleOpenFile = (fileToOpen: File) => this.setState(state => {
        if (this.isFileAlreadyOpenInState(state, fileToOpen)) {
            return this.getStateUpdateWithFileAsCurrent(fileToOpen);
        } else {
          return this.getStateUpdateWithNewOpenFile(state, fileToOpen);
        }
    });


    isFileAlreadyOpenInState = (state: EditorState, file: File) => state.openedFiles.indexOf(file) >= 0;

    getStateUpdateWithFileAsCurrent = (file: File) => ({currentFile: file});

    getStateUpdateWithNewOpenFile = (state: EditorState, fileToOpen: File) =>({
        openedFiles: [...state.openedFiles, fileToOpen],
        currentFile: fileToOpen
    });

    handleCloseFile = (fileToClose: File) => this.setState((state) => {
        const openedFiles = this.getFileArrayWithoutFile(state.openedFiles, fileToClose);
        return {
            openedFiles,
            currentFile: state.currentFile === fileToClose ? openedFiles[openedFiles.length - 1] : state.currentFile
        }
    });

    getFileArrayWithoutFile = (files: File[], file: File) => {
        const copy = [...files];
        copy.splice(copy.indexOf(file), 1);
        return copy;
    }
}

interface EditorState {
    root: Folder | null,
    openedFiles: File[],
    currentFile: File | null
}

const EditorBody: React.FunctionComponent<EditorBodyProps> = ({root, openedFiles, currentFile, onOpenFile, onCloseFile}) => (
    <div className="editor-body">
        <FileExplorerSidebar root={root} currentFile={currentFile} onOpenFile={onOpenFile}/>

        <div>
            <TabManager currentFile={currentFile} openedFiles={openedFiles} onOpenFile={onOpenFile} onCloseFile={onCloseFile}/>
            <FileViewer currentFile={currentFile}/>
        </div>
    </div>
);

export interface FileOpener {
    onOpenFile: (fileToOpen: File) => void
}

export interface FileCloser {
    onCloseFile: (fileToClose: File) => void
}

interface EditorBodyProps extends EditorState, FileOpener, FileCloser {}
