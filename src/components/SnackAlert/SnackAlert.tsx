import { Alert, AlertColor, AlertProps, Snackbar, SnackbarProps } from "@mui/material";

type SnackAlertProps = {
	isOpen: boolean;
	onClose: any;
	message: string;
	type?: AlertColor;
};
function SnackAlert({ isOpen, onClose, message, type }: SnackAlertProps) {
	return (
		<Snackbar open={isOpen} autoHideDuration={6000} onClose={onClose}>
			<Alert onClose={onClose} variant="filled" severity={type ?? "success"} sx={{ width: "100%" }}>
				{message}
			</Alert>
		</Snackbar>
	);
}
export default SnackAlert;
