import React, { useEffect } from "react"
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { cartActions } from './actions';
import Home from './components/pages/Home/Home';
import Store from './components/pages/Store/Store';
import Cart from './components/pages/Cart/Cart';
//import Login from './components/pages/Login/Login';
import Signup from './components/pages/Signup/Signup';
import Admin from './components/pages/Admin/Admin';
import { Paper } from '@material-ui/core/';
import CssBaseline from '@material-ui/core/CssBaseline';
import AuthentificationModal from "./components/modals/AuthentificationModal";

const style = {
	root: {
		width: '100vw',
		height: '100vh'
	},
};


const App = (props) => {

	useEffect(() => {
		if (props.user)
			props.getCart()
	}, [])


	return (
		<>
			<Paper style={style}>
				<CssBaseline />
				<Router forceRefresh={true}>
					<Navigation />
					<Switch>
						<Route exact path="/" render={() => <Home />} />
						<Route exact path="/store" render={() => <Store />} />
						<Route exact path="/cart" render={() => <Cart />} />
						<Route exact path="/signup" render={() => <Signup />} />
						<Route exact path="/admin" render={() => <Admin />} />
					</Switch>
				</Router>
				<ToastContainer
					position="bottom-right"
					autoClose={2000}
					hideProgressBar={true}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
			</Paper>
			<AuthentificationModal />
		</>
	);
}

const mapStateToProps = (state) => {
	const { user } = state.authentication;
	const { cart } = state.carts
	return {
		cart,
		user
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		getCart: () => dispatch(cartActions.getCart())
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

