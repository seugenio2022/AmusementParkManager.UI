import { Schedule } from "."

export type Game = {
	id?: number,
	name: string,
	price?: number,
	schedules: Schedule[]
	employeesList: []
	tickets: []
	schedulesFormatted: string[]
}

export const emptyGame: Game = {
	name: "",
	schedules: [],
	schedulesFormatted: [],
	employeesList: [],
	tickets: []
};