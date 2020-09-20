import React from "react";
import friends from "../../../img/icon_friends.png";
import style from "../Navbar.module.css";
import {NavLink} from "react-router-dom";

const Friends = () => {
    return (
        <div>
            <NavLink to="/FriendsList" className={style.nav} activeClassName={`${style.nav} ${style.active}`}><img src={friends} alt="friends"/></NavLink>
        </div>
    );
}

export default Friends;