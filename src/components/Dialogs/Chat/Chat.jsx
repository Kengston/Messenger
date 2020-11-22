import React from "react";
import "../Dialogs.css";
import styles from "./Chat.module.css";
import MessageBuble from "./MessageBuble/MessageBuble";
import {Field, reduxForm} from "redux-form";


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
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    );
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component="textarea" name="newMessage" className={styles.textarea} placeholder="Ваше сообщение"/>
            <button className={styles.btn}><i className="fas fa-paper-plane"/></button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"}) (AddMessageForm)

export default Chat;