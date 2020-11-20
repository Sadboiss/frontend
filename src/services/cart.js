import { authHeader } from '../helpers/auth-header';
import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:5000',
	timeout: 1000,
	headers: authHeader()
});

export const cartService = {
	getCart
};

function getCart() {
	return instance.get(`/shoppingcarts/${JSON.parse(localStorage.getItem('user')).id}`)
		.then(response => {
			return response.data;
		})
		.catch(error => {
			return Promise.reject(error.response.data.message)
		})
}