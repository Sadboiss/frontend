import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../actions';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import { Link } from "react-router-dom";
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const camelCase = require('camelcase');
const routes = [
    'admin'
];

const ITEM_HEIGHT = 48;

const AccountMenu = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => props.logout();

    return (
        <>
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <AccountCircleIcon />
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                {routes.map((route, index) => (
                    <MenuItem key={index} >
                        <Link to={route} color="inherit">{camelCase(route, {pascalCase: true})}</Link>
                    </MenuItem>
                ))}
                <MenuItem onClick={handleLogout}>
                    Logout
                </MenuItem>
            </Menu>
        </>
    );
}

const mapDispatchToProps = (dispatch) => {
	return {
		logout: () => dispatch(userActions.logout())
	}
};

export default connect(null, mapDispatchToProps)(AccountMenu);
