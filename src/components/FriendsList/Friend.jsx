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
                        ? <button className={fl.button} disabled={followingInProgress
                            .some(id => id === user.id)}
                                  onClick={() => {
                                      unfollow(user.id)
                                  }}>Unfollow</button>
                        : <button className={fl.button}
                                  onClick={() => {
                                      follow(user.id)
                                  }}>Follow</button>}
                </div>
            </div>
        </div>

    )
}

export default Friend;