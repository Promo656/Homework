import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {Button, Container, Grid} from "@material-ui/core";

export function Header() {
    return (
        <div className={s.container}>
            <Container fixed>
                <Grid container className={s.btnmargin}>
                    <Button variant={"outlined"} color={"primary"}><NavLink
                        to={"prejunior"}>PreJunior</NavLink></Button>
                    <Button variant={"outlined"} color={"primary"}><NavLink to={"junior"}>Junior</NavLink></Button>
                    <Button variant={"outlined"} color={"primary"}><NavLink
                        to={"apperjunior"}>Junior+</NavLink></Button>
                </Grid>
            </Container>
        </div>
    )
}