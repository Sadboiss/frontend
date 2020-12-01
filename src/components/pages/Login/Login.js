
import React, { useState } from "react";
import { Form, Button, Checkbox } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { userActions, cartActions } from '../../../actions';
import './Login.scss'

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
			<div className="flex-row login">
				<Form>
					<Form.Field>
						<label>Email</label>
						<input placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
					</Form.Field>
					<Form.Field>
						<label>Password</label>
						<input placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
					</Form.Field>
					<Form.Field>
						<Checkbox label='Remember me' />
					</Form.Field>
					<Button secondary type='submit' onClick={(e) => handleSubmit(e)}>Submit</Button>
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
		login: (email, password) => dispatch(userActions.login(email, password))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);