import axios from "axios";

class ReportService {
	ENV = "http://localhost:8080"
	url = `${this.ENV}/report`

	//Cantidad de entradas vendidas en todos los juegos en una fecha determinada.
	getCountTicketsBySaleDate(date: string) {
		return axios.get<number>(`${this.url}/getCountTicketsBySaleDate?date=${date}`)
	}

	//Cantidad de entradas vendidas para un determinado juego, en una fecha particular
	getCountTicketsByGameAndSaleDate(date: string, gameId: number) {
		return axios.get<number>(`${this.url}/getCountTicketsByGameAndSaleDate?date=${date}&gameId=${gameId}`)
	}

	//Sumatoria total de los montos de ventas en un determinado día
	getSaleTotalPriceByDay(day: number) {
		return axios.get<number>(`${this.url}/getSaleTotalPriceByDay?day=${day}`)
	}

	//Sumatoria total de los montos de ventas en un determinado mes y año
	getSaleTotalPriceByMonthAndYear(month: string, year: string) {
		return axios.get<number>(`${this.url}/getSaleTotalPriceByMonthAndYear?month=${month}&year=${year}`)
	}

	//Lista de empleados encargados de juegos con su juego asignado
	getEmployeesGame() {
		return axios.get(`${this.url}/getEmployeesGame`)
	}


	//Comprador que más entradas compró en un determinado mes y año
	getMaxTicketsBuyerByMonthAndYear(month: string, year: string) {
		return axios.get(`${this.url}/getMaxTicketsBuyerByMonthAndYear?month=${month}&year=${year}`)
	}

	//Juego con la mayor cantidad de entradas vendidas hasta el día en que se lleve a cabo la consulta.
	getMaxGameSale() {
		return axios.get(`${this.url}/getMaxGameSale`)
	}


}

export const reportService = new ReportService()