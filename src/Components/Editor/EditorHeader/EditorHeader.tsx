import React, {Component} from "react";

import "./EditorHeader.css";
import Toggle from "./Toggle";


export default class EditorHeader extends Component<EditorHeaderProps> {

    render(): React.ReactNode {
        return (
            <div className="editor-header">
                <div className="mobile-menu-toggle-trigger">
                    <Toggle onClick={this.props.onMobileMenuToggled}
                            mobileMenuOpen={this.props.mobileMenuOpen}/>
                </div>
                <div style={{flexGrow: 1}}>simonedegiacomi.dev</div>
            </div>
        );
    }
}

interface EditorHeaderProps {
    onMobileMenuToggled: () => void,
    mobileMenuOpen: boolean
}

