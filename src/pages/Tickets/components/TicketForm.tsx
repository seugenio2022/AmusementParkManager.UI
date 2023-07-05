import { Buyer, emptyBuyer } from "@/pages/Buyers";
import { buyerService } from "@/pages/Buyers/services";
import { Game } from "@/pages/Games/models";
import { gameService } from "@/pages/Games/services";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function TicketForm() {
	const { t } = useTranslation();

	const [ticketDateTime, setTicketDateTime] = useState<string>("");
	const [buyers, setBuyers] = useState<Buyer[]>([]);
	const [games, setGames] = useState<Game[]>([]);
	const [buyerSelected, setBuyerSelected] = useState<Buyer>(emptyBuyer);
	const [gameSelected, setGameSelected] = useState<Game>();

	useEffect(() => {
		buyerService.getAll().then((response) => {
			setBuyers(response.data);
		});

		gameService.getAll().then((response) => {
			setGames(response.data);
		});
	}, []);

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
	return (
		<>
			<FormControl fullWidth sx={{ pb: 2 }}>
				<InputLabel>{t("tickets.buyer")}</InputLabel>
				<Select value={buyerSelected?.id?.toString()} label={t("tickets.buyer")} onChange={handleSelectBuyer}>
					{buyers.map((b) => (
						<MenuItem value={b.id}>{b.mail}</MenuItem>
					))}
				</Select>
			</FormControl>
			<FormControl fullWidth sx={{ pb: 2 }}>
				<InputLabel>{t("tickets.game")}</InputLabel>
				<Select value={gameSelected?.id?.toString()} label={t("tickets.game")} onChange={handleSelectGame}>
					{games.map((b) => (
						<MenuItem value={b.id}>{b.name}</MenuItem>
					))}
				</Select>
			</FormControl>
			<TextField
				value={ticketDateTime}
				onChange={handleChangeTicketDateTime}
				type={"datetime-local"}
				fullWidth
				name="dateTime"
				variant="outlined"
			/>
		</>
	);
}
export default TicketForm;
