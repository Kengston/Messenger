import React from "react";
import "../Dialogs.css";
import styles from "./Chat.module.css";
import MessageBuble from "./MessageBuble/MessageBuble";

const Chat = (props) => {

    let messageElements =
        props.messages.map( messages => <MessageBuble message={messages.message} key={messages.id} />);

    let newMessageElement = React.createRef();

    let onSendMessage = () => {
        props.sendMessageCreator();
    }

    let onMessageChange = () => {
        let newText = newMessageElement.current.value;
        props.updateMessageCreator(newText);
    }

    return (
        <div className="dialog">
            <div className={styles.ddiv}>
                <div>
                    {messageElements}
                </div>
                <div className={styles.area}>
                    <textarea className={styles.textarea} placeholder="Ваше сообщение"
                              ref={ newMessageElement } value={props.newMessage} onChange={onMessageChange}/>
                    <button className={styles.btn} onClick={ onSendMessage }><i className="fas fa-paper-plane"/></button>
                </div>
            </div>
        </div>
    );
}

export default Chat;