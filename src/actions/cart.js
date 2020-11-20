import { cartConstants } from '../constants';
import { cartService } from '../services';

const getCart = () => {
	return dispatch => {
		dispatch(request());

		cartService.getCart()
			.then(
				item => dispatch(success(item)),
				error => dispatch(failure(error))
			);
	};

	function request() { return { type: cartConstants.GET_ITEMS_REQUEST } }
	function success(item) { return { type: cartConstants.GET_ITEMS_SUCCESS, item } }
	function failure(error) { return { type: cartConstants.GET_ITEMS_FAILURE, error } }
}

export const cartActions = {
	getCart
};