import React from "react";
import avatar from './Avatar.module.css'
import Preloader from "../../common/Preloader/Preloader";

const Avatar = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={avatar.item}>
            <div className={avatar.picture}>
                { props.profile.photos.large ? <img src={props.profile.photos.large} className="fas fa-user-circle" alt="ava"/> :
                    <i className="fas fa-user-circle" alt="ava"/> }
            </div>
            <div className={avatar.name}>
                <span className={avatar.name}>{props.profile.fullName}</span>
                <span className={avatar.edit}><i className="fas fa-edit" alt="edit" /></span>
            </div>
            <div className={avatar.status}>
                <span className={avatar.status}>Статус: {props.profile.aboutMe}</span>
            </div>
        </div>
    );
}

export default Avatar;