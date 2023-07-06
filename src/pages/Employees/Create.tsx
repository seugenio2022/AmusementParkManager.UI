import { APMButton } from "@/components/Buttons";
import {
	Box,
	Container,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import { Field } from "formik";
import { useTranslation } from "react-i18next";
import { DrawerForm } from "@/components/DrawerForm";
import { GenericTableContext, GenericTableContextType } from "@/contexts/genericTableContext";
import { useContext, useState } from "react";
import { Employee, emptyEmployee } from "./models";
import { employeeService } from "./services";
import { Roles } from "@/models";

function Create() {
	const { t } = useTranslation();
	const { setReload, snackAlert } = useContext(GenericTableContext) as GenericTableContextType;
	const onSubmit = (newEmployee: Employee) => {
		debugger;
		employeeService
			.create(newEmployee)
			.then((result) => {
				setReload(true);
				snackAlert.showCreatedOk();
			})
			.catch((err) => {
				snackAlert.showCreatedError();
			});
	};

	return (
		<DrawerForm title={t("employees.addEmployee")} onSubmit={onSubmit} formValues={emptyEmployee}>
			<Field fullWidth name="name" label={t("name")} variant="outlined" as={TextField} />
			<Field fullWidth name="lastName" label={t("lastname")} variant="outlined" as={TextField} />
			<Field fullWidth name="mail" label={"Mail"} variant="outlined" as={TextField} />
			<Field fullWidth name="phone" label={t("phone")} variant="outlined" as={TextField} />
			<FormControl fullWidth sx={{ mt: 1 }}>
				<InputLabel id="select-type">{t("employees.type")}</InputLabel>
				<Field labelId="select-type" name="type" label={t("employees.type")} as={Select}>
					<MenuItem value={Roles.ADMIN}>{t("roles.admin")}</MenuItem>
					<MenuItem value={Roles.GAME}>{t("roles.game")}</MenuItem>
				</Field>
			</FormControl>
		</DrawerForm>
	);
}
export default Create;
