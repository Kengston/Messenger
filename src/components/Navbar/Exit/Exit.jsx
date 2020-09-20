import React from "react";
import exit from "../../../img/icon_exit.png";
import style from "../Navbar.module.css";

const Exit = () => {
    return (
        <div>
            <a><img className={style.imgex} src={exit} alt="messages"/></a>
        </div>
    );
}

export default Exit;