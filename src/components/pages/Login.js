
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import authentification from '../../services/authentification';

function Login(props) {
	const [email, setEmail] = useState("test1@gmail.com");
	const [password, setPassword] = useState("123");

	function postLogin(e) {
		e.preventDefault();
		let creds = {email, password}
		authentification.login(creds);
	}

	return (
		<div className="flex-row form-container">
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
				<button onClick={postLogin}>Login</button>
			</Form>
		</div>
	)
}

export default Login;