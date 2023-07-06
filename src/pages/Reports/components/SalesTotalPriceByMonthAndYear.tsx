import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import { ChangeEvent, ReactNode, useEffect, useState } from "react";
import { reportService } from "../services";
import { dateToString } from "@/utilities";
import PaperReport from "./PaperReport";
import { useTranslation } from "react-i18next";

function SalesTotalPriceByMonthAndYear() {
	const { t } = useTranslation();
	const [totalAmout, setTotalAmout] = useState<number>(0);
	//{ month: 1, year: 2023 }
	const [monthYearSelected, setMonthYearSelected] = useState<string>("2023-07");

	useEffect(() => {
		debugger;
		const year: number = parseInt(monthYearSelected.split("-")[0]);
		const month: number = parseInt(monthYearSelected.split("-")[1].replace("0", ""));
		reportService.getSaleTotalPriceByMonthAndYear(month, year).then((response) => {
			setTotalAmout(response.data);
		});
	}, [monthYearSelected]);

	const totalAmountString = `$ ${totalAmout.toString() == "" ? 0 : totalAmout}`;

	function handleChangeDate(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
		setMonthYearSelected(event.target.value as string);
	}

	return (
		<PaperReport
			title={t("salesTotalPriceByMonthAndYear.title")}
			data={totalAmountString}
			description={t("salesTotalPriceByMonthAndYear.description")}
		>
			<TextField label={"mes"} type={"month"} value={monthYearSelected} onChange={handleChangeDate} />
		</PaperReport>
	);
}
export default SalesTotalPriceByMonthAndYear;
