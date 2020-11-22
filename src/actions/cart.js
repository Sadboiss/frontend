import { cartConstants } from '../constants';
import { cartService } from '../services';

const addToCart = (product) => {
	return dispatch => {
		dispatch(request({product}));

		cartService.addToCart(product)
			.then(
				product => dispatch(success(product)),
				error => dispatch(failure(error))
			);
	};

	function request(product) { return { type: cartConstants.ADD_REQUEST, product } }
	function success(product) { return { type: cartConstants.ADD_SUCCESS, product } }
	function failure(error) { return { type: cartConstants.ADD_FAILURE, error } }
}

const getCart = () => {
	return dispatch => {
		dispatch(request());

		cartService.getCart()
			.then(
				cart => dispatch(success(cart)),
				error => dispatch(failure(error))
			);
	};

	function request() { return { type: cartConstants.GET_ITEMS_REQUEST } }
	function success(cart) { return { type: cartConstants.GET_ITEMS_SUCCESS, cart } }
	function failure(error) { return { type: cartConstants.GET_ITEMS_FAILURE, error } }
}

export const cartActions = {
	addToCart,
	getCart
};