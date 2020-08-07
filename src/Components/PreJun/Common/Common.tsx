import React, {ChangeEvent, useState} from "react";
import s from "./Common.module.css"
import {Button, Checkbox, TextField} from "@material-ui/core";

export function Common(){

    let [checked, setCheckBox]=useState(true)

    let onChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setCheckBox(e.currentTarget.checked)
    }

    return(
        <div className={s.item}>
            <TextField
            label={"Title"}
            />
            <Button variant={"outlined"}>Button</Button>
            <Checkbox color={"primary"} checked={checked} onChange={onChange} />
        </div>
    )
}