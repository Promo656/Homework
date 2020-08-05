import React from "react";
import s from "../App.module.css";
import {Paper} from "@material-ui/core";

export function PreJunior() {
    return (
        <div>
            <Paper>
                <div className={s.messageBlock}>
                    <img className={s.messageLogo} src="https://fanparty.ru/fanclubs/tom-kruz/gallery/1851014_tom_kruz.jpg"
                         alt=""/>
                    <div className={s.message}>
                        <div className={s.name}>Egor</div>
                        <div className={s.text}>Hello, it's my first SPA!</div>
                        <div className={s.time}>23:02</div>
                        <div className={s.tail}></div>
                    </div>
                </div>
            </Paper>
        </div>
    )
}