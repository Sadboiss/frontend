import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Utils from '../../utilities/utils';
import { connect } from 'react-redux';
import { userActions } from '../../actions';

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
		const { dispatch } = props;
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
			dispatch(userActions.signup(params));
		}
	}
	return (
		<div className="flex-row form-container">
			<Form onSubmit={(e) => handleSubmit(e)}>
				<Form.Row>
					<Form.Group as={Col} controlId="formGridFirstName">
						<Form.Label>First Name</Form.Label>
						<Form.Control name="firstName" type="text" placeholder="First Name" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridLastName">
						<Form.Label>Last Name</Form.Label>
						<Form.Control name="lastName" type="text" placeholder="Last Name" value={lastName} onChange={(e) => { setLastName(e.target.value) }}/>
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>Email</Form.Label>
						<Form.Control name="email" type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }}/>
					</Form.Group>

					<Form.Group as={Col} controlId="formGridPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }}/>
					</Form.Group>
				</Form.Row>

				<Form.Group controlId="formGridStreetName">
					<Form.Label>Street Name</Form.Label>
					<Form.Control name="streetName" type="text" placeholder="Street name" value={streetName} onChange={(e) => { setStreetName(e.target.value) }}/>
				</Form.Group>

				<Form.Row>
					<Form.Group as={Col} controlId="formGridCivicNumber">
						<Form.Label>Civic Number</Form.Label>
						<Form.Control name="civicNumber" type="text" placeholder="Civic number" value={civicNumber} onChange={(e) => { setCivicNumber(e.target.value) }}/>
					</Form.Group>

					<Form.Group as={Col} controlId="formGridZip">
						<Form.Label>Zip code</Form.Label>
						<Form.Control name="zipCode" type="text" placeholder="Zip code" value={zipCode} onChange={(e) => { setZipCode(e.target.value) }}/>
					</Form.Group>
				</Form.Row>

				<Form.Row>
					<Form.Group as={Col} controlId="formGridPhone">
						<Form.Label>Phone</Form.Label>
						<Form.Control name="phone" type="text" placeholder="Phone" value={phone} onChange={(e) => { setPhone(e.target.value) }}/>
					</Form.Group>
				</Form.Row>

				<Form.Group id="formGridCheckbox">
					<Form.Check type="checkbox" variant="dark" label="Subscribe to our news letters" />
				</Form.Group>
				<input type="submit" value="Login" />
			</Form>
		</div>
	)
}

const mapStateToProps = (state) => {
	const { accountCreation } = state.accountCreation;
	return {
		accountCreation
	};
}

export default connect(mapStateToProps)(Signup);