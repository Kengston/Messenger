import React from "react";
import {addPostCreator, updatePostCreator} from "../../../redux/Profile-reducer";
import NewPost from "./NewPost";
import StoreContext from "../../../StoreContex";

const NewPostContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().profilePage;

                    let addPost = () => {
                        store.dispatch(addPostCreator());
                    }

                    let onPostChange = (text) => {
                        let newVar = updatePostCreator(text);
                        store.dispatch(newVar);
                    }
                    return (
                        <NewPost updatePostText={onPostChange}
                                 addPost={addPost}
                                 posts={state.postsData}
                                 newPost={state.newPost}/>)
                }
            }
        </StoreContext.Consumer>
    )
}

export default NewPostContainer;