import React from "react";
import styles from "./MessageBuble.module.css";

const MessageBuble = (props) => {
    return (<div className={styles.messageSpace}>
                <div className={styles.sent}>
                    <div className={styles.bubble}>{props.message}</div>
                </div>
            </div>
    );
}

export default MessageBuble;