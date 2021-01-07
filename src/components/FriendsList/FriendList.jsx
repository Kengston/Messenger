import fl from "./FriendsList.module.css";
import React from "react";
import Paginator from "../common/Paginator/Paginator";
import Friend from "./Friend";

let FriendList = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {

    return (

        <div className={fl.table}>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalUsersCount={totalUsersCount} pageSize={pageSize} />
            {
                users.map(u => <Friend key={u.id}
                                       user={u}
                                       followingInProgress={props.followingInProgress}
                                       unfollow = {props.unfollow}
                                       follow={props.follow}
                />)
            }
        </div>
    )
}

export default FriendList;