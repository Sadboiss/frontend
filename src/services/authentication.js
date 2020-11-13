import { jwt } from "../helpers/jwt";
import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:5000'
});

const login = (credentials) => {
	const { email, password } = credentials
	instance.post(`/users/authenticate`, {
		email,
		password
	})
		.then(result => {
			if (result.status === 200) {
				jwt.setJwt(result.data.token)
			}
		}).catch(e => {
			console.log(e);
		});
}

const logout = () => {
    localStorage.removeItem('user');
}

export const userService = {
	login,
	logout
};
