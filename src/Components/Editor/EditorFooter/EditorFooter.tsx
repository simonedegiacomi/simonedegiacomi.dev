import React, {Component} from 'react';

import "./EditorFooter.css";
import File from "../../../Models/File";

export default class EditorFooter extends Component<EditorFooterProps> {

    render(): React.ReactNode {
        const {currentFile} = this.props;
        return (
            <div className="editor-footer">
                <div>
                    {
                        currentFile &&
                        currentFile.getPath()
                    }
                </div>
            </div>
        );
    }
}

interface EditorFooterProps {
    currentFile: File | null
}
