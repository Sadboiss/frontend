import React, { useState } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../actions';
import { FormControl, InputLabel, Input, FormGroup, Button } from '@material-ui/core';
import Utils from '../../utilities/utils';

const RegisterForm = (props) => {

    const [firstName, setFirstName] = useState("Antoine");
	const [lastName, setLastName] = useState("Hakim");
	const [email, setEmail] = useState("test4@gmail.com");
	const [password, setPassword] = useState("123");
	const [streetName, setStreetName] = useState("Tripoli");
	const [civicNumber, setCivicNumber] = useState("1856");
	const [zipCode, setZipCode] = useState("h7m4m5");
    const [phone, setPhone] = useState("514-966-8481");
    
    const handleSubmit = (e) => {
		e.preventDefault();
		const { signup } = props;
		const params = {
			firstName,
			lastName,
			email,
			password,
			streetName,
			civicNumber,
			zipCode,
			phone
		}
		if (!Utils.hasNull(params)) {
			signup(params);
		}
	}

    const buttonStyle = {
        width: 100,
        margin: '20px 0'
    }

    return (
        <FormGroup column="true">
            <FormControl>
                <InputLabel htmlFor="firstName">First name</InputLabel>
                <Input id="fName" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="lastName">Last name</InputLabel>
                <Input id="lName" value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="email">Email address</InputLabel>
                <Input id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="pwd">Password</InputLabel>
                <Input id="pwd" value={password} onChange={(e) => { setPassword(e.target.value) }} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="streetName">Street name</InputLabel>
                <Input id="stName" value={streetName} onChange={(e) => { setStreetName(e.target.value) }} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="civicNumber">Civic number</InputLabel>
                <Input id="cvNumb" value={civicNumber} onChange={(e) => { setCivicNumber(e.target.value) }} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="zipCode">Zip code</InputLabel>
                <Input id="zCode" value={zipCode} onChange={(e) => { setZipCode(e.target.value) }} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="phone">Phone</InputLabel>
                <Input id="phone" value={phone} onChange={(e) => { setPhone(e.target.value) }} />
            </FormControl>
            <FormControl>
                <Button variant="contained" type="submit" style={buttonStyle} onClick={(e) => handleSubmit(e)}>Register</Button>
            </FormControl>
        </FormGroup>
    )
}

const mapStateToProps = (state) => {
	const { created, user, error } = state.signup;
	return {
		created,
		user,
		error
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		signup: (params) => dispatch(userActions.signup(params)),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);