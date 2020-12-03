import { sizeConstants } from '../constants';
import { sizeService } from '../services';

const getAll = () => {
	return dispatch => {
		dispatch(request());

		sizeService.getAll()
			.then(
				(size) => dispatch(success(size)),
				error => dispatch(failure(error))
			);
	};

	function request() { return { type: sizeConstants.GETALL_REQUEST } }
	function success(payload) { return { type: sizeConstants.GETALL_SUCCESS, payload } }
	function failure(error) { return { type: sizeConstants.GETALL_FAILURE, error } }
}

export const sizeActions = {
	getAll
}