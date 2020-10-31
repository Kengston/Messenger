import fl from "./FriendsList.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let FriendList = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }



    return (

        <div className={fl.table}>
            <div>
                {pages.map( p => {
                    return <span className={props.currentPage === p && fl.selectedPage}
                                 onClick={(e) => { props.onPageChanged(p); }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>

                    <div className={fl.item}>

                            <div className={fl.picture}>
                                <NavLink to={'/Profile/' + u.id} className={fl.link}>
                                    {u.photos.small ? <img src={u.photos.small} className="fas fa-user-circle" alt="ava"/>
                                        : <i className="fas fa-user-circle" />}
                                </NavLink>
                            </div>
                        <div className={fl.status}>Статус: {u.status}</div>
                        <div className={fl.name}> {u.name}
                            {u.followed
                                ? <button className={fl.button} disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {
                                    props.toggleFollowingProgress(true, u.id)
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "a022f831-9a66-4c47-aa47-20575b59b32a"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.unfollow(u.id);
                                            }
                                            props.toggleFollowingProgress(false, u.id)
                                        });
                                }}>Unfollow</button>
                                : <button className={fl.button} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id)
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "a022f831-9a66-4c47-aa47-20575b59b32a"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.follow(u.id);
                                            }
                                            props.toggleFollowingProgress(false, u.id)
                                        });
                                }}>Follow</button>}
                        </div>

                    </div>

                </div>)
            }
        </div>
    )
}

export default FriendList;