import fl from "./FriendsList.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

let Friend = ({user, followingInProgress, unfollow, follow}) => {

    return (
        <div>
            <div className={fl.item}>

                <div className={fl.picture}>
                    <NavLink to={'/Profile/' + user.id} className={fl.link}>
                        {user.photos.small ? <img src={user.photos.small} className="fas fa-user-circle" alt="ava"/>
                            : <i className="fas fa-user-circle"/>}
                    </NavLink>
                </div>
                <div className={fl.status}>Статус: {user.status}</div>
                <div className={fl.name}> {user.name}
                    {user.followed
                        ? <span className={fl.button} disabled={followingInProgress
                            .some(id => id === user.id)}
                                  onClick={() => {
                                      unfollow(user.id)
                                  }}><i className="fas fa-times"></i></span>
                        : <span className={fl.button}
                                  onClick={() => {
                                      follow(user.id)
                                  }}><i className="fas fa-check"></i></span>}
                </div>
            </div>
        </div>

    )
}

export default Friend;