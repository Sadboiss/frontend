import React, { useState } from 'react';
import { userActions } from '../../actions';
import { connect } from 'react-redux';
import { FormControl, InputLabel, Input, FormGroup, Button } from '@material-ui/core';

const LoginForm = (props) => {

    const [email, setEmail] = useState("test1@gmail.com");
    const [password, setPassword] = useState("123");
    
    const buttonStyle = {
        width: 100,
        margin: '20px 0'
    }

    const handleSubmit = (e) => {
		e.preventDefault();
		const { login } = props;
		if (email && password) {
			login(email, password);
		}
	}


    return (
        <FormGroup column="true">
            <FormControl>
                <InputLabel htmlFor="email">Email address</InputLabel>
                <Input id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="pwd">Password</InputLabel>
                <Input id="pwd" value={password} onChange={(e) => { setPassword(e.target.value) }} />
            </FormControl>
            <FormControl>
                <Button variant="contained" type="submit" style={buttonStyle} onClick={(e) => handleSubmit(e)}>Login</Button>
            </FormControl>
        </FormGroup>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);