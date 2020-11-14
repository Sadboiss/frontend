
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import { userActions } from '../../actions';

const Login = (props) => {
	const [email, setEmail] = useState("test1@gmail.com");
	const [password, setPassword] = useState("123");

	const handleSubmit = (e) => {
		e.preventDefault();

		const { dispatch } = props;
		if (email && password) {
			dispatch(userActions.login(email, password));
		}
	}

	return (
		<div className="flex-row form-container">
			<Form onSubmit={(e) => handleSubmit(e)}>
				<Form.Group controlId="formGroupEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control name="email" type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
				</Form.Group>
				<Form.Group controlId="formGroupPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control name="password" type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
				</Form.Group>
				<Form.Group id="formGridCheckbox">
					<Form.Check type="checkbox" variant="dark" label="Remember me" />
				</Form.Group>
				<input type="submit" value="Login" />
			</Form>
		</div>
	)
}
const mapStateToProps = (state) => {

	const { loggingIn } = state.authentication;
	return {
		loggingIn
	};
}

export default connect(mapStateToProps)(Login);