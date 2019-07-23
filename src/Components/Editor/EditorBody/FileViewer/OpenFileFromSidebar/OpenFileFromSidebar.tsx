import React from 'react';

import LeftArrow from "../../../../../icons/arrow-left.svg";
import "./OpenFileFromSidebar.css";

export const OpenFileFromSidebar: React.FunctionComponent = () => (
    <div className="open-from-sidebar">
        <img src={LeftArrow}/>
        <p>Open a file from the left</p>
    </div>
);
