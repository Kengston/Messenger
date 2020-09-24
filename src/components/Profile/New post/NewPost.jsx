import React from "react";
import newp from "./NewPost.module.css";
import NewPostContainer from "./NewPostC";
import {addPostCreator, updatePostCreator} from "../../../redux/Profile-reducer";

const NewPost = (props) => {
    console.log(props)
    let newPostElements = React.createRef();

    let onAddPost = () => {
        props.addPostCreator();
    }

    let onPostChange = () => {
        let text = newPostElements.current.value;
        props.updatePostCreator(text);
    }

    return (
        <div className={newp.postedit}>
            <span className={newp.mypost}>Мои посты</span>
            <div className={newp.text}>
                <textarea className={newp.textarea} placeholder="Что нового?"
                          ref={newPostElements} value={props.newPost} onChange={onPostChange}/>
                <button className={newp.btn} onClick={ onAddPost }><i className="fas fa-paper-plane"/></button>
            </div>
        </div>
    );
}

export default NewPost;