import React from "react";
import {Message} from "./Message/Message";
import {Paper} from "@material-ui/core";
import {Tasks} from "./Tasks/Tasks";
import {Input} from "./Input/Input";
import {Common} from "./Common/Common";

export function PreJunior() {
    return (
        <div>
            <Paper elevation={6}>
                <Message name={"Tom"} messageText={"Hello, friends! It's my first messge"} time={"23:02"}/>
                <Message name={"Tom"} messageText={"Hello, friends! It's my first messge"} time={"23:02"}/>
            </Paper>
            <Paper elevation={6}>
                <Tasks title={"My daily tasks"}/>
            </Paper>
            <Paper elevation={6}>
                <Input/>
            </Paper>
            <Paper elevation={6}>
                <Common/>
            </Paper>
        </div>
    )
}

