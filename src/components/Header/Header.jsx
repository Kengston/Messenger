import React from 'react'
import logo from '../../img/icon.png'
import styles from './Header.module.css'
import '../../App.css';

const Header = () => {
    return (
        <header className="header">
            <div className={styles.blck}>
                <img className={styles.img} src={logo} alt="jopa"/>
                <span className={styles.span}>Messenger</span>
            </div>
        </header>
    );
}

export default Header;