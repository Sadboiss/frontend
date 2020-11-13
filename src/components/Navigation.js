import React, { useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import logo from '../assets/first_proto.svg';
import Utils from '../utilities/utils';
import { FaShoppingCart } from 'react-icons/fa';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import HomePage from './pages/Home';
import StorePage from './pages/Store';
import CartPage from './pages/Cart';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';

//import { userActions } from '../actions';

const Navigation = (props) => {
	useEffect(() => {
		//props.dispatch(userActions.getAll());
	});

	//const { user } = props;

	return (
		<Router>
			<nav className="navigation flex-row">
				<div className="logo flex-row justify-content-center-center">
					<Link to="/"><img role="button" className="cursor" src={logo} alt="" /></Link>
				</div>
				<div className="menu-container flex-row align-items-center">
					<Link to="/store" className="nav-link">Store</Link>
				</div>
				<div className="flex"></div>
				{Utils.isEmpty(localStorage.getItem('user')) ?
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
								<DropdownButton id="dropdown-basic-button" title="a" >
									<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
									<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
									<Dropdown.Item href="#/action-3" onClick={() => { }}>Logout</Dropdown.Item>
								</DropdownButton>
							</div>
						</div>
					</>
				}
			</nav>
			<Switch>
				<Route exact path="/store" render={() => <StorePage />} />
				<Route exact path="/" render={() => <HomePage />} />
				<Route exact path="/cart" render={() => <CartPage />} />
				<Route exact path="/login" render={() => <LoginPage />} />
				<Route exact path="/signup" render={() => <SignupPage />} />
			</Switch>
		</Router>
	);
}
export default Navigation;

