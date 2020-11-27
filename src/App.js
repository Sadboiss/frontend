import React from "react"
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './components/pages/Home/Home';
import Store from './components/pages/Store/Store';
import Cart from './components/pages/Cart/Cart';
import Login from './components/pages/Login/Login';
import Signup from './components/pages/Signup/Signup';
import Admin from './components/pages/Admin/Admin';

const App = (props) => {
	return (
		<div className="app">
			<Router forceRefresh={true}>
				<Navigation />
				<Switch>
					<Route exact path="/" render={() => <Home />} />
					<Route exact path="/store" render={() => <Store />} />
					<Route exact path="/cart" render={() => <Cart />} />
					<Route exact path="/login" render={() => <Login />} />
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
		</div>
	);
}

export default App;

