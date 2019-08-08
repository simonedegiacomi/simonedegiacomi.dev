import React from "react";
import "./DownloadingFileContent.css";

export const DownloadingFileContent: React.FunctionComponent = () => (
    <div className="loading-content">
        <div className="loading-content-spinner-container">
            <div className="spinner-border loading-content-spinner" role="status"/>
        </div>
        Downloading ...
    </div>
);
