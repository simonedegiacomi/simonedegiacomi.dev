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
        this.openFileFromUrlOrDefault(root);
    }

    async fetchRoot(): Promise<Folder> {
        return await FilesService.getRoot();
        // TODO: Handle error
    }

    openFileFromUrlOrDefault(root: Folder) {
        const filePath = this.getFilePathFromUrlOrDefault();
        const file = root.getFileOrNull(decodeURI(filePath));
        if (file != null && file instanceof File) {
            this.handleOpenFile(file);
        }
    }

    getFilePathFromUrlOrDefault() {
        // eslint-disable-next-line no-restricted-globals
        const pathFromUrl = location.hash;
        if (pathFromUrl.indexOf('#') === 0) {
            return pathFromUrl.substr(1);
        } else {
            return '/About me.md';
        }
    }

    render(): React.ReactNode {
        const {mobileMenuOpen, currentFile} = this.state;
        return (
            <div className="editor">
                <EditorHeader onMobileMenuToggled={this.handleMobileMenuToggled}
                              mobileMenuOpen={mobileMenuOpen}/>
                <EditorBody {...this.state}
                            onOpenFile={this.handleOpenFile}
                            onCloseFile={this.handleCloseFile}
                            mobileMenuOpen={mobileMenuOpen}/>
                <EditorFooter currentFile={currentFile}/>
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
        return {
            ...newState,
            mobileMenuOpen: false
        };
    });


    isFileAlreadyOpenInState = (state: EditorState, file: File) => state.openedFiles.indexOf(file) >= 0;

    getStateUpdateWithFileAsCurrent = (file: File) => ({currentFile: file});

    getStateUpdateWithNewOpenFile = (state: EditorState, fileToOpen: File) => ({
        openedFiles: [...state.openedFiles, fileToOpen],
        currentFile: fileToOpen
    });

    updateUrlWithCurrentFile = (currentFile: File) => {
        // eslint-disable-next-line no-restricted-globals
        history.pushState({}, currentFile.name, `#${currentFile.getPath()}`);
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

