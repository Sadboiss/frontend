import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Dropdown, Icon, Menu } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { userActions } from '../actions';
import './Navigation.scss';

const Navigation = (props) => {

	const [cart, setCart] = useState();

	useEffect(() => {
		setCart(JSON.parse(localStorage.getItem('cart')))
	}, [])

	const handleLogout = () => props.logout();

	const countCartItems = () => {
		if (cart) {
			return cart.cartItems.map(x => x.quantity).reduce((z, y) => z + y);
		}
	}

	return (
		<>
			<Menu className="navigation" secondary>
				<Menu.Item>
					<Link to="/" className="nav-link logo">sadbois</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to="/store" className="nav-link">Store</Link>
				</Menu.Item>
				<Menu.Menu position='right'>
					{!props.loggedIn ?
						<>
							<Menu.Item>
								<Link to="/signup" className="nav-link">Signup</Link>
							</Menu.Item>
							<Menu.Item>
								<Link to="/login" className="nav-link">Login</Link>
							</Menu.Item>
						</>
						:
						<>
							<Menu.Item>
								<Dropdown icon={<Icon name='shopping cart' size='large' />}>
									<Dropdown.Menu>
										<Dropdown.Item text={`Cart Items: ${countCartItems()}`} />
										<Dropdown.Item text={<Link to="/cart">See All</Link>} />
									</Dropdown.Menu>
								</Dropdown>
							</Menu.Item>
							<Menu.Item>
								<Dropdown icon={<Icon name='user' size='large' />}>
									<Dropdown.Menu>
										<Dropdown.Item onClick={() => handleLogout()}>Logout</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</Menu.Item>
						</>
					}
				</Menu.Menu>
			</Menu>
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

