import { Person } from "@/models";

export type Buyer = Person & {
	id?: number,

}

export const emptyBuyer: Buyer = {
	name: "",
	lastName: "",
	mail: "",
	phone: "",
};