import React from "react";
import fl from "./FriendsList.module.css"
import * as axios from 'axios'

let FriendsList = (props) => {

    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {

            props.setUsers(response.data.items)
        });

    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>

                    <div className={fl.item}>
                        <div className={fl.picture}>
                            <i className="fas fa-user-circle" alt="ava"/>
                        </div>
                        <div className={fl.name}>{u.fullName}
                            {u.followed
                                ? <button className={fl.button} onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button className={fl.button} onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                        <div className={fl.status}>Статус: {u.status}</div>
                    </div>

                </div>)
            }
        </div>
    )
}

export default FriendsList;