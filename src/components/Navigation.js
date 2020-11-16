import React from 'react';
import { connect } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import logo from '../assets/first_proto.svg';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { userActions } from '../actions';

const Navigation = (props) => {
	const handleLogout = () => {
		const { logout } = props;
		logout();
	}

	return (
		<>
			<nav className="navigation flex-row">
				<div className="logo flex-row justify-content-center-center">
					<Link to="/"><img role="button" className="cursor" src={logo} alt="" /></Link>
				</div>
				<div className="menu-container flex-row align-items-center">
					<Link to="/store" className="nav-link">Store</Link>
				</div>
				<div className="flex"></div>
				{!props.loggedIn ?
					<div className="menu-container flex-row align-items-center">
						<Link to="/signup" className="nav-link">Signup</Link>
						<Link to="/login" className="nav-link">Login</Link>
					</div>
					:
					<>
						<div className="menu-icons flex-row">
							<Link to="/cart">
								<h3 className="cart-btn">
									<FaShoppingCart />
								</h3>
							</Link>
							<div className="logged-in flex-row align-items-center">
								<DropdownButton as={ButtonGroup} title={props.user.firstName}>
									<Dropdown.Item >Action</Dropdown.Item>
									<Dropdown.Item >Another action</Dropdown.Item>
									<Dropdown.Item onClick={() => handleLogout()}>Logout</Dropdown.Item>
								</DropdownButton>
							</div>
						</div>
					</>
				}
			</nav>
		</>
	);
}

const mapStateToProps = (state) => {
	const { loggedIn, user } = state.authentication;
	return {
		loggedIn,
		user
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		logout: () => dispatch(userActions.logout()),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

