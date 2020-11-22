import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import './styles/App.scss';
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './components/pages/Home';
import StorePage from './components/pages/Store';
import CartPage from './components/pages/Cart';
import LoginPage from './components/pages/Login';
import SignupPage from './components/pages/Signup';

const App = (props) => {
	return (
		<div className="app">
			<Router forceRefresh={true}>
				<Navigation />
				<Switch>
					<Route exact path="/" render={() => <HomePage />} />
					<Route exact path="/store" render={() => <StorePage />} />
					<Route exact path="/cart" render={() => <CartPage />} />
					<Route exact path="/login" render={() => <LoginPage />} />
					<Route exact path="/signup" render={() => <SignupPage />} />
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
		</div>
	);
}

export default App;

