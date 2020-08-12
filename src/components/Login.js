import React, { Component } from 'react';
import cookie from 'react-cookies'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { withRouter } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory, useLocation } from "react-router-dom";
class Login extends Component {
    constructor(props) {
        console.log('Login')
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
        }
    }

    render() {
        return (
            <div>
                <div className="header" style={{ justifyContent: "center", alignItems: "center", color: "#fff" }}>
                    <h2>Login</h2>
                </div>
                <div style={{ marginTop: 65, display: "flex", justifyContent: "center" }}>
                    <Card style={{ backgroundColor: "lavender", width: 450, display: "flex", flexDirection: "column", alignItems: "center", padding: 15, marginTop: 50 }}>
                        <text style={{ marginTop: 15, textAlign: 'center', color: '#4A4A4A', fontSize: 15 }}> Please sign-in and access your account </text>
                        <TextField style={{ marginTop: 30, width: "50%" }}
                            placeholder="Email"
                            type="email"
                            label="Email"
                            required={true}
                            onChange={this.onChangeEmail}
                            helperText={this.state.emailError}
                            error={this.state.emailError}
                            floatingLabelText="Email"
                        />
                        <TextField style={{ marginTop: 15, width: "50%" }}
                            placeholder="Password"
                            type="password"
                            inputRef={this.passwordRef}
                            onChange={this.onChangePassword}
                            helperText={this.state.passwordError}
                            error={this.state.passwordError}
                            label="Password"
                            floatingLabelText="Username"
                            required={true}
                        />
                        <div style={{ marginTop: 30, marginBottom: 30 }}>
                            <Button size="small" color="primary" fo disabled={!this.state.email || !this.state.password || this.state.emailError || this.state.passwordError} onClick={this.onSubmit} style={{ backgroundColor: "darkcyan", color: "#fff" }}>
                                Sign In</Button>
                        </div>
                    </Card>
                </div>
            </div>
        );

    }

    onChangeEmail = (event) => {
        this.setState({ email: event.target.value }, () => {
            this.validateEmail();
        });
    }

    validateEmail = () => {
        let errors = ""
        const { email } = this.state;
        if (!email) {
            errors = "Email is required"
        } else if (email.length < 3) {
            errors = "Email must be longer than 3 characters"
        }
        this.setState({
            emailError: errors
        });
    }

    onChangePassword = (event) => {
        this.setState({ password: event.target.value }, () => {
            this.validatePassword();
        });
    }

    validatePassword = () => {
        let errors = ""
        const { password } = this.state;
        if (!password) {
            errors = "Passwor is required"
        } else if (password.length < 8) {
            errors = "Password must be longer than 8 characters"
        }
        this.setState({
            passwordError: errors
        });
    }



    onSubmit = () => {
        let email = this.state.email
        let password = this.state.password
        cookie.save(email, password, { path: '/' })
        this.props.history.push('/')

    }
}

export default withRouter(Login);