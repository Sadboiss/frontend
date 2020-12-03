import API from '../utilities/API';
import Storage  from './storage';

export const userService = {
	login,
	signup,
	logout,
	getAll
};

function login(email, password) {
	const params = {
		email,
		password,
	};

	return API.post(`/users/authenticate`, params)
		//.then(handleResponse)
		.then(response => {
			console.log(response)
			const user = response.data;
			if (user.jwtToken) {
				Storage.setUser(user)
				// Storage.setToken(
				// 	{
				// 		access_token: user.jwtToken, 
				// 		refresh_token: user.refreshToken
				// 	})
			}
			return user;
		})
		.catch((error) => {
			return Promise.reject(error.response.data.message)
		})
}

function signup(params) {
	return API.post(`/users/account-creation`, params)
		//.then(handleResponse)
		.then(response => {
			const user = response.data;
			login(user.email, user.password)
		})
		.catch((error) => {
			return Promise.reject(error.response.data.message)
		})
}

function logout() {
	localStorage.removeItem('user');
}

function getAll() {
	return API.get(`/users`)
	//.then(handleResponse);
	.then(response => {
		return response.data
	})
	.catch((error) => {
		return Promise.reject(error.response.data.message)
	})
}

// function handleResponse(response) {
// 	console.log("dasadada")
// 	if(response.status !== 200) {
// 		console.log(response)
// 		logout();
// 		throw new Error(response.statusText);
// 	}
// 	return response;
// }