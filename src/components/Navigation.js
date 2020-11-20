import React, { useEffect } from 'react';
import { connect } from 'react-redux';
//import Dropdown from 'react-bootstrap/Dropdown';
import { Dropdown } from 'semantic-ui-react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import logo from '../assets/first_proto.svg';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { userActions, cartActions } from '../actions';

const Navigation = (props) => {

	useEffect(() => {
		props.getCart();
	}, [])

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
							<h3 className="cart-btn">
								<Dropdown icon={<FaShoppingCart />}>
									<Dropdown.Menu>
										<Dropdown.Item text={`Cart Items: ${props.item.cartItems.count}`} />
										<Dropdown.Item text='Open...' description='ctrl + o' />
										<Dropdown.Item icon='trash' text='Move to trash' />
										<Dropdown.Item text={<Link to="/cart">See All</Link>} />
									</Dropdown.Menu>
								</Dropdown>
							</h3>
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
	const { item } = state.cart;
	console.log(item)
	return {
		loggedIn,
		user,
		item,
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		logout: () => dispatch(userActions.logout()),
		getCart: ()  => dispatch(cartActions.getCart())
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

