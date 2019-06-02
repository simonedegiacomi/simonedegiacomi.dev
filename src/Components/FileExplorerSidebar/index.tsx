import React, {Component} from "react";

import "./FileExplorerSidebar.css";

export default class FileExplorerSidebar extends Component {

    render(): React.ReactNode {
        return (
            <div className="file-explorer-sidebar">
                <ul>
                    <li>Folder</li>
                    <li>File.md</li>
                </ul>
            </div>
        )
    }
}
