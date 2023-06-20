import { IconButton } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useContext } from "react";
import { GenericTableContext, GenericTableContextType } from "@/contexts/genericTableContext";

type DeleteButtonProps = {
	onClick: any;
};
function DeleteButton({ onClick }: DeleteButtonProps) {
	return (
		<IconButton onClick={onClick} size="large" color="primary">
			<DeleteOutlineOutlinedIcon fontSize="inherit" />
		</IconButton>
	);
}
export default DeleteButton;
