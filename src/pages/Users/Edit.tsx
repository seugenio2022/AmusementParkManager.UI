import { APMButton } from "@/components/Buttons";
import { Box, Container, Stack, TextField, Typography } from "@mui/material";
import { Field } from "formik";
import { useTranslation } from "react-i18next";
import { DrawerForm } from "@/components/DrawerForm";
import { GenericTableContext, GenericTableContextType } from "@/contexts/genericTableContext";
import { useContext } from "react";
import { User } from "./models";
import { userService } from "./services";
function Edit() {
	const { t } = useTranslation();
	const { setReload, rowForEdit, snackAlert } = useContext(GenericTableContext) as GenericTableContextType;
	const onSubmit = (newUser: User) => {
		userService
			.update(newUser)
			.then((result) => {
				setReload(true);
				snackAlert.showUpdatedOk();
			})
			.catch((err) => {
				snackAlert.showUpdatedError();
			});
	};
	return (
		<DrawerForm title={t("users.editUser")} onSubmit={onSubmit} formValues={rowForEdit}>
			<Field fullWidth name="userName" label={t("users.userName")} variant="outlined" as={TextField} />
			<Field fullWidth name="password" label={t("users.password")} variant="outlined" as={TextField} />
		</DrawerForm>
	);
}
export default Edit;
