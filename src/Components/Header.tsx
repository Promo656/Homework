import React from "react";
import s from "./../App.module.css"
import {NavLink} from "react-router-dom";
import {Button, Container, Grid} from "@material-ui/core";

export function Header() {
    return (
        <div>
            <Container fixed>
                <Grid container>
                    <Button><NavLink to={"prejunior"}>PreJunior</NavLink></Button>
                    <Button><NavLink to={"junior"}>Junior</NavLink></Button>
                    <Button><NavLink to={"apperjunior"}>Junior+</NavLink></Button>
                </Grid>
            </Container>
        </div>
    )
}