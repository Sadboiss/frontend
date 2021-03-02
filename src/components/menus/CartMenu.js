import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../actions';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const CartMenu = (props) => {
    const history = useHistory();

    const handleRedirect = (event) => {
        history.push('/cart');
    }

    const countCartItems = () => {
        let cart = props.cart;
        if (cart && cart.cartItems.length > 0) {
            return cart.cartItems.map(x => x.quantity).reduce((z, y) => z + y);
        }
        return '0';
    }

    return (
        <>
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleRedirect}
            >
                <ShoppingCartIcon />
            </IconButton>
        </>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(userActions.logout())
    }
};

export default connect(null, mapDispatchToProps)(CartMenu);
