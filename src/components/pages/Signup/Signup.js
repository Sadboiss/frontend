import React, { useState } from 'react';
import { Form, Button, Checkbox } from 'semantic-ui-react';
import Utils from '../../../utilities/utils';
import { connect } from 'react-redux';
import { userActions } from '../../../actions';

const Signup = (props) => {
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
	return (
		<div className="login">
			<Form>
				<Form.Field>
					<label>First Name</label>
					<input name="firstName" type="text" placeholder="First Name" value={firstName} onChange={(e) => { setFirstName(e.target.value) }}/>
				</Form.Field>
				<Form.Field>
					<label>Last Name</label>
					<input  name="lastName" type="text" placeholder="Last Name" value={lastName} onChange={(e) => { setLastName(e.target.value) }}/>
				</Form.Field>
				<Form.Field>
					<label>Email</label>
					<input name="email" type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }}/>
				</Form.Field>
				<Form.Field>
					<label>Password</label>
					<input type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }}/>
				</Form.Field>
				<Form.Field>
					<label>Street name</label>
					<input name="streetName" type="text" placeholder="Street name" value={streetName} onChange={(e) => { setStreetName(e.target.value) }}/>
				</Form.Field>
				<Form.Field>
					<label>Civic number</label>
					<input name="civicNumber" type="text" placeholder="Civic number" value={civicNumber} onChange={(e) => { setCivicNumber(e.target.value) }}/>
				</Form.Field>
				<Form.Field>
					<label>Zip code</label>
					<input name="zipCode" type="text" placeholder="Zip code" value={zipCode} onChange={(e) => { setZipCode(e.target.value) }}/>
				</Form.Field>
				<Form.Field>
					<label>Phone</label>
					<input name="phone" type="text" placeholder="Phone" value={phone} onChange={(e) => { setPhone(e.target.value) }}/>
				</Form.Field>
				<Form.Field>
					<Checkbox label='I agree to the Terms and Conditions' />
				</Form.Field>
				<Button secondary type='submit' onClick={(e) => handleSubmit(e)}>Submit</Button>
			</Form>
		</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Signup);