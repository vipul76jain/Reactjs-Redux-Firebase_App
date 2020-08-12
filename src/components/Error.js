import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory, useLocation } from "react-router-dom";

function Error() {
    let location = useLocation();

    return (
        <div>
            <div className="header" style={{ justifyContent: "center", alignItems: "center", color: "#fff" }}>
                <h2>Error</h2>
            </div>
            <div style={{ marginTop: 80 }}>
                <h2>
                    Page not found - <span style={{ color: "red" }}>404</span>
                </h2>
                <h3>
                    No match for <code>{location.pathname}</code>
                </h3>
            </div>
        </div>
    );
}

export default Error;