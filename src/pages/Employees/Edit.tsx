import { APMButton } from "@/components/Buttons";
import { Box, Container, Stack, TextField, Typography } from "@mui/material";
import { Field } from "formik";
import { useTranslation } from "react-i18next";
import { DrawerForm } from "@/components/DrawerForm";
import { GenericTableContext, GenericTableContextType } from "@/contexts/genericTableContext";
import { useContext } from "react";
import { employeeService } from "./services";
import { Employee } from "./models";
function Edit() {
	const { t } = useTranslation();
	const { setReload, rowForEdit, snackAlert } = useContext(GenericTableContext) as GenericTableContextType;
	const onSubmit = (newEmployee: Employee) => {
		employeeService
			.update(newEmployee)
			.then((result) => {
				setReload(true);
				snackAlert.showUpdatedOk();
			})
			.catch((err) => {
				snackAlert.showUpdatedError();
			});
	};
	return (
		<DrawerForm title={t("employees.editEmployee")} onSubmit={onSubmit} formValues={rowForEdit}>
			<Field fullWidth name="name" label={t("name")} variant="outlined" as={TextField} />
			<Field fullWidth name="lastName" label={t("lastname")} variant="outlined" as={TextField} />
			<Field fullWidth name="mail" label={"Mail"} variant="outlined" as={TextField} />
			<Field fullWidth name="phone" label={t("phone")} variant="outlined" as={TextField} />
			<Field fullWidth name="type" label={t("employees.type")} variant="outlined" as={TextField} />
		</DrawerForm>
	);
}
export default Edit;
