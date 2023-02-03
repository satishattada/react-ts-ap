
const url = 'http://localhost:3004/';
export const apiHeaders = {
	'Content-Type': 'application/json',
  }
class UserService {

	loginUser = async (credentials: any) => {
		return fetch(url + 'login', {
			method: 'POST',
			headers: apiHeaders,
			body: JSON.stringify(credentials)
		}).then(data => {
			return data.json()
		}).catch((error) => {
			return Promise.reject(error);

		})
	}

	getUsers = async () => {
		return fetch(url + 'users', {
			method: 'POST',
			headers: apiHeaders,
		}).then(data => {
			return data.json()
		}).catch((error) => {
			return Promise.reject(error);

		})
	}

	
}

export default new UserService();