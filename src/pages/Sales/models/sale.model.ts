import { Ticket } from "@/pages/Tickets/models"

export type Sale = {
	id?: number,
	saleDate: string
	totalPrice?: number
	ticketsDto: Ticket[]
}

export const emptySale: Sale = {
	saleDate: new Date().toLocaleDateString(),
	ticketsDto: []
}
