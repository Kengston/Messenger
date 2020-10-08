import React from "react";
import fl from "./FriendsList.module.css"
import * as axios from 'axios'

class FriendsList extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {

        return (

            <div className={fl.table}>

                {
                    this.props.users.map(u => <div key={u.id}>

                        <div className={fl.item}>
                            <div className={fl.picture}>
                                {u.photos.small ? <img src={u.photos.small} className="fas fa-user-circle" alt="ava"/>
                                    : <i className="fas fa-user-circle" />}
                            </div>
                            <div className={fl.name}> {u.name}
                                {u.followed
                                    ? <button className={fl.button} onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    : <button className={fl.button} onClick={() => {
                                        this.props.follow(u.id)
                                    }}>Follow</button>}
                            </div>
                            <div className={fl.status}>Статус: {u.status}</div>
                        </div>

                    </div>)
                }
            </div>
        )
    }
}

export default FriendsList;