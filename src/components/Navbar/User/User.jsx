import React from "react";
import user from "../../../img/icon_user.png";
import style from "../Navbar.module.css"
import {NavLink} from "react-router-dom";

const User = () => {
    return (
        <div>
            <NavLink to="/Profile" className={style.nav} activeClassName={`${style.nav} ${style.active}`}><img src={user} alt="user"/></NavLink>
        </div>
    );
}

export default User;