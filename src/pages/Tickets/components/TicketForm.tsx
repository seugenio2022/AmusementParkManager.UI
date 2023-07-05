import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

import { useTicketForm } from "../hooks";

function TicketForm({ onChange }: any) {
	const { t } = useTranslation();

	const ticketForm = useTicketForm();
	return (
		<>
			<FormControl fullWidth sx={{ pb: 2 }}>
				<InputLabel>{t("tickets.buyer")}</InputLabel>
				<Select
					defaultValue={ticketForm.ticket.buyerId.toString()}
					value={ticketForm.buyerSelected?.id?.toString()}
					label={t("tickets.buyer")}
					onChange={ticketForm.handleSelectBuyer}
				>
					{ticketForm.buyers.map((b) => (
						<MenuItem value={b.id}>{b.mail}</MenuItem>
					))}
				</Select>
			</FormControl>
			<FormControl fullWidth sx={{ pb: 2 }}>
				<InputLabel>{t("tickets.game")}</InputLabel>
				<Select
					defaultValue={ticketForm.ticket.gameId.toString()}
					value={ticketForm.gameSelected?.id?.toString()}
					label={t("tickets.game")}
					onChange={ticketForm.handleSelectGame}
				>
					{ticketForm.games.map((b) => (
						<MenuItem value={b.id}>{b.name}</MenuItem>
					))}
				</Select>
			</FormControl>
			<TextField
				defaultValue={ticketForm.ticketDateTime}
				value={ticketForm.ticketDateTime}
				onChange={ticketForm.handleChangeTicketDateTime}
				type={"datetime-local"}
				fullWidth
				name="dateTime"
				variant="outlined"
			/>
		</>
	);
}
export default TicketForm;
