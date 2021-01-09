import React from "react";
import newp from "./NewPost.module.css";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);

const NewPost = (props) => {

    let addNewPost = (values) => {
        props.addPostCreator(values.newPost);
    }

    return (
        <div className={newp.postedit}>
            <span className={newp.mypost}>Мои посты</span>
            <AddNewPostFormRedux onSubmit={addNewPost}/>
        </div>
    );
}

let AddNewPostForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div className={newp.text}>
                    <div className={newp.inpt}>
                        <Field component={Textarea} name="newPost" className={newp.textarea}
                               placeholder="Что нового?" validate={[required, maxLength50]} />
                    </div>
                    <div className={newp.spn}>
                        <button className={newp.btn}><i className="fas fa-paper-plane"/></button>
                    </div>
                </div>
            </form>
    )
}

let AddNewPostFormRedux = reduxForm({form: "addNewPostForm"}) (AddNewPostForm)

export default NewPost;