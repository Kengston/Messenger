import React, {useEffect, useState} from "react";
import avatar from './Avatar.module.css'

const AvatarStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status] )

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={avatar.status}>
            {editMode
                ?
                <span className={avatar.status}>Статус: <input className={avatar.textarea}
                                                               onChange={onStatusChange}
                                                                value={status}/></span>
                :
                <span className={avatar.status}>Статус: {props.status}</span>
            }
            {editMode
                ?
                <span className={avatar.edit} onClick={deactivateEditMode}>
                            <i className="fas fa-times" alt="edit"/></span>
                :
                <span className={avatar.edit} onClick={activateEditMode}>
                            <i className="fas fa-edit" alt="edit"/></span>
            }
        </div>
    );
}


export default AvatarStatusWithHooks;