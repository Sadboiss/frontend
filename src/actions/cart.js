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

	function request() { return { type: cartConstants.GET_CART_REQUEST } }
	function success(payload) { return { type: cartConstants.GET_CART_SUCCESS, payload } }
	function failure(error) { return { type: cartConstants.GET_CART_FAILURE, error } }
}

// const getItemsCount = () => {
// 	return dispatch => {
// 		dispatch(request());
// 		cartService.getItemsCount()
// 			.then(
// 				payload => dispatch(success(payload)),
// 				error => dispatch(failure(error))
// 			);
// 	};

// 	function request() { return { type: cartConstants.GET_ITEMS_COUNT_REQUEST } }
// 	function success(payload) { return { type: cartConstants.GET_ITEMS_COUNT_SUCCESS, payload } }
// 	function failure(error) { return { type: cartConstants.GET_ITEMS_COUNT_FAILURE, error } }
// }

const addToCart = (cart, product) => {
	return dispatch => {
		dispatch(request({product}));

		cartService.addToCart(cart, product)
			.then(
				product => {
					dispatch(success(cart, product))
					//dispatch(getItemsCount())
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
	getCart,
	//getItemsCount
};