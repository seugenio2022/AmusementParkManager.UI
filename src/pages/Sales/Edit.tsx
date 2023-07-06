import { APMButton } from "@/components/Buttons";
import { Box, Container, Stack, TextField, Typography } from "@mui/material";
import { Field } from "formik";
import { useTranslation } from "react-i18next";
import { DrawerForm } from "@/components/DrawerForm";
import { GenericTableContext, GenericTableContextType } from "@/contexts/genericTableContext";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Sale } from "./models";
import { saleService } from "./services";
import { changeFormatToLocalDate } from "@/utilities";
import { DrawerFormContext, DrawerFormContextType } from "@/contexts/drawerFormContext";

function Edit() {
	const { t } = useTranslation();
	const { setReload, rowForEdit, snackAlert } = useContext(GenericTableContext) as GenericTableContextType;
	const [saleDate, setsaleDate] = useState("");
	const { drawerIsOpen } = useContext(DrawerFormContext) as DrawerFormContextType;
	const onSubmit = (newSale: Sale) => {
		newSale.saleDate = changeFormatToLocalDate(saleDate);
		saleService
			.updateDate(newSale)
			.then((result) => {
				setReload(true);
				snackAlert.showUpdatedOk();
			})
			.catch((err) => {
				snackAlert.showUpdatedError();
			});
	};
	useEffect(() => {
		const parts = rowForEdit.saleDate.split("-");
		const date = parts[2] + "-" + parts[1] + "-" + parts[0];
		setsaleDate(date);
	}, [drawerIsOpen]);

	function handleChangeSaleDate(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
		setsaleDate(event.target.value);
	}

	return (
		<DrawerForm title={t("sales.editSale")} onSubmit={onSubmit} formValues={rowForEdit}>
			<TextField
				onChange={handleChangeSaleDate}
				value={saleDate}
				fullWidth
				type={"date"}
				name="saleDate"
				variant="outlined"
			/>
		</DrawerForm>
	);
}
export default Edit;
