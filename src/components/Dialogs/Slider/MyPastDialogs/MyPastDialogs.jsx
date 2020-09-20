import React from "react";
import styles from "./MyPastdialogs.module.css"
import {NavLink} from "react-router-dom";

const MyPastDialogs = (props) => {
    let path = "/Dialogs/" + props.id;

    return (
        <NavLink to={path} className={styles.link}>
            <div className={styles.mp}>
                <i className="fas fa-user-circle" alt="ava" />
                <span className={styles.sp}>{props.name}</span>
                <span className={styles.mmp}><i className="fas fa-envelope" alt="status"/></span>
            </div>
        </NavLink>
    );
}

export default MyPastDialogs;