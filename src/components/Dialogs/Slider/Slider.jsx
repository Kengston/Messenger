import React from "react";
import MyPastDialogs from "./MyPastDialogs/MyPastDialogs";
import "../Dialogs.css";



const Slider = (props) => {

    let dialogElements =
    props.dialogs.map( dialog => <MyPastDialogs name={dialog.name} id={dialog.id} />);

    return (
        <div className="slider">
            {dialogElements}
        </div>
    );
}

export default Slider;