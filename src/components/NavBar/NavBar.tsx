import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Configuration } from ".";
import { Button, Menu } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NavBar() {
	const navigate = useNavigate();
	const { t } = useTranslation();
	return (
		<Box sx={{ flexGrow: 1 }} mb={5}>
			<AppBar position="sticky">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ display: "flex", width: "25%" }}>
						Amusement Park Manager
					</Typography>
					<Box sx={{ display: "flex", width: "100%" }}>
						<Button color="inherit" onClick={() => navigate("/buyers")}>
							{t("buyers")}
						</Button>
						<Button color="inherit" onClick={() => navigate("/employees")}>
							{t("employees")}
						</Button>
						<Button color="inherit" onClick={() => navigate("/games")}>
							{t("games")}
						</Button>
						<Button color="inherit" onClick={() => navigate("/sales")}>
							{t("sales")}
						</Button>
						<Button color="inherit" onClick={() => navigate("/tickets")}>
							{t("tickets")}
						</Button>
						<Button color="inherit" onClick={() => navigate("/users")}>
							{t("users")}
						</Button>
					</Box>
					<Configuration />
				</Toolbar>
			</AppBar>
		</Box>
	);
}
