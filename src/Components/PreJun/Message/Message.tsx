import {Paper} from "@material-ui/core";
import s from "./Message.module.css";
import React from "react";

type MessageProps={
    name:string
    messageText:string
    time:string
}

export function Message(props: MessageProps) {
    return (

            <div className={s.messageBlock}>
                <img className={s.messageLogo}
                     src="https://fanparty.ru/fanclubs/tom-kruz/gallery/1851014_tom_kruz.jpg"
                     alt=""/>
                <div className={s.message}>
                    <div className={s.name}>{props.name}</div>
                    <div className={s.text}>{props.messageText}</div>
                    <div className={s.time}>{props.time}</div>
                    <div className={s.tail}></div>
                </div>
            </div>

    )
}