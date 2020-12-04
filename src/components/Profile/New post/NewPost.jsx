import React from "react";
import newp from "./NewPost.module.css";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength10 = maxLengthCreator(10);

const NewPost = (props) => {

    let addNewPost = (values) => {
        props.addPostCreator(values.newPost);
    }

    return (
        <div className={newp.postedit}>
            <span className={newp.mypost}>Мои посты</span>
            <div className={newp.text}>
                 <AddNewPostFormRedux onSubmit={addNewPost}/>
            </div>
        </div>
    );
}

let AddNewPostForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <Field component={Textarea} name="newPost" className={newp.textarea}
                       placeholder="Что нового?" validate={[required, maxLength10]} />
                <button className={newp.btn}><i className="fas fa-paper-plane"/></button>
            </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "addNewPostForm"}) (AddNewPostForm)

export default NewPost;