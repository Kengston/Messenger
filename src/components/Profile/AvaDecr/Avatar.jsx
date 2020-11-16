import React from "react";
import avatar from './Avatar.module.css'
import Preloader from "../../common/Preloader/Preloader";
import AvatarStatus from "./AvatarStatus";

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
            </div>
            <AvatarStatus profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        </div>
    );
}

export default Avatar;