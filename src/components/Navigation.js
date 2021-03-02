import React from 'react';
import { connect } from 'react-redux';
import { userActions, modalActions } from '../actions';
import { makeStyles } from '@material-ui/core/styles';
import Link from "@material-ui/core/Link";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AccountMenu from './menus/AccountMenu';
import CartMenu from './menus/CartMenu';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		'& > * + *': {
			marginLeft: theme.spacing(2),
		}
	},
	title: {
		flexGrow: 1,
	},
}));
const Navigation = (props) => {
	const classes = useStyles();
	// const shoppingCartLogo = () => {
	// 	let count = countCartItems();
	// 	return (
	// 		<div className="shopping-cart-logo-wrapper">
	// 			{count > 0 ?
	// 				<div className="items-count">
	// 					<span>{count}</span>
	// 				</div>
	// 				:
	// 				null
	// 			}
	// 			<Icon name='shopping cart' size='large' />
	// 		</div>
	// 	)
	// }
	return (
		<AppBar position="static" color="default" >
			<Toolbar>
				<Typography variant="h6" className={classes.root} color="inherit">
					<Link href="/" color="inherit">sadbois</Link>	
					<Link href="store" color="inherit">Store</Link>
				</Typography>
				{!props.user ?
					<Button color="inherit" onClick={() => props.open()}>Login</Button>
					:
					<Grid
						container
						direction="row"
						justify="flex-end"
						alignItems="center"
					>

						<CartMenu />
						<AccountMenu />
					</Grid>
				}
			</Toolbar>
		</AppBar >
	);
	// return (
	// 	<>
	// 		<Menu className="navigation" secondary>
	// 			<Menu.Item>
	// 				<Link to="/" className="nav-link logo">sadbois</Link>
	// 			</Menu.Item>
	// 			<Menu.Item>
	// 				<Link to="/store" className="nav-link">Store</Link>
	// 			</Menu.Item>
	// 			<Menu.Menu position='right'>
	// 				{!props.user ?
	// 					<>
	// 						<Menu.Item>
	// 							<Link to="/signup" className="nav-link">Signup</Link>
	// 						</Menu.Item>
	// 						<Menu.Item>
	// 							<Link to="/login" className="nav-link">Login</Link>
	// 						</Menu.Item>
	// 					</>
	// 					:
	// 					<>
	// 						<Menu.Item>
	// 							<Dropdown icon={shoppingCartLogo()}>
	// 								<Dropdown.Menu>
	// 									<Dropdown.Item text={`Cart Items: ${countCartItems()}`} />
	// 									<Dropdown.Item text={<Link to="/cart">See All</Link>} />
	// 								</Dropdown.Menu>
	// 							</Dropdown>
	// 						</Menu.Item>
	// 						<Menu.Item>
	// 							<Dropdown icon={<Icon name='user' size='large' />}>
	// 								<Dropdown.Menu>
	// 									{props.user.userType === 'admin' ?
	// 										<Dropdown.Item text={<Link to="/admin">Admin section</Link>} />
	// 										:
	// 										null
	// 									}
	// 									<Dropdown.Item onClick={() => handleLogout()}>Logout</Dropdown.Item>
	// 								</Dropdown.Menu>
	// 							</Dropdown>
	// 						</Menu.Item>
	// 					</>
	// 				}
	// 			</Menu.Menu>
	// 		</Menu>
	// 	</>
	// );
}

const mapStateToProps = (state) => {
	const { user } = state.authentication;
	const { cart } = state.carts;
	const { modalType } = state.modal;
	return {
		user,
		cart,
		modalType
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		logout: () => dispatch(userActions.logout()),
		open: () => dispatch(modalActions.open())
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

