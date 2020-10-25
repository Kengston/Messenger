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
                                ? <button className={fl.button} onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "9570e193-2a7c-4dd8-b4f5-0a2d9"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.unfollow(u.id);
                                            }
                                        });
                                }}>Unfollow</button>
                                : <button className={fl.button} onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "9570e193-2a7c-4dd8-b4f5-0a2d9"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.follow(u.id);
                                            }
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