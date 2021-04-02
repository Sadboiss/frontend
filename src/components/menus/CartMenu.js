import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { cartActions } from '../../actions';
import { useHistory } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
    
const CartMenu = ({ user, cart, getItemsCount, getCart}) => {
     /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        if(user)
            getCart();
            //getItemsCount();
    }, [])
    const history = useHistory();

    const StyledBadge = withStyles((theme) => ({
        badge: {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }))(Badge);

    const handleRedirect = (event) => {
        history.push('/cart');
    }

    return (
        <>
            <IconButton
                aria-label="cart"
                onClick={handleRedirect}
            >
                <StyledBadge badgeContent={cart ? cart.itemsCount : 0} color="secondary">
                    <ShoppingCartIcon />
                </StyledBadge>
            </IconButton>
        </>
    );
}

const mapStateToProps = (state) => {
    const { user } = state.authentication 
    const { cart } = state.carts;
    return {
        user,
        cart
    }
};
const mapDispatchToProps = (dispatch) => {
	return {
        getCart: () => dispatch(cartActions.getCart()),
        //getItemsCount: () => dispatch(cartActions.getItemsCount())
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(CartMenu);
