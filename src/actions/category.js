import { categoryConstants } from '../constants/category';
import { categoryService } from '../services/category';

const getAll = () => {
	return dispatch => {
		dispatch(request());

		categoryService.getAll()
			.then(
				(categories) => dispatch(success(categories)),
				error => dispatch(failure(error))
			);
	};

	function request() { return { type: categoryConstants.GETALL_REQUEST } }
	function success(payload) { return { type: categoryConstants.GETALL_SUCCESS, payload } }
	function failure(error) { return { type: categoryConstants.GETALL_FAILURE, error } }
}

export const categoryActions = {
	getAll
}