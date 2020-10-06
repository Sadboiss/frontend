
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useAuth } from "../../context/auth";

function Login(props) {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();

    function postLogin(e) {
        fetch(`api/customers/1`)
        .then(response => response.json())
        .then(data => console.log(data));
        // axios.post(`/api/customers/authentification`
        // ).then(result => {
        //     if (result.status === 200) {
        //         setAuthTokens(result.data);
        //         setLoggedIn(true);
        //     } else {
        //         setIsError(true);
        //     }
        // }).catch(e => {
        //     setIsError(true);
        // });
    }

    if (isLoggedIn) {
        return <Redirect to="/" />;
    }

    return (
        <Form>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
            </Form.Group>
            <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" variant="dark" label="Remember me" />
            </Form.Group>
            <button className="button-themed" onClick={postLogin}>Login</button>
        </Form>
    )
}

export default Login;