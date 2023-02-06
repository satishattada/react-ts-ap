

import axios from 'axios';

const url = 'http://localhost:3004/';

export const apiHeaders = {
	'Content-Type': 'application/json',
  }


class UserService {

	// loginUser = async (credentials: any) => {
	// 	return fetch(url + 'login', {
	// 		method: 'POST',
	// 		headers: apiHeaders,
	// 		body: JSON.stringify(credentials)
	// 	}).then(data => {
	// 		return data.json()
	// 	}).catch((error) => {
	// 		return Promise.reject(error);

	// 	})
	// }

	loginUser = async(credentials: any) => {
		const options = {
			method: 'POST',
			url: url + 'login',
			params: { 'api-version': '3.0' },
			headers: apiHeaders,
			data: credentials,
		};
		return axios.request(options).then(data => {
			return data
		}).catch((error) => {
			return Promise.reject(error);

		})
	}

	// getUsers = async () => {
	// 	return fetch(url + 'users', {
	// 		method: 'POST',
	// 		headers: apiHeaders,
	// 	}).then(data => {
	// 		return data.json()
	// 	}).catch((error) => {
	// 		return Promise.reject(error);

	// 	})
	// }

	getUsers = async() => {
		const options = {
			method: 'GET',
			url: url + 'users',
			headers: apiHeaders,
		};
		return axios.request(options).then(res => {
			return res.data
		}).catch((error) => {
			return Promise.reject(error);
		})
	}

	
}

export default new UserService();