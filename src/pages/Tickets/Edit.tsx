import { APMButton } from "@/components/Buttons";
import { Box, Container, Stack, TextField, Typography } from "@mui/material";
import { Field } from "formik";
import { useTranslation } from "react-i18next";
import { DrawerForm } from "@/components/DrawerForm";
import { GenericTableContext, GenericTableContextType } from "@/contexts/genericTableContext";
import { ChangeEvent, useContext, useEffect, useState } from "react";

import { changeFormatToLocalDate } from "@/utilities";
import { ticketService } from "./services";
import { Ticket } from ".";
import { TicketForm } from "./components";

function Edit() {
	const { t } = useTranslation();
	const { setReload, rowForEdit, snackAlert } = useContext(GenericTableContext) as GenericTableContextType;

	const onSubmit = (updatedTicket: Ticket) => {
		debugger;
		ticketService
			.update(updatedTicket)
			.then((result) => {
				setReload(true);
				snackAlert.showUpdatedOk();
			})
			.catch((err) => {
				snackAlert.showUpdatedError();
			});
	};
	useEffect(() => {
		console.log(first);
	}, []);

	return (
		<DrawerForm title={t("tickets.editTicket")} onSubmit={onSubmit} formValues={rowForEdit}>
			<TicketForm />
		</DrawerForm>
	);
}
export default Edit;
