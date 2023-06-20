import { IconButton } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
type EditButtonProps = {
	onClick: any;
};
function EditButton({ onClick }: EditButtonProps) {
	return (
		<IconButton onClick={onClick} size="large" color="primary">
			<EditOutlinedIcon fontSize="inherit" />
		</IconButton>
	);
}
export default EditButton;
