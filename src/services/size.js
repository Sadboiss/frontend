import API from '../utilities/API';

export const sizeService = {
	getAll
};

function getAll() {
	return API.get('/sizes')
		.then(response => {
			return response.data;
		})
		.catch(error => {
			return Promise.reject(error.response.data.message)
		})
}
