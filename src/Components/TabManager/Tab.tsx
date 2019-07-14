import React, {FunctionComponent} from "react";

import File from "../../Models/File";
import "./Tab.css"

export const Tab: FunctionComponent<TabProps> = ({file, onSelectFile, onCloseFile, isCurrent}) => (
    <div className={`tab ${isCurrent ? 'current-tab' : ''}`} onClick={onSelectFile}>
        {
            file.name
        }
        <span onClick={e => {e.stopPropagation(); onCloseFile();}}>X</span>
    </div>
);

interface TabProps{
    file: File,
    isCurrent: boolean,
    onSelectFile: () => void,
    onCloseFile: () => void
}
