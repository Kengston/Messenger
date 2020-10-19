import React from "react";
import Avatar from "./AvaDecr/Avatar";
import MyPosts from "./My posts/MyPosts";
import NewPostContainer from "./New post/NewPostC";

const Profile = (props) => {

    let postElements =
    props.state.postsData.map( posts => <MyPosts post={posts.post} />);

    return (
        <div>
            <Avatar profile={props.profile}/>
            <NewPostContainer />
            {postElements}
        </div>
    );
}

export default Profile;