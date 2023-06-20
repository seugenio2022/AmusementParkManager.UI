import { APMButton } from "@/components/Buttons";
import { Box, Container, Stack, TextField, Typography } from "@mui/material";
import { Field } from "formik";
import { useTranslation } from "react-i18next";
import { Buyer, emptyBuyer } from ".";
import { DrawerForm } from "@/components/DrawerForm";
import { buyerService } from "./services/buyer.service";
import { GenericTableContext, GenericTableContextType } from "@/contexts/genericTableContext";
import { useContext } from "react";

function Create() {
	const { t } = useTranslation();
	const { setReload, snackAlert } = useContext(GenericTableContext) as GenericTableContextType;

	const onSubmit = (newBuyer: Buyer) => {
		buyerService
			.create(newBuyer)
			.then((result) => {
				setReload(true);
				snackAlert.showCreatedOk();
			})
			.catch((err) => {
				snackAlert.showCreatedError();
			});
	};
	return (
		<DrawerForm title={t("addBuyer")} onSubmit={onSubmit} formValues={emptyBuyer}>
			<Field fullWidth name="name" label={t("name")} variant="outlined" as={TextField} />
			<Field fullWidth name="lastName" label={t("lastname")} variant="outlined" as={TextField} />
			<Field fullWidth name="mail" label={"Mail"} variant="outlined" as={TextField} />
			<Field fullWidth name="phone" label={t("phone")} variant="outlined" as={TextField} />
		</DrawerForm>
	);
}
export default Create;
