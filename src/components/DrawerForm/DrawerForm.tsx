import { DrawerFormContext, DrawerFormContextType } from "@/contexts/drawerFormContext";
import { Box, Container, Drawer, Stack, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { useContext } from "react";
import { APMButton } from "../Buttons";
import { useTranslation } from "react-i18next";
type Props = {
	title: string;
	formValues: any;
	onSubmit: any;
	children?: React.ReactNode;
	width?: number;
};
function DrawerForm({ title, formValues, onSubmit, children, width }: Props) {
	const { drawerIsOpen, setToggleDrawer, closeDrawer } = useContext(DrawerFormContext) as DrawerFormContextType;
	const { t } = useTranslation();

	const handleSubmit = (data: any) => {
		onSubmit(data);

		closeDrawer();
	};
	return (
		<Drawer anchor={"right"} open={drawerIsOpen} onClose={setToggleDrawer(false)}>
			<Formik onSubmit={handleSubmit} initialValues={formValues}>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						minHeight: "100vh",
					}}
					component={Form}
					noValidate
					autoComplete="off"
				>
					<Stack p={3} spacing={3}>
						<Typography variant="h6">{title}</Typography>
						<Box
							width={width ?? 400}
							sx={{
								"& .MuiTextField-root": { m: 1 },
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
							}}
						>
							{children}
						</Box>
					</Stack>
					<Box
						component="footer"
						sx={{
							py: 3,
							px: 2,
							mt: "auto",
						}}
					>
						<Container maxWidth="sm">
							<APMButton type="submit">{t("saveButton")}</APMButton>
						</Container>
					</Box>
				</Box>
			</Formik>
		</Drawer>
	);
}
export default DrawerForm;
