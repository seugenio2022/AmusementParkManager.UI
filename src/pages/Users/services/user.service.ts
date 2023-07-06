import axios from "axios";
import { User } from "../models";
class UserService {
	ENV = 'http://vps-3399136-x.dattaweb.com:8080'
	url = `${this.ENV}/user`

	create(user: User) {
		return axios.post(`${this.url}/create`, user)
	}
	update(user: User) {
		return axios.put(`${this.url}/edit`, user)
	}
	delete(id: number) {
		return axios.delete(`${this.url}/delete?id=${id}`)
	}

	getAll() {
		return axios.get<User[]>(`${this.url}/getAll`)
	}
}

export const userService = new UserService()