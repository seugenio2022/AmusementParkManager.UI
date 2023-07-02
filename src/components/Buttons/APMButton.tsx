import { Button, ButtonProps } from "@mui/material";

function APMButton(props: ButtonProps) {
	return (
		<Button
			sx={{
				textTransform: "capitalize",
				borderRadius: "4px",
			}}
			size={props.size ?? "large"}
			type={props.type}
			startIcon={props.startIcon}
			onClick={props.onClick}
			variant={props.variant ?? "contained"}
		>
			{props.children}
		</Button>
	);
}
export default APMButton;
