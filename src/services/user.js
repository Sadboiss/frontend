import { authHeader } from '../helpers/auth-header';
import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:5000',
	timeout: 1000,
	headers: authHeader()
});

export const userService = {
	login,
	logout,
	getAll
};

function login(email, password) {
	const params = {
		email,
		password,
	};

	return instance.post(`/users/authenticate`, params)
		.then(handleResponse)
		.then(response => {
			const user = response.data;
			if (user.token) {
				localStorage.setItem('user', JSON.stringify(user));
			}
			return user;
		})
		.catch((error) => {
			return Promise.reject()
		})
}

function logout() {
	// remove user from local storage to log user out
	localStorage.removeItem('user');
}

function getAll() {
	return instance.get(`/users`).then(handleResponse);
}

function handleResponse(response) {
	if(response.status !== 200) {
		logout();
		throw new Error(response.statusText);
	}
	return response;
}