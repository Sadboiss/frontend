
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { userActions } from '../../actions';

const Login = (props) => {
	const [email, setEmail] = useState("test1@gmail.com");
	const [password, setPassword] = useState("123");

	const handleSubmit = (e) => {
		e.preventDefault();

		const { login } = props;
		if (email && password) {
			login(email, password);
		}
	}

	return (
		<>
			<p>{props.error}</p>

			<div className="flex-row form-container">
				<Form>
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
					<Button onClick={(e) => handleSubmit(e)}>Login</Button>
				</Form>
			</div>
		</>
	)
}

const mapStateToProps = (state) => {

	const { loggingIn, error } = state.authentication;
	return {
		loggingIn,
		error
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		login: (email, password) => dispatch(userActions.login(email, password)),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);