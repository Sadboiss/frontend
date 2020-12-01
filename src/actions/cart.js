import { cartConstants } from '../constants';
import { cartService } from '../services';

const getCart = () => {
	return dispatch => {
		dispatch(request());

		cartService.getCart()
			.then(
				payload => dispatch(success(payload)),
				error => dispatch(failure(error))
			);
	};

	function request() { return { type: cartConstants.GET_ITEMS_REQUEST } }
	function success(payload) { return { type: cartConstants.GET_ITEMS_SUCCESS, payload } }
	function failure(error) { return { type: cartConstants.GET_ITEMS_FAILURE, error } }
}

const addToCart = (product) => {
	return dispatch => {
		dispatch(request({product}));

		cartService.addToCart(product)
			.then(
				product => {
					dispatch(success(product))
					dispatch(getCart())
				},
				error => dispatch(failure(error))
			);
	};

	function request(product) { return { type: cartConstants.ADD_REQUEST, product } }
	function success(product) { return { type: cartConstants.ADD_SUCCESS, product } }
	function failure(error) { return { type: cartConstants.ADD_FAILURE, error } }
}


export const cartActions = {
	addToCart,
	getCart
};