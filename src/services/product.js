import { authHeader } from '../helpers/auth-header';
import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:5000',
	timeout: 1000,
	headers: authHeader()
});

export const productService = {
	getAll
};

function getAll() {
	return instance.get('/products')
		.then(response => {
			return response.data;
		})
		.catch(error => {
			return Promise.reject(error.response.data.message)
		})
}