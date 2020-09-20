import React from "react";
import messages from "../../../img/icon_messages.png";
import style from "../Navbar.module.css";
import {NavLink} from "react-router-dom";

const Messages = () => {
    return (
        <div>
            <NavLink to="/Dialogs" className={style.nav} activeClassName={`${style.nav} ${style.active}`}><img src={messages} alt="messages"/></NavLink>
        </div>
    );
}

export default Messages;