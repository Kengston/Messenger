import React from "react";
import settings from "../../../img/icon_settings.png";
import style from "../Navbar.module.css";
import {NavLink} from "react-router-dom";

const Settings = () => {
    return (
        <div>
            <NavLink to="/Preferences" className={style.nav} activeClassName={`${style.nav} ${style.active}`}><img src={settings} alt="settings"/></NavLink>
        </div>
    );
}

export default Settings;