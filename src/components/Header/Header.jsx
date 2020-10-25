import React from 'react'
import logo from '../../img/icon.png'
import styles from './Header.module.css'
import '../../App.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className="header">
            <div className={styles.blck}>
                <img className={styles.img} src={logo} alt="jopa"/>
                <span className={styles.span}>Messenger</span>
                <div className={styles.lgn}>
                    { props.isAuth ? props.login
                        : <NavLink to = {'/login'} className={styles.lgncol}>Login</NavLink> }
                </div>
            </div>
        </header>
    );
}

export default Header;