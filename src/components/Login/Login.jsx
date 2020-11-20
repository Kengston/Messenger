import React from 'react'
import style from "../Login/Login.module.css";
import logo from "../../img/icon.png"
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <img className={style.img} src={logo}/>
                <div className={style.postedit}>
                    <span className={style.mypost}>Логин:</span>
                    <div className={style.text}>
                        <Field className={style.textarea} placeholder="Логин" name={"login"} component={"input"}/>
                    </div>
                </div>
                <div className={style.postedit}>
                    <span className={style.mypost}>Пароль:</span>
                    <div className={style.text}>
                        <Field className={style.textarea} placeholder="Пароль" name={"password"} component={"input"}/>
                    </div>
                </div>
                <div>
                    <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> remember me
                </div>
                <div>
                    <button>Button</button>
                </div>
            </form>
        </div>
    )
}

const LoginRedux = reduxForm({form: 'login'}) (LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return <div>
        <LoginRedux onSubmit={onSubmit}/>
    </div>
}

export default Login;