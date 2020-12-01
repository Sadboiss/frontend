import API from '../utilities/API';

export const categoryService = {
	getAll
};

function getAll() {
	return API.get('/categories')
		.then(response => {
			return response.data;
		})
		.catch(error => {
			return Promise.reject(error.response.data.message)
		})
}
