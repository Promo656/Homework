import React, {useState} from "react";
import s from "./Tasks.module.css"
import {Button, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";


export type FilterType = "low" | "middle" | "high" | "all"
export type PropsType = {
    title: string
    //tasks: TasksListType
    //delTask: (id: number) => void
    //filterTasks:(value:FilterType)=>void
}
export type TasksListType = Array<TasksType>
export type TasksType = {
    id: number
    title: string
    priority: "low" | "middle" | "high"
}

export function Tasks(props: PropsType) {

    let [tasks, setTasks] = useState<TasksListType>([
        {id: 1, title: "Job", priority: "high"},
        {id: 2, title: "Relaxing", priority: "middle"},
        {id: 3, title: "Love", priority: "high"},
        {id: 4, title: "Learning", priority: "high"},
        {id: 5, title: "Walking", priority: "low"},
        {id: 7, title: "Gaming", priority: "low"}
    ])

    let [filter, setFilter] = useState<FilterType>("high")

    function delTask(id: number) {
        tasks = tasks.filter((t) => {
            return t.id !== id
        })
        setTasks(tasks)
    }

    function filterTasks(value: FilterType) {
        setFilter(value)
    }

    let filteredTasks = tasks
    if (filter === "low") {
        filteredTasks = tasks.filter((t) => t.priority === "low")
    }
    if (filter === "middle") {
        filteredTasks = tasks.filter((t) => t.priority === "middle")
    }
    if (filter === "high") {
        filteredTasks = tasks.filter((t) => t.priority === "high")
    }

    return (
        <div className={s.item}>
            <h2>{props.title}</h2>
            <ul>
                {tasks.map((t) => {
                    return (
                        <div key={t.id}>
                            <IconButton onClick={() => {delTask(t.id)}}><Delete/></IconButton>
                            <span>{t.title}-</span>
                            <span>{t.priority}</span>
                        </div>)
                })}
            </ul>
            <Button onClick={() => filterTasks("all")}>All</Button>
            <Button onClick={() => filterTasks("low")}>LOW</Button>
            <Button onClick={() => filterTasks("middle")}>MIDDLE</Button>
            <Button onClick={() => filterTasks("high")}>HIGH</Button>
        </div>
    )
}