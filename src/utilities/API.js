import axios from 'axios';
import { authHeader } from '../helpers/auth-header';

const API = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 1000,
    headers: authHeader()
});

API.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response.status !== 401) {
        return new Promise((resolve, reject) => {
            reject(error);
        });
    }

    if (error.response.status === 401) {
        API.post('/users/refresh-token')
        .then((r) => {
            const user = r.data;
        	if (user.jwtToken) {
        		localStorage.setItem('user', JSON.stringify(user));
        	}
        })
    }
    if (error.response && error.response.data) {
        return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
});

export default API;