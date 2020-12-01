import React from 'react';
import { connect } from 'react-redux';
import { Dropdown, Icon, Menu } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { userActions } from '../actions';
import './Navigation.scss';

const Navigation = (props) => {
	const handleLogout = () => props.logout();

	const countCartItems = () => {
		let cart = props.cart;
		if (cart && cart.cartItems.length > 0) {
			return cart.cartItems.map(x => x.quantity).reduce((z, y) => z + y);
		}
		return '0';
	}

	const shoppingCartLogo = () => {
		let count = countCartItems();
		return (
			<div className="shopping-cart-logo-wrapper">
				{count > 0 ?
					<div className="items-count">
						<span>{count}</span>
					</div>
					:
					null
				}
				<Icon name='shopping cart' size='large' />
			</div>
		)
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
					{!props.user ?
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
								<Dropdown icon={shoppingCartLogo()}>
									<Dropdown.Menu>
										<Dropdown.Item text={`Cart Items: ${countCartItems()}`} />
										<Dropdown.Item text={<Link to="/cart">See All</Link>} />
									</Dropdown.Menu>
								</Dropdown>
							</Menu.Item>
							<Menu.Item>
								<Dropdown icon={<Icon name='user' size='large' />}>
									<Dropdown.Menu>
										{props.user.userType === 'admin' ?
											<Dropdown.Item text={<Link to="/admin">Admin section</Link>} />
											:
											null
										}
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
	const { user } = state.authentication;
	const { cart } = state.carts
	return {
		user,
		cart
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		logout: () => dispatch(userActions.logout()),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

