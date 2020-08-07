import React from "react";
import s from "./Common.module.css"
import {Button, TextField} from "@material-ui/core";


export function Common(){
    return(
        <div className={s.item}>
            <TextField
            label={"Title"}
            />
            <Button variant={"outlined"}>Button</Button>
        </div>
    )
}