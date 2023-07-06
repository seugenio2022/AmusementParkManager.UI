import { debug } from 'console';
import { debug } from 'console';
import { User } from "@/pages/Users";
import axios from "axios";


class LoginService {
	ENV = 'http://vps-3399136-x.dattaweb.com:8080'

	url = `${this.ENV}`
	uninterceptedAxiosInstance = axios.create();
	login(userName: string, password: string) {
		return this.uninterceptedAxiosInstance.post<User>(`${this.url}/login`, { userName, password })
	}
}

export const loginService = new LoginService()