import React from "react";
import newp from "./NewPost.module.css";
import {Field, reduxForm} from "redux-form";

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

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component="textarea" name="newPost" className={newp.textarea} placeholder="Что нового?" />
            <button className={newp.btn}><i className="fas fa-paper-plane"/></button>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "addNewPostForm"}) (AddNewPostForm)

export default NewPost;