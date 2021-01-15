import React from "react";
import avatar from './Avatar.module.css'
import Preloader from "../../common/Preloader/Preloader";
import AvatarStatusWithHooks from "./AvatarStatusWithHooks";

const Avatar = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    const photoSelector = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={avatar.item}>
            <div className={avatar.picture}>
                {props.isOwner && <input type={'file'} onChange={photoSelector}/>}
                { props.profile.photos.large ? <img src={props.profile.photos.large} className="fas fa-user-circle" alt="ava"/> :
                    <i className="fas fa-user-circle" alt="ava"/> }
            </div>
            <div className={avatar.name}>
                <span className={avatar.name}>{props.profile.fullName}</span>
            </div>
            <AvatarStatusWithHooks profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        </div>
    );
}

export default Avatar;