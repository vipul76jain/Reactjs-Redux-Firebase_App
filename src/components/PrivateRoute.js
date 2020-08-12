import React from 'react';
import { Redirect, Route } from 'react-router-dom'
import cookie from 'react-cookies'
import Home from "../components/Home"


export default function PrivateRoute({ component: Component, ...rest }) {
    debugger
    const user = Object.values(cookie.loadAll());
    console.log("user", user);
    return (
        <Route
            {...rest}
            render={(props) => {
                console.log("render");
                return user.length !== 0 ? <Component {...props} /> : <Redirect to={{ pathname: "/login" }} />

            }} />
    );
};