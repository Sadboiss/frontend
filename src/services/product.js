import API from '../utilities/API';
import { toast } from 'react-toastify';

export const productService = {
	getAll,
	addOrUpdate,
	updateDisplay,
	remove
};

function getAll() {
	return API.get('/products')
		.then(response => {
			return response.data;
		})
		.catch(error => {
			return Promise.reject(error.response.data.message)
		})
}

function addOrUpdate(data) {
	return API.post('/products', data)
		.then(response => {
			return response.data;
		})
		.then((response) => {
			toast.success('Added product successfully!', {
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

function updateDisplay(product) {
	return API.put('/products', product)
		.then(response => {
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
	return API.delete(`/products/${product.id}`)
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