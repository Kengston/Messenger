import React from 'react'
import style from "../Login/Login.module.css";
import logo from "../../img/icon.png"

const Login = () => {
    return (
        <div>
            <img className={style.img} src={logo}/>
            <div className={style.postedit}>
                <span className={style.mypost}>Логин:</span>
                <div className={style.text}>
                    <textarea className={style.textarea} placeholder="Логин" />
                </div>
            </div>
            <div className={style.postedit}>
                <span className={style.mypost}>Пароль:</span>
                <div className={style.text}>
                    <textarea className={style.textarea} placeholder="Пароль" />
                </div>
            </div>
        </div>
    )
}

export default Login;