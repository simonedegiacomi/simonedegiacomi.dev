import React, {Component} from 'react';
import MarkdownIt from 'markdown-it';
import MarkdownItContainer from 'markdown-it-container';

import File from "../../../../Models/File";
import FilesService from "../../../../Services/FilesService";
import './FileViewer.css';
import './styles/history-list.css';
import {OpenFileFromSidebar} from "./OpenFileFromSidebar/OpenFileFromSidebar";

export default class FileViewer extends Component<FileViewerProps> {

    //private promise: (Promise<string> | null) = null;

    private markdownRenderer = new MarkdownIt({html: true})
        .use(MarkdownItContainer, 'history-list')
        .use(MarkdownItContainer, 'history-list-item-multiple-paragraphs');

    state: { content: string | null } = {
        content: null
    };

    componentDidUpdate(prevProps: Readonly<FileViewerProps>, prevState: Readonly<{}>, snapshot?: any): void {
        if (this.props.currentFile === prevProps.currentFile) {
            console.log('ignoring update');
            return;
        }
        console.log('did update');
        const promise = this.downloadFileContent();
    }

    async downloadFileContent() {
        const {currentFile} = this.props;
        if (currentFile == null) {
            return;
        }
        const content = await FilesService.getFileContent(currentFile);
        console.log('[FILE-VIEWER] got content', content);
        this.setState({content});
    }

    render(): React.ReactNode {
        if (this.props.currentFile && !this.state.content) {
            return "Downloading...";
        } else if (this.props.currentFile && this.state.content) {
            return this.renderFileContent();
        }
        return <OpenFileFromSidebar/>;
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

