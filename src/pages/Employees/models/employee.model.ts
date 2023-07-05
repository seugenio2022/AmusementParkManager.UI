import { Person } from "@/models";

export type Employee = Person & {
	id?: number,

}

export const emptyEmployee: Employee = {
	name: "",
	lastName: "",
	mail: "",
	phone: "",
};