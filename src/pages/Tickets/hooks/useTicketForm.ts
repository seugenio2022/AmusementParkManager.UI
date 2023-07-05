import { Buyer, emptyBuyer } from "@/pages/Buyers";
import { buyerService } from "@/pages/Buyers/services";
import { Game } from "@/pages/Games/models";
import { gameService } from "@/pages/Games/services";
import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent, useEffect, useState, useContext } from "react";
import { TicketApiResponse } from "../models";
import { GenericTableContext, GenericTableContextType } from "@/contexts/genericTableContext";
import { DrawerFormContext, DrawerFormContextType } from "@/contexts/drawerFormContext";

function useTicketForm() {
	const [ticketDateTime, setTicketDateTime] = useState<string>("");
	const [buyers, setBuyers] = useState<Buyer[]>([]);
	const [games, setGames] = useState<Game[]>([]);
	const [buyerSelected, setBuyerSelected] = useState<Buyer>(emptyBuyer);
	const [gameSelected, setGameSelected] = useState<Game>();

	const { rowForEdit } = useContext(GenericTableContext) as GenericTableContextType;
	const ticket = rowForEdit as TicketApiResponse;
	const { drawerIsOpen } = useContext(DrawerFormContext) as DrawerFormContextType;

	useEffect(() => {
		buyerService.getAll().then((response) => {
			setBuyers(response.data);
			setBuyerSelected({ id: ticket.buyerId, mail: ticket.buyerMail } as Buyer ?? emptyBuyer);
		});

		gameService.getAll().then((response) => {
			setGames(response.data);
			setGameSelected({ id: ticket.gameId, name: ticket.gameName } as Game);
		});

		const partes = ticket.dateTime.split(":");
		const fechaPartes = partes[0].split("-");
		const anio = fechaPartes[2];
		const mes = fechaPartes[1];
		const dia = fechaPartes[0];
		const valorDatetimeLocal = anio + "-" + mes + "-" + dia + "T" + partes[1] + ":" + partes[2];

		setTicketDateTime(valorDatetimeLocal);
	}, [drawerIsOpen]);

	const handleSelectBuyer = (event: SelectChangeEvent) => {
		const buyer = buyers.find((b) => b.id == parseInt(event.target.value));
		setBuyerSelected(buyer ?? emptyBuyer);
	};
	const handleSelectGame = (event: SelectChangeEvent) => {
		const game = games.find((b) => b.id == parseInt(event.target.value));
		setGameSelected(game);
	};
	function handleChangeTicketDateTime(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
		setTicketDateTime(event.target.value.toString());
	}
	return { games, buyers, ticket, ticketDateTime, setTicketDateTime, buyerSelected, setBuyerSelected, gameSelected, setGameSelected, handleSelectBuyer, handleSelectGame, handleChangeTicketDateTime }
}
export default useTicketForm