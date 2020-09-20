import React from "react";
import "./Dialogs.css";
import Slider from "./Slider/Slider";
import ChatC from "./Chat/ChatC";

const Dialog = (props) => {

    return (
        <div className="app-dialog">
            <Slider dialogs={props.state.dialogsData} />
            <div className="border"></div>
            <ChatC />
        </div>
    );
}

export default Dialog;