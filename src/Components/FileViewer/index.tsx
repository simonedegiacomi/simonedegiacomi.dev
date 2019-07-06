import React, {Component} from 'react';
import MarkdownIt from 'markdown-it';

import File from "../../Models/File";
import FilesService from "../../Services/FilesService";
import './FileViewer.css';

export default class FileViewer extends Component<FileViewerProps> {

    private promise: (Promise<string> | null) = null;

    private markdownRenderer = new MarkdownIt();

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
        const { currentFile } = this.props;
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
        } else if (this.state.content) {
            return this.renderFileContent();
        }
        return (
            <div>Open a file from the left</div>
        );
    }

    renderFileContent() {
        if (!this.state.content) {
            return ;
        }
        const html = this.markdownRenderer.render(this.state.content);
        return (
            <div className="file-content-container"
                 dangerouslySetInnerHTML={{__html: html}}>
            </div>
        );
    }
}

interface FileViewerProps {
    currentFile: File | null
}

