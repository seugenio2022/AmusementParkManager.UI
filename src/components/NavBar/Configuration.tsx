import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import {
	IconButton,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	ToggleButton,
	ToggleButtonGroup,
	Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { ColorModeContext, Mode } from "../../contexts";
import { APMButton } from "../Buttons";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { DrawerFormContext, DrawerFormContextType } from "@/contexts/drawerFormContext";

export default function Configuration() {
	const { i18n, t } = useTranslation();
	const { drawerIsOpen, setToggleDrawer } = React.useContext(DrawerFormContext) as DrawerFormContextType;

	const onChangeLanguage = (e: React.MouseEvent<HTMLElement>, newAlignment: string) => {
		const lang_code = newAlignment;
		i18n.changeLanguage(lang_code);
	};

	const { mode, toggleColorMode } = React.useContext(ColorModeContext);

	const handleDarkMode = () => {
		toggleColorMode();
	};

	const list = () => (
		<Box sx={{ width: 300 }} role="presentation" onClick={setToggleDrawer(false)} onKeyDown={setToggleDrawer(false)}>
			<Box m={3}>
				<Typography pb={1} variant="h6">
					{t("language")}
				</Typography>
				<ToggleButtonGroup
					color="primary"
					value={i18n.language}
					exclusive
					onChange={onChangeLanguage}
					aria-label="Platform"
				>
					{LANGUAGES.map(({ code, label }) => (
						<ToggleButton key={code} value={code}>
							{t(label)}
						</ToggleButton>
					))}
				</ToggleButtonGroup>
			</Box>
			<Box m={3}>
				<Typography pb={1} variant="h6">
					{t("colorMode")}
				</Typography>
				<ToggleButtonGroup color="primary" value={mode} exclusive onChange={handleDarkMode} aria-label="Platform">
					<ToggleButton value={Mode.Dark}>{t("colorDarkMode")}</ToggleButton>
					<ToggleButton value={Mode.Ligth}>{t("colorLightMode")}</ToggleButton>
				</ToggleButtonGroup>
			</Box>
		</Box>
	);

	return (
		<>
			<IconButton size="large" onClick={setToggleDrawer(true)} color="primary">
				<SettingsOutlinedIcon fontSize="inherit" />
			</IconButton>
			<Drawer anchor={"right"} open={drawerIsOpen} onClose={setToggleDrawer(false)}>
				{list()}
			</Drawer>
		</>
	);
}

export const LANGUAGES = [
	{ label: "spanish", code: "es" },
	{ label: "english", code: "en" },
];
