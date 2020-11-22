import { authHeader } from '../helpers/auth-header';
import { toast } from 'react-toastify';
import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:5000',
	timeout: 1000,
	headers: authHeader()
});

export const cartService = {
	addToCart,
	getCart
};

function addToCart(product) {
	return instance.post(`/shoppingcarts/${JSON.parse(localStorage.getItem('user')).id}/add/${product.id}`)
		.then(response => {
			return response.data;
		})
		.finally(() => {
			//window.location.reload()
			toast.success('Added item to your cart!', {
				position: "bottom-right",
				autoClose: 400000,
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

function getCart() {
	return instance.get(`/shoppingcarts/${JSON.parse(localStorage.getItem('user')).id}`)
		.then(response => {
			return response.data;
		})
		.catch(error => {
			return Promise.reject(error.response.data.message)
		})
}