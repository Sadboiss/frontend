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
					<Button color="inherit" onClick={() => props.open('AUTHENTICATE')}>Login</Button>
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
}

const mapStateToProps = (state) => {
	const { user } = state.authentication;
	const { modalType } = state.modal;
	return {
		user,
		modalType
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		logout: () => dispatch(userActions.logout()),
		open: (modalType, modalProps) => dispatch(modalActions.open(modalType, modalProps))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

