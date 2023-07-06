import axios from "axios";
import { Game } from "../models";

class GameService {
	ENV = 'http://vps-3399136-x.dattaweb.com:8080'
	url = `${this.ENV}/game`

	create(game: Game) {
		return axios.post(`${this.url}/create`, game)
	}
	update(game: Game) {
		return axios.put(`${this.url}/edit`, game)
	}
	delete(id: number) {
		return axios.delete(`${this.url}/delete?id=${id}`)
	}

	getAll() {
		return axios.get<Game[]>(`${this.url}/getAll`)
	}
}

export const gameService = new GameService()