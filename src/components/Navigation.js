import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dropdown, Icon } from 'semantic-ui-react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import logo from '../assets/first_proto.svg';
import { Link } from "react-router-dom";
import { userActions, cartActions } from '../actions';

const Navigation = (props) => {

	useEffect(() => {
		let user = localStorage.getItem('user');
		if (user) {
			props.getCart();
		}
	}, [])

	const handleLogout = () => {
		const { logout } = props;
		logout();
	}

	const countCartItems = () => {
		if (props.cart) {
			return props.cart.cartItems.map(x => x.quantity).reduce((z, y) => z + y);
		}
	}

	return (
		<>
			<nav className="navigation">
				<Link to="/" className="nav-link logo">sadbois</Link>
				<Link to="/store" className="nav-link">Store</Link>
				<div className="flex"></div>
				{!props.loggedIn ?
					<>
						<Link to="/signup" className="nav-link">Signup</Link>
						<Link to="/login" className="nav-link">Login</Link>
					</>
					:
					<>
						<Dropdown icon={<Icon name='shopping cart' size='large' />}>
							<Dropdown.Menu>
								<Dropdown.Item text={`Cart Items: ${countCartItems()}`} />
								<Dropdown.Item text={<Link to="/cart">See All</Link>} />
							</Dropdown.Menu>
						</Dropdown>
						<div className="flex-5"></div>
						<Dropdown icon={<Icon name='user' size='large' />}>
							<Dropdown.Menu>
								<Dropdown.Item onClick={() => handleLogout()}>Logout</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						<div className="flex-5"></div>
					</>
				}
			</nav>
		</>
	);
}

const mapStateToProps = (state) => {
	const { loggedIn, user } = state.authentication;
	const { cart } = state.carts;
	return {
		loggedIn,
		user,
		cart
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		logout: () => dispatch(userActions.logout()),
		getCart: () => dispatch(cartActions.getCart())
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

