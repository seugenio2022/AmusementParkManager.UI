import axios from "axios";
import { Ticket, TicketApiResponse } from "../models";

class TicketService {
	ENV = "http://localhost:8080"
	url = `${this.ENV}/ticket`

	create(sale: Ticket) {
		return axios.post(`${this.url}/create`, sale)
	}
	update(sale: Ticket) {
		return axios.put(`${this.url}/edit`, sale)
	}
	delete(id: number) {
		return axios.delete(`${this.url}/delete?id=${id}`)
	}

	getAll() {
		return axios.get<TicketApiResponse[]>(`${this.url}/getAll`)
	}
}

export const ticketService = new TicketService()