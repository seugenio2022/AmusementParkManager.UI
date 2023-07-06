import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import { ChangeEvent, ReactNode, useEffect, useState } from "react";
import { reportService } from "../services";
import { dateToString } from "@/utilities";
import PaperReport from "./PaperReport";
import { useTranslation } from "react-i18next";

type Day = {
	id: number;
	name: string;
};
function SalesTotalPriceByDay() {
	const { t } = useTranslation();
	const [totalAmout, setTotalAmout] = useState<number>(0);
	const daysOfWeek: Day[] = [
		{ id: 1, name: t("days.sunday") },
		{ id: 2, name: t("days.monday") },
		{ id: 3, name: t("days.tuesday") },
		{ id: 4, name: t("days.wednesday") },
		{ id: 5, name: t("days.thursday") },
		{ id: 6, name: t("days.friday") },
		{ id: 7, name: t("days.saturday") },
	];
	const [daySelected, setDaySelected] = useState<number>();

	useEffect(() => {
		reportService.getSaleTotalPriceByDay(daySelected ?? 1).then((response) => {
			setTotalAmout(response.data);
		});
	}, [daySelected]);

	const totalAmountString = `$ ${totalAmout.toString() == "" ? 0 : totalAmout}`;

	function handleChangeDate(event: SelectChangeEvent<number>, child: ReactNode): void {
		setDaySelected(parseInt(event.target.value.toString()));
	}

	return (
		<PaperReport
			title={t("salesTotalPriceByDay.title")}
			data={totalAmountString}
			description={t("salesTotalPriceByDay.description")}
		>
			<FormControl fullWidth sx={{ my: 2 }}>
				<InputLabel>{t("day")}</InputLabel>
				<Select value={daySelected} label={t("day")} onChange={handleChangeDate}>
					{daysOfWeek.map((d) => (
						<MenuItem value={d.id}>{d.name}</MenuItem>
					))}
				</Select>
			</FormControl>
		</PaperReport>
	);
}
export default SalesTotalPriceByDay;
