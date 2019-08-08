import React, {Component} from 'react';
import MarkdownIt from 'markdown-it';
import MarkdownItContainer from 'markdown-it-container';

import File from "../../../../Models/File";
import FilesService from "../../../../Services/FilesService";
import './FileViewer.css';
import './styles/history-list.css';
import {OpenFileFromSidebar} from "./OpenFileFromSidebar/OpenFileFromSidebar";
import {DownloadingFileContent} from "./DownloadingFileContent/DownloadingFileContent";

export default class FileViewer extends Component<FileViewerProps> {

    private markdownRenderer = new MarkdownIt({html: true})
        .use(MarkdownItContainer, 'history-list')
        .use(MarkdownItContainer, 'history-list-item-multiple-paragraphs');

    state: { content: string | null } = {
        content: null
    };

    async componentDidUpdate(prevProps: Readonly<FileViewerProps>, prevState: Readonly<{}>, snapshot?: any): Promise<void> {
        if (this.props.currentFile === prevProps.currentFile) {
            return;
        }
        await this.downloadFileContent();
    }

    async downloadFileContent():Promise<void> {
        this.setState({content: null});
        const {currentFile} = this.props;
        if (currentFile == null) {
            return;
        }
        const content = await FilesService.getFileContent(currentFile);
        this.setState({content});
    }

    render(): React.ReactNode {
        if (!this.props.currentFile) {
            return <OpenFileFromSidebar/>;
        } else if (!this.state.content) {
            return <DownloadingFileContent/>;
        }
        return this.renderFileContent();
    }

    renderFileContent() {
        if (!this.state.content) {
            return;
        }
        const html = this.markdownRenderer.render(this.state.content);
        return (
            <div className="file-viewer">
                <div className="container file-content-container"
                     dangerouslySetInnerHTML={{__html: html}}>
                </div>
            </div>
        );
    }
}

interface FileViewerProps {
    currentFile: File | null
}

