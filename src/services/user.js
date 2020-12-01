import API from '../utilities/API';

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
			const user = response.data;
			if (user.jwtToken) {
				localStorage.setItem('user', JSON.stringify(user));
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