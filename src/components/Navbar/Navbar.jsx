import React from "react";
import styles from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import style from "./Navbar.module.css";
import user from "../../img/icon_user.png";
import messages from "../../img/icon_messages.png";
import friends from "../../img/icon_friends.png";
import settings from "../../img/icon_settings.png";
import exit from "../../img/icon_exit.png";

const Navbar = () => {
    return (
        <nav className='nav'>
            <div>
                <div>
                    <NavLink to="/Profile" className={style.nav} activeClassName={`${style.nav} ${style.active}`}><img src={user} alt="user"/></NavLink>
                </div>
                <hr />
                <div>
                    <NavLink to="/Dialogs" className={style.nav} activeClassName={`${style.nav} ${style.active}`}><img src={messages} alt="messages"/></NavLink>
                </div>
                <hr />
                <div>
                    <NavLink to="/FriendsList" className={style.nav} activeClassName={`${style.nav} ${style.active}`}><img src={friends} alt="friends"/></NavLink>
                </div>
                <hr />
                <div>
                    <NavLink to="/Preferences" className={style.nav} activeClassName={`${style.nav} ${style.active}`}><img src={settings} alt="settings"/></NavLink>
                </div>
                <hr />
            </div>
        </nav>
    );
}

export default Navbar;