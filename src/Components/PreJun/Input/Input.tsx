import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import s from "./Input.module.css"
import {Button, TextField} from "@material-ui/core";
import {v1} from "uuid";


type ArrType = {
    id: string
    name: string
}

export function Input() {

    let [name, setHi] = useState("")
    let [newNameArr, setNewNameArr] = useState<Array<ArrType>>([])

    function addName() {
        if (name !== "") {
            alert(`Hi ${name}!`)
            let newName = {id: v1(), name: name}

            let newArr = [newName, ...newNameArr]
            setNewNameArr(newArr)
            setHi('')
        } else {
            alert("Enter a valid name!")
        }
    }

    function takeValue(e: ChangeEvent<HTMLInputElement>) {
        setHi(e.currentTarget.value)
    }

    function sayHi(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Enter") {
            addName()
        }
    }

    return (
        <div className={s.item}>
            <TextField
                label={"Title"}
                value={name}
                onChange={takeValue}
                onKeyPress={sayHi}
            />
            <Button variant={"outlined"} onClick={addName}>OK</Button>
            <div>
                {
                    newNameArr.length
                }
            </div>
        </div>
    )
}