import React, {Component} from "react";

import "./Desktop.css";
import Editor from "../Editor";

export default class Desktop extends Component {

    render(): React.ReactNode {
        return (
            <div className="desktop">
                <Editor/>
            </div>
        );
    }
}
