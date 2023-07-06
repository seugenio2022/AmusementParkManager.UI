import { Stack, TextField, Typography } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { reportService } from "../services";
import { dateToString } from "@/utilities";
import PaperReport from "./PaperReport";
import { useTranslation } from "react-i18next";

function TicketsBySaleDate() {
	const [countTicketsBySaleDate, setCountTicketsBySaleDate] = useState<number>(0);
	const [date, setDate] = useState<string>(dateToString(new Date()));
	const { t } = useTranslation();

	useEffect(() => {
		reportService.getCountTicketsBySaleDate(date).then((response) => {
			setCountTicketsBySaleDate(response.data);
		});
	}, [date]);

	function handleChangeDate(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
		setDate(event.target.value);
	}

	return (
		<PaperReport
			title={t("ticketsBySaleDate.title")}
			data={countTicketsBySaleDate}
			description={t("ticketsBySaleDate.description")}
		>
			<TextField
				defaultValue={date}
				value={date}
				type="date"
				fullWidth
				onChange={handleChangeDate}
				variant="outlined"
			/>
		</PaperReport>
	);
}
export default TicketsBySaleDate;
