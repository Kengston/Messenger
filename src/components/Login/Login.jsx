import React from 'react'
import style from "../Login/Login.module.css";
import logo from "../../img/icon.png"
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControl/FormsControl";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <img className={style.img} src={logo}/>
                <div className={style.postedit}>
                    <span className={style.mypost}>Логин:</span>
                    <div className={style.text}>
                        <Field className={style.textarea} placeholder={"Login"} name={"login"}
                               validate={[required]} component={Input}/>
                    </div>
                </div>
                <div className={style.postedit}>
                    <span className={style.mypost}>Пароль:</span>
                    <div className={style.text}>
                        <Field className={style.textarea} placeholder={"Password"} name={"password"} type={"password"}
                               validate={[required]} component={Input}/>
                    </div>
                </div>
                <div className={style.check}>
                    <div className={style.inpt}>
                        <Field component={Input} name={"rememberMe"} type={"checkbox"}/>
                    </div>
                    <div className={style.spn}>
                        <span>Remember me</span>
                    </div>
                </div>
                <div className={style.btn}>
                    <button><i className="fas fa-sign-in-alt"></i></button>
                </div>
            </form>
        </div>
    )
}

const LoginRedux = reduxForm({form: 'login'}) (LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    return <div>
        <LoginRedux onSubmit={onSubmit} />
    </div>
}

export default connect(null, {login}) (Login);