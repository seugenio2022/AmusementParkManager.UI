import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Configuration, Logo } from ".";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { APMButton } from "../Buttons";
import DrawerFormContextProvider from "@/contexts/drawerFormContext";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import ItemButton from "./ItemButton";

export default function NavBar() {
	const navigate = useNavigate();
	const { t } = useTranslation();

	return (
		<Box sx={{ flexGrow: 1, position: "absolute" }}>
			<AppBar color="inherit">
				<Toolbar>
					<Logo />
					<Box sx={{ display: "flex", width: "40%" }}>
						<ItemButton onClick={() => navigate("/buyers")} text={t("buyers")} />
						<ItemButton onClick={() => navigate("/employees")} text={t("employees")} />
						<ItemButton onClick={() => navigate("/games")} text={t("games")} />
						<ItemButton onClick={() => navigate("/sales")} text={t("sales")} />
						<ItemButton onClick={() => navigate("/tickets")} text={t("tickets")} />
						<ItemButton onClick={() => navigate("/users")} text={t("users")} />
					</Box>
					<Box sx={{ textAlign: "end", ml: "auto" }}>
						<DrawerFormContextProvider>
							<Configuration />
						</DrawerFormContextProvider>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
