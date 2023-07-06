import { TextField, Typography } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { reportService } from "../services";
import { dateToString } from "@/utilities";
import { gameService } from "@/pages/Games/services";
import { useTranslation } from "react-i18next";
import { GameSelect } from "@/components/GameSelect";
import useGameSelect from "@/hooks/useGameSelect.hook";
import PaperReport from "./PaperReport";

function TicketsByGameAndSaleDate() {
	const [countTicketsByGameAndSaleDate, setCountTicketsByGameAndSaleDate] = useState<number>(0);
	const [date, setDate] = useState<string>(dateToString(new Date()));
	const { t } = useTranslation();
	const gameSelect = useGameSelect();

	useEffect(() => {
		reportService.getCountTicketsByGameAndSaleDate(date, gameSelect?.gameSelected?.id ?? 1).then((response) => {
			setCountTicketsByGameAndSaleDate(response.data);
		});
	}, [date, gameSelect.gameSelected]);

	function handleChangeDate(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
		setDate(event.target.value);
	}

	return (
		<PaperReport
			title={t("ticketsByGameAndSaleDate.title")}
			data={countTicketsByGameAndSaleDate}
			description={t("ticketsByGameAndSaleDate.description")}
		>
			<TextField
				defaultValue={date}
				value={date}
				type="date"
				fullWidth
				onChange={handleChangeDate}
				variant="outlined"
			/>
			<GameSelect
				gameSelected={gameSelect.gameSelected}
				games={gameSelect.games}
				handleSelectGame={gameSelect.handleSelectGame}
			/>
		</PaperReport>
	);
}
export default TicketsByGameAndSaleDate;
