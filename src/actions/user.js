import { userConstants } from '../constants/user';
import { userService } from '../services/user';
import { history } from '../helpers';

const login = (email, password) => {
	return dispatch => {
		dispatch(request({ email }));

		userService.login(email, password)
			.then(
				user => {
					dispatch(success(user));
					history.push('/store');
					history.go(0);
				},
				error => {
					dispatch(failure(error));
				}
			);
	};

	function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
	function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
	function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

const signup = (user) => {
	return dispatch => {
		dispatch(request(user));

		userService.signup(user)
			.then(
				user => {
					dispatch(success(user));
				},
				error => {
					dispatch(failure(error));
				}
			);
	};
	

	function request(user) { return { type: userConstants.SIGNUP_REQUEST, user } }
	function success(user) { return { type: userConstants.SIGNUP_SUCCESS, user } }
	function failure(error) { return { type: userConstants.SIGNUP_FAILURE, error } }
}

const logout = () => {
	userService.logout();
	history.push('/');
	history.go(0);
	return { type: userConstants.LOGOUT };
}

const getAll = () => {
	return dispatch => {
		dispatch(request());

		userService.getAll()
			.then(
				users => dispatch(success(users)),
				error => dispatch(failure(error))
			);
	};

	function request() { return { type: userConstants.GETALL_REQUEST } }
	function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
	function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

export const userActions = {
	login,
	signup,
	logout,
	getAll
};