import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { MouseEventHandler } from "react";

type Props = {
	onClick: any;
	text: string;
};
function ItemButton({ onClick, text }: Props) {
	return (
		<ListItem disablePadding>
			<ListItemButton onClick={() => onClick()}>
				<ListItemText primary={text} />
			</ListItemButton>
		</ListItem>
	);
}
export default ItemButton;
