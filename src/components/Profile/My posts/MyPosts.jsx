import React from "react";
import styles from "./MyPosts.module.css";

const MyPosts = (props) => {

    return (
        <div className={styles.mp}>
            <i className="fas fa-user-circle" alt="ava" />
            <span className={styles.sp}>{props.post}</span>
        </div>
    );
}

export default MyPosts;