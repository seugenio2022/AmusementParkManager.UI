import { Alert, AlertProps, Snackbar, SnackbarProps } from "@mui/material";

type SnackAlertProps = {
	isOpen: boolean;
	onClose: any;
	message: string;
};
function SnackAlert({ isOpen, onClose, message }: SnackAlertProps) {
	return (
		<Snackbar open={isOpen} autoHideDuration={6000} onClose={onClose}>
			<Alert onClose={onClose} variant="filled" severity="success" sx={{ width: "100%" }}>
				{message}
			</Alert>
		</Snackbar>
	);
}
export default SnackAlert;
