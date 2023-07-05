import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Configuration, Logo } from ".";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { APMButton } from "../Buttons";
import DrawerFormContextProvider from "@/contexts/drawerFormContext";
import { List, ListItem, ListItemButton, ListItemText, Paper } from "@mui/material";
import ItemButton from "./ItemButton";
import BadgeIcon from "@mui/icons-material/Badge";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AttractionsIcon from "@mui/icons-material/Attractions";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
export default function NavBar() {
	const navigate = useNavigate();
	const { t } = useTranslation();

	return (
		<Box sx={{ flexGrow: 1, position: "absolute" }}>
			<AppBar color="inherit" sx={{ boxShadow: "none" }}>
				<Toolbar sx={{ height: "70px" }}>
					<Logo />
					<Box sx={{ display: "flex", width: "40%" }}>
						<ItemButton onClick={() => navigate("/buyers")} text={t("buyers")} icon={<PersonAddIcon />} />
						<ItemButton onClick={() => navigate("/employees")} text={t("employees")} icon={<BadgeIcon />} />
						<ItemButton onClick={() => navigate("/games")} text={t("games.menu")} icon={<AttractionsIcon />} />
						<ItemButton onClick={() => navigate("/sales")} text={t("sales.menu")} icon={<PointOfSaleIcon />} />
						<ItemButton onClick={() => navigate("/tickets")} text={t("tickets.menu")} icon={<LocalActivityIcon />} />
						<ItemButton onClick={() => navigate("/users")} text={t("users")} icon={<ManageAccountsIcon />} />
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
