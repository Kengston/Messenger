import React from "react";
import {addPostCreator} from "../../../redux/Profile-reducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newPost: state.profilePage.newPost
    }
}

const NewPostContainer = connect(mapStateToProps, {addPostCreator}) (NewPost)

export default NewPostContainer;