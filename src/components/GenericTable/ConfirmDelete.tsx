import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { useTranslation } from "react-i18next";
import { APMButton } from "../Buttons";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction="up" ref={ref} {...props} />;
});
export type ConfirmDeleteType = {
	isOpen: boolean;
	open: any;
	close: any;
	handleConfirm: any;
};
export default function ConfirmDelete({ isOpen, close, handleConfirm }: ConfirmDeleteType) {
	const { t } = useTranslation();
	const onConfirmDelete = () => {
		handleConfirm();
		close();
	};
	return (
		<div>
			<Dialog open={isOpen} TransitionComponent={Transition} keepMounted onClose={close}>
				<DeleteOutlineIcon fontSize="large" sx={{ width: "auto" }} />
				<DialogTitle>{t("confirmDelete")}</DialogTitle>
				{/* <DialogContent>
					<DialogContentText>
						
					</DialogContentText>
				</DialogContent> */}
				<DialogActions>
					<APMButton onClick={close}>{t("cancel")}</APMButton>
					<APMButton color="error" onClick={() => onConfirmDelete()}>
						{t("confirm")}
					</APMButton>
				</DialogActions>
			</Dialog>
		</div>
	);
}
