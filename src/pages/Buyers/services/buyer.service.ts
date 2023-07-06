import axios from "axios";
import { Buyer } from "..";

class BuyerService {
	ENV = 'http://vps-3399136-x.dattaweb.com:8080'
	url = `${this.ENV}/buyer`

	create(buyer: Buyer) {
		return axios.post(`${this.url}/create`, buyer)
	}
	update(buyer: Buyer) {
		return axios.put(`${this.url}/edit`, buyer)
	}
	delete(id: number) {
		return axios.delete(`${this.url}/delete?id=${id}`)
	}

	getAll() {

		return axios.get<Buyer[]>(`${this.url}/getAll`)
	}
}

export const buyerService = new BuyerService()