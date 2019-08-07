import React, {Component} from "react";

import "./Editor.css";
import EditorHeader from "./EditorHeader/EditorHeader";
import EditorFooter from "./EditorFooter/EditorFooter";
import File from "../../Models/File";
import Folder from "../../Models/Folder";
import FilesService from "../../Services/FilesService";
import {EditorBody} from "./EditorBody/EditorBody";

export default class Editor extends Component<any, EditorState> {

    state: EditorState = {
        root: null,
        openedFiles: [],
        currentFile: null,

        mobileMenuOpen: false
    };

    async componentDidMount() {
        const root = await this.fetchRoot();
        this.setState({root});
        this.openFileFromUrlIfPresent(root);
    }

    async fetchRoot(): Promise<Folder> {
        try {
            return await FilesService.getRoot();
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

    openFileFromUrlIfPresent (root: Folder) {
        // eslint-disable-next-line no-restricted-globals
        const filePath = location.pathname;
        const file = root.getFile(decodeURI(filePath));
        if (file instanceof File) {
            this.handleOpenFile(file);
        }
    }

    render(): React.ReactNode {
        return (
            <div className="editor">
                <EditorHeader onMobileMenuToggled={this.handleMobileMenuToggled}/>
                <EditorBody {...this.state}
                            onOpenFile={this.handleOpenFile}
                            onCloseFile={this.handleCloseFile}
                            mobileMenuOpen={this.state.mobileMenuOpen}/>
                <EditorFooter currentFile={this.state.currentFile}/>
            </div>
        );
    }

    handleMobileMenuToggled = () => {
        this.setState(({mobileMenuOpen}) => {
            return {
                mobileMenuOpen: !mobileMenuOpen
            };
        });
    };

    // TODO: Maybe rename to showFile
    handleOpenFile = (fileToOpen: File) => this.setState(state => {
        let newState;
        if (this.isFileAlreadyOpenInState(state, fileToOpen)) {
            newState = this.getStateUpdateWithFileAsCurrent(fileToOpen);
        } else {
            newState = this.getStateUpdateWithNewOpenFile(state, fileToOpen);
        }
        this.updateUrlWithCurrentFile(newState.currentFile);
        return newState;
    });


    isFileAlreadyOpenInState = (state: EditorState, file: File) => state.openedFiles.indexOf(file) >= 0;

    getStateUpdateWithFileAsCurrent = (file: File) => ({currentFile: file});

    getStateUpdateWithNewOpenFile = (state: EditorState, fileToOpen: File) =>({
        openedFiles: [...state.openedFiles, fileToOpen],
        currentFile: fileToOpen
    });

    updateUrlWithCurrentFile = (currentFile: File) => {
        // eslint-disable-next-line no-restricted-globals
        history.pushState({}, currentFile.name, currentFile.getPath());
    };

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

export interface EditorState {
    root: Folder | null,
    openedFiles: File[],
    currentFile: File | null,

    mobileMenuOpen: boolean
}

export interface FileOpener {
    onOpenFile: (fileToOpen: File) => void
}

export interface FileCloser {
    onCloseFile: (fileToClose: File) => void
}

