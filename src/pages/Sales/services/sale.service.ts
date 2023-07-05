import axios from "axios";
import { Sale } from "../models";

class SaleService {
	ENV = "http://localhost:8080"
	url = `${this.ENV}/sale`

	create(sale: Sale) {
		return axios.post(`${this.url}/create`, sale)
	}
	updateDate(sale: Sale) {
		return axios.put(`${this.url}/editDate`, sale)
	}
	delete(id: number) {
		return axios.delete(`${this.url}/delete?id=${id}`)
	}

	getAll() {
		return axios.get<Sale[]>(`${this.url}/getAll`)
	}
}

export const saleService = new SaleService()