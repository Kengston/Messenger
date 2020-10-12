import React from "react";
import fl from "./FriendsList.module.css"
import * as axios from 'axios'

class FriendsList extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}$count=${this.props.pageSize}`)
            .then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    onPageChanged = (e) => {

    }

    //Разобраться со стилями позже
    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (

            <div className={fl.table}>
                <div>
                    {pages.map( p => {
                       return <span className={this.props.currentPage === p && fl.selectedPage}
                       onClick={() => { this.props.setCurrentPage(p) }}>{p}</span>
                    })}
                </div>
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