import React from "react";
import FileExplorerSidebar from "./FileExplorerSidebar/FileExplorerSidebar";
import TabManager from "./TabManager/TabManager";
import FileViewer from "./FileViewer/FileViewer";
import {EditorState, FileCloser, FileOpener} from "../Editor";

export const EditorBody: React.FunctionComponent<EditorBodyProps> = ({root, openedFiles, currentFile, onOpenFile, onCloseFile, mobileMenuOpen}) => (
    <div className="editor-body">
        <FileExplorerSidebar root={root} currentFile={currentFile} onOpenFile={onOpenFile} mobileMenuOpen={mobileMenuOpen}/>

        <div className="editor-center">
            <TabManager currentFile={currentFile} openedFiles={openedFiles} onOpenFile={onOpenFile} onCloseFile={onCloseFile}/>
            <FileViewer currentFile={currentFile}/>
        </div>
    </div>
);

// TODO: Wrong usage of extend
interface EditorBodyProps extends EditorState, FileOpener, FileCloser {}
