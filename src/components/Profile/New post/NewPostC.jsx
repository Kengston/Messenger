import React from "react";
import {addPostCreator, updatePostCreator} from "../../../redux/Profile-reducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";


/* const NewPostContainer = (props) => {
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
} */

let mapStateToProps = (state) => {
    return {
        newPost: state.profilePage.newPost
    }
}

const NewPostContainer = connect(mapStateToProps, {updatePostCreator, addPostCreator}) (NewPost)

export default NewPostContainer;