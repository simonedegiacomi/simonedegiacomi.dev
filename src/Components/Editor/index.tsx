import React, {Component} from "react";

import "./Editor.css";
import EditorHeader from "../EditorHeader";
import FileExplorerSidebar from "../FileExplorerSidebar";
import TabManager from "../TabManager";
import FileViewer from "../FileViewer";
import EditorFooter from "../EditorFooter/EditorFooter";

export default class Editor extends Component {

    state = {
        files: [],
        openFiles: [],
        currentFile: null
    };

    render(): React.ReactNode {
        return (
            <div className="editor">
                <EditorHeader/>
                <EditorBody/>
                <EditorFooter/>
            </div>
        );
    }
}

const EditorBody:React.FC = () => (
    <div className="editor-body">
        <FileExplorerSidebar/>

        <div>
            <TabManager/>
            <FileViewer/>
        </div>
    </div>
);
