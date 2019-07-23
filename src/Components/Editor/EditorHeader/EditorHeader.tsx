import React, {Component} from "react";

import MobileMenuToggleTriggerIcon from "../../../icons/mobile-menu.svg";
import "./EditorHeader.css";


export default class EditorHeader extends Component<EditorHeaderProps> {

    render(): React.ReactNode {
        return (
            <div className="editor-header">
                <div className="d-md-none mobile-menu-toggle-trigger">
                    <img src={MobileMenuToggleTriggerIcon} onClick={this.props.onMobileMenuToggled}/>
                </div>
                <div style={{flexGrow: 1}}>simonedegiacomi.dev</div>
            </div>
        );
    }
}

interface EditorHeaderProps {
    onMobileMenuToggled: () => void
}

