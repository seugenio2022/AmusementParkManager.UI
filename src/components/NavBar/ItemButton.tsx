import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
type Props = {
	onClick: any;
	text: string;
	icon: any;
};
function ItemButton({ onClick, text, icon }: Props) {
	return (
		<ListItem disablePadding>
			<ListItemButton onClick={() => onClick()}>
				<ListItemIcon sx={{ minWidth: "35px" }}>{icon}</ListItemIcon>
				<ListItemText primary={text} />
			</ListItemButton>
		</ListItem>
	);
}
export default ItemButton;
