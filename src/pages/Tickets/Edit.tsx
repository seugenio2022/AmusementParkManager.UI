import { APMButton } from "@/components/Buttons";
import { Box, Container, Stack, TextField, Typography } from "@mui/material";
import { Field } from "formik";
import { useTranslation } from "react-i18next";
import { DrawerForm } from "@/components/DrawerForm";
import { GenericTableContext, GenericTableContextType } from "@/contexts/genericTableContext";
import { ChangeEvent, useContext, useEffect, useState } from "react";

import { changeFormatToLocalDate, changeFormatToLocalDateTime } from "@/utilities";
import { ticketService } from "./services";
import { Ticket } from ".";
import { TicketForm } from "./components";
import { useTicketForm } from "./hooks";

function Edit() {
	const { t } = useTranslation();
	const { setReload, rowForEdit, snackAlert } = useContext(GenericTableContext) as GenericTableContextType;
	const ticketForm = useTicketForm();

	const onSubmit = () => {
		debugger;
		const ticketToSend: Ticket = {
			id: ticketForm.ticket.id,
			buyerId: ticketForm.buyerSelected.id ?? 0,
			gameId: ticketForm.gameSelected?.id ?? 0,
			dateTime: changeFormatToLocalDateTime(ticketForm.ticketDateTime),
		};
		ticketService
			.update(ticketToSend)
			.then((result) => {
				setReload(true);
				snackAlert.showUpdatedOk();
			})
			.catch((err) => {
				snackAlert.showUpdatedError();
			});
	};
	useEffect(() => {
		console.log();
	}, []);
	const handleChangeForm = () => {};
	return (
		<DrawerForm title={t("tickets.editTicket")} onSubmit={onSubmit} formValues={rowForEdit}>
			<TicketForm onChange={handleChangeForm} />
		</DrawerForm>
	);
}
export default Edit;
