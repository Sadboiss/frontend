import API from '../utilities/API';
import { toast } from 'react-toastify';

export const cartService = {
	addToCart,
	getCart,
	getItemsCount
};

function addToCart(cart, product) {
	return API.post(`/shoppingcarts/${cart.id}/add/${product.id}`)
		.then(response => {
			return response.data;
		})
		.then((data) => {
			toast.success('Added item to your cart!', {
				position: "bottom-right",
				autoClose: 2000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: 0,
			});
			return data
		})
		.catch(error => {
			return Promise.reject(error.response.data.message)
		})
}

function getCart() {
	return API.get(`/shoppingcarts/${JSON.parse(localStorage.getItem('user')).id}`)
		.then(response => {
			let cart = response.data;
			if(cart) {
				localStorage.setItem('cart', JSON.stringify(cart));
			}
			return cart
		})
		.catch(error => {
			return Promise.reject(error.response.data.message)
		})
}

function getItemsCount() {
	return API.get(`/shoppingcarts/${JSON.parse(localStorage.getItem('user')).id}/count`)
		.then(response => {
			return response.data;
		})
		.catch(error => {
			return Promise.reject(error.response.data.message);
		})
}