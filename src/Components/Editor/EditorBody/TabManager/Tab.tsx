import React, {FunctionComponent} from "react";

import File from "../../../../Models/File";
import "./Tab.css";
import CloseIcon from "../../../../icons/close.svg";

export const Tab: FunctionComponent<TabProps> = ({file, onSelectFile, onCloseFile, isCurrent}) => (
    <div className={`tab ${isCurrent ? 'current-tab' : ''}`} onClick={onSelectFile}>
        {
            file.name
        }
        <div onClick={e => {e.stopPropagation(); onCloseFile();}}>
            <img src={CloseIcon}/>
        </div>
    </div>
);

interface TabProps{
    file: File,
    isCurrent: boolean,
    onSelectFile: () => void,
    onCloseFile: () => void
}
