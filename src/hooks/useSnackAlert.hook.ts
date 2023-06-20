import React from "react";
import { useTranslation } from "react-i18next";

export type SnackAlertType = {
	message: string;
	open: boolean;
	closeSnackAlert: () => void
	showCreatedOk: () => void;
	showUpdatedOk: () => void;
	showDeletedOk: () => void;
	showCreatedError: () => void;
	showUpdatedError: () => void;
	showDeletedError: () => void;

}
export const useSnackAlert = (): SnackAlertType => {
	const [open, setOpen] = React.useState<boolean>(false);
	const [message, setMessage] = React.useState<string>("");
	const { t } = useTranslation()
	const showCreatedOk = () => {
		t("createdOk")
		setMessage(t<string>("createdOk"))
		setOpen(true);
	};

	const showUpdatedOk = () => {
		setMessage(t<string>("updatedOk"))
		setOpen(true);
	};

	const showDeletedOk = () => {
		setMessage(t<string>("deletedOk"))
		setOpen(true);
	};

	const showCreatedError = () => {
		setMessage(t<string>("createdError"))
		setOpen(true);
	};

	const showUpdatedError = () => {
		setMessage(t<string>("updatedError"))
		setOpen(true);
	};

	const showDeletedError = () => {
		setMessage(t<string>("deletedError"))
		setOpen(true);
	};

	const closeSnackAlert = () => {
		setOpen(false);
	};
	return { message, open, showCreatedOk, showUpdatedOk, showDeletedOk, closeSnackAlert, showCreatedError, showUpdatedError, showDeletedError };
}
