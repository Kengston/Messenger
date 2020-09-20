import React from "react";
import Messages from "./Messages/Messages"
import User from "./User/User";
import Friends from "./Friends/Friends";
import Settings from "./Settings/Settings";
import Exit from "./Exit/Exit";
import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className='nav'>
            <div>
                <User/>
                <hr />
                <Messages/>
                <hr />
                <Friends />
                <hr />
                <Settings />
                <hr />
            </div>
            <div className={styles.ex}>
                <Exit />
            </div>
        </nav>
    );
}

export default Navbar;