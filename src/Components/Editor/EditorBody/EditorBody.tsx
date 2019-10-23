import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import TabManager from "./TabManager/TabManager";
import FileViewer from "./FileViewer/FileViewer";
import {EditorState, FileCloser, FileOpener} from "../Editor";
import "./EditorBody.css";

export const EditorBody: React.FunctionComponent<EditorBodyProps> = ({root, openedFiles, currentFile, onOpenFile, onCloseFile, mobileMenuOpen}) => (
    <div className="editor-body">
        <Sidebar root={root} currentFile={currentFile} onOpenFile={onOpenFile} mobileMenuOpen={mobileMenuOpen}/>

        <div className="editor-center">
            <TabManager currentFile={currentFile} openedFiles={openedFiles} onOpenFile={onOpenFile} onCloseFile={onCloseFile}/>
            <FileViewer currentFile={currentFile}/>
        </div>
    </div>
);

// TODO: Wrong usage of extend
interface EditorBodyProps extends EditorState, FileOpener, FileCloser {}
