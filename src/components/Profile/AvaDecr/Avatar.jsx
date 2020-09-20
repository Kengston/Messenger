import React from "react";
import avatar from './Avatar.module.css'

const Avatar = () => {
    return (
        <div className={avatar.item}>
            <div className={avatar.picture}>
                <i className="fas fa-user-circle" alt="ava" />
            </div>
            <div className={avatar.name}>
                <span className={avatar.name}>Киану Ривз</span>
                <span className={avatar.edit}><i className="fas fa-edit" alt="edit" /></span>
            </div>
            <div className={avatar.status}>
                <span className={avatar.status}>Статус: Online</span>
            </div>
        </div>
    );
}

export default Avatar;