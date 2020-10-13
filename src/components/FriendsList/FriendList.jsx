import fl from "./FriendsList.module.css";
import React from "react";

const FriendList = (props) => {
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
                            {u.photos.small ? <img src={u.photos.small} className="fas fa-user-circle" alt="ava"/>
                                : <i className="fas fa-user-circle" />}
                        </div>
                        <div className={fl.name}> {u.name}
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

export default FriendList;