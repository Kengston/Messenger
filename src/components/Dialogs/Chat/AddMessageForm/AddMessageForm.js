import {Field, reduxForm} from "redux-form";
import styles from "../Chat.module.css";
import React from "react";
import {Textarea} from "../../../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styles.forma}>
                <div className={styles.inpt}>
                    <Field component={Textarea} name="newMessage" className={styles.textarea}
                           validate={[required, maxLength50]} placeholder="Ваше сообщение"/>
                </div>
                <div className={styles.spn}>
                    <button className={styles.btn}><i className="fas fa-paper-plane"/></button>
                </div>
            </div>
        </form>
    )
}

export default reduxForm({form: 'dialog-add-message-form'})(AddMessageForm);

