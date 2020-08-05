import React from 'react';
import './App.module.css';
import s from "./App.module.css"
import {NavLink} from "react-router-dom";

function App() {
    return (
        <div className={s.container}>
            <NavLink to={"/prejunior"}>preJunior</NavLink>
            <NavLink to={"/junior"}>Junior</NavLink>
            <NavLink to={"/junior+"}>Junior+</NavLink>
        </div>
    )
}

export default App;
