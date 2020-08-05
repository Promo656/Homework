import React from 'react';
import './App.module.css';
import s from "./App.module.css"
import {Header} from "./Components/Header";
import {Route} from "react-router-dom";
import {PreJunior} from "./Components/PreJunior";
import {Junior} from "./Components/Junior";
import {ApperJunior} from "./Components/ApperJunior";


function App() {
    return (
        <div className={s.container}>
            <Header/>
            <div className={s.itemContainer}>
            <Route path={"/prejunior"} render={()=><PreJunior/>}/>
            <Route path={"/junior"} render={()=><Junior/>}/>
            <Route path={"/apperjunior"} render={()=><ApperJunior/>}/>
            </div>
        </div>
    )
}

export default App;

{/* <NavLink to={"/prejunior"}>preJunior</NavLink>
            <NavLink to={"/junior"}>Junior</NavLink>
            <NavLink to={"/junior+"}>Junior+</NavLink>*/
}