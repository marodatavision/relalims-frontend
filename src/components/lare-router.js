import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainDesc from "./logo/main-desc";
import { userLogin } from "./services/AuthServices";
import { navLinkStyle } from './styles/nav-styles';

export default function LareRouter() {
    return (
        <Router>
        <div>
            <div className="flex">
                <MainDesc/>
                <nav className="m-3 border-2 border-gray-200 rounded py-3 px-5">
                    <div className="text-xl mb-5">Navigation</div>
                    <ul className="flex space-x-3">
                        <li>
                            <Link className={navLinkStyle} to="/">Home</Link>
                        </li>
                        <li>
                            <Link className={navLinkStyle} to="/about">About</Link>
                        </li>
                        <li>
                            <Link className={navLinkStyle} to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/users">
                    <Users />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
        </Router>
    );
}

function Home() {

    const [loginData, setLoginData] = useState({});

    const onChange = (e, loginDataType) => {
        setLoginData({...loginData, [loginDataType]: e.target.value});
    }

    const onClick = () => {
        userLogin(loginData);
    }

    return (
        <div>
            <div className="text-xl font-bold">Login</div>
            <TextField onChange={e => onChange(e, "email")} variant="outlined" type="text" label="Email"/>
            <TextField onChange={e => onChange(e, "password")} variant="outlined" type="password" label="Passwort" />
            <Button onClick={onClick} variant="contained" color="primary">Login</Button>
        </div>
    );
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}