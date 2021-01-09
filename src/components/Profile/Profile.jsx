import React from "react";
import Avatar from "./AvaDecr/Avatar";
import MyPosts from "./My posts/MyPosts";
import NewPostContainer from "./New post/NewPostC";
import style from "./Profile.module.css"

const Profile = (props) => {

    let postElements =
    [...props.state.postsData].reverse().map( posts => <MyPosts post={posts.post} />);

    return (
        <div>
            <Avatar profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <div className={style.content}>
                <NewPostContainer />
                {postElements}
            </div>
        </div>
    );
}

export default Profile;