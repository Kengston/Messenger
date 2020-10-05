import React from "react";

let FriendsList = (props) => {
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <i className="fas fa-user-circle" alt="ava"/>
                        </div>
                        <div>
                            <button>Follow</button>
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div><div>{u.status}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default FriendsList;