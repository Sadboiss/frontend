import { productConstants } from '../constants/product';
import { cartActions } from '../actions';
import { productService } from '../services/product';

const getAll = () => {
	return dispatch => {
		dispatch({ type: productConstants.GETALL_REQUEST });

		productService.getAll()
			.then(
				payload => dispatch({ type: productConstants.GETALL_SUCCESS, payload }),
				error => dispatch({ type: productConstants.GETALL_FAILURE, error })
			);
	};
}

const addOrUpdate = (product) => {
	return dispatch => {
		dispatch({ type: productConstants.ADD_REQUEST, product });

		productService.addOrUpdate(product)
			.then(
				(payload) => {
					dispatch({ type: productConstants.ADD_SUCCESS, payload })
					dispatch(getAll())
				},
				(error) => dispatch({ type: productConstants.ADD_FAILURE, error })
			)
	};
}

const updateDisplay = (product) => {
	return dispatch => {
		dispatch({ type: productConstants.UPDATE_REQUEST });

		productService.updateDisplay(product)
			.then(
				(payload) => {
					dispatch({ type: productConstants.UPDATE_SUCCESS, payload })
					dispatch(getAll())
				},
				(error) => dispatch({ type: productConstants.UPDATE_FAILURE, error })
			)
	};
}

const remove = (product) => {
	return dispatch => {
		dispatch({ type: productConstants.REMOVE_REQUEST, product });
		productService.remove(product).then(
			() => {
				dispatch({ type: productConstants.REMOVE_SUCCESS })
				dispatch(getAll())
				dispatch(cartActions.getCart())
			},
			(error) => dispatch({ type: productConstants.REMOVE_FAILURE }, error)
		)
	}
}

export const productActions = {
	getAll,
	addOrUpdate,
	updateDisplay,
	remove
};