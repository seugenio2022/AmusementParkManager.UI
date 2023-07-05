import { APMButton } from "@/components/Buttons";
import { Box, Container, Stack, TextField, Typography } from "@mui/material";
import { Field } from "formik";
import { useTranslation } from "react-i18next";
import { DrawerForm } from "@/components/DrawerForm";
import { GenericTableContext, GenericTableContextType } from "@/contexts/genericTableContext";
import { useContext } from "react";
import { userService } from "./services";
import { User, emptyUser } from "./models";

function Create() {
	const { t } = useTranslation();
	const { setReload, snackAlert } = useContext(GenericTableContext) as GenericTableContextType;

	const onSubmit = (newUser: User) => {
		userService
			.create(newUser)
			.then((result) => {
				setReload(true);
				snackAlert.showCreatedOk();
			})
			.catch((err) => {
				snackAlert.showCreatedError();
			});
	};
	return (
		<DrawerForm title={t("users.addUser")} onSubmit={onSubmit} formValues={emptyUser}>
			<Field fullWidth name="userName" label={t("users.userName")} variant="outlined" as={TextField} />
			<Field fullWidth name="password" label={t("users.password")} variant="outlined" as={TextField} />
		</DrawerForm>
	);
}
export default Create;
