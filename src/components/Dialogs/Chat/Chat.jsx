import React from "react";
import "../Dialogs.css";
import styles from "./Chat.module.css";
import MessageBuble from "./MessageBuble/MessageBuble";
import AddMessageForm from "./AddMessageForm/AddMessageForm";


const Chat = (props) => {

    let messageElements =
        props.messages.map( messages => <MessageBuble message={messages.message} key={messages.id} />);

    let addNewMessage = (values) => {
        props.sendMessageCreator(values.newMessage);
    }


    return (
        <div className="dialog">
            <div className={styles.ddiv}>
                <div>
                    {messageElements}
                </div>
                <div className={styles.area}>
                    <AddMessageForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    );
}

export default Chat;