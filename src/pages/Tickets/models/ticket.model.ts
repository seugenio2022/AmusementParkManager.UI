
export type Ticket = {
	id?: number,
	dateTime: string,
	buyerId: number,
	gameId: number,
}

export type TicketApiResponse = {
	id?: number,
	dateTime: string,
	buyerId: number,
	buyerMail: string,
	gameId: number,
	gameName: string,
}
