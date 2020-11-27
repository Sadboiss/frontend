import { authHeader } from '../helpers/auth-header';
import { toast } from 'react-toastify';
import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:5000',
	timeout: 1000,
	headers: authHeader()
});

export const productService = {
	getAll,
	addOrUpdate,
	updateDisplay,
	remove
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

function addOrUpdate(data) {
	return instance.post('/products/add-or-update', data)
		.then(response => {
			return response.data;
		})
		.then(() => {
			toast.success('Added product successfully!', {
				position: "bottom-right",
				autoClose: 2000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: 0,
			});
		})
		.catch(error => {
			return Promise.reject(error.response.data.message)
		})
}

function updateDisplay(product) {
	return instance.put('/products/update-display', product)
		.then(response => {
			console.log(response.data)
			return response.data;
		})
		.then((response) => {
			toast.success('Updated product successfully!', {
				position: "bottom-right",
				autoClose: 2000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: 0,
			});
			return response;
		})
		.catch(error => {
			return Promise.reject(error.response.data.message)
		})
}

function remove(product) {
	return instance.delete(`/products/${product.id}`)
		.then(response => {
			return response.data;
		})
		.then(() => {
			toast.success('Removed product successfully!', {
				position: "bottom-right",
				autoClose: 2000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: 0,
			});
		})
		.catch(error => {
			return Promise.reject(error.response.data.message)
		})
}