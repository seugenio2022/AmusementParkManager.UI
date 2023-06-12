import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ColorModeContext, Mode } from "../../contexts";

type Anchor = "right";

export default function Configuration() {
	const [state, setState] = React.useState({
		right: false,
	});
	const { i18n, t } = useTranslation();

	const onChangeLanguage = (e: React.MouseEvent<HTMLElement>, newAlignment: string) => {
		const lang_code = newAlignment;
		i18n.changeLanguage(lang_code);
	};

	const { mode, toggleColorMode } = React.useContext(ColorModeContext);

	const handleDarkMode = () => {
		toggleColorMode();
	};
	const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
		if (
			event.type === "keydown" &&
			((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor: Anchor) => (
		<Box
			sx={{ width: 300 }}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<Box m={3}>
				<Typography variant="h6">{t("language")}</Typography>
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
				<Typography variant="h6">{t("colorMode")}</Typography>
				<ToggleButtonGroup color="primary" value={mode} exclusive onChange={handleDarkMode} aria-label="Platform">
					<ToggleButton value={Mode.Dark}>{t("colorDarkMode")}</ToggleButton>
					<ToggleButton value={Mode.Ligth}>{t("colorLightMode")}</ToggleButton>
				</ToggleButtonGroup>
			</Box>
		</Box>
	);

	return (
		<>
			<Button color="inherit" onClick={toggleDrawer("right", true)}>
				{t("configuration")}
			</Button>
			<Drawer anchor={"right"} open={state["right"]} onClose={toggleDrawer("right", false)}>
				{list("right")}
			</Drawer>
		</>
	);
}

export const LANGUAGES = [
	{ label: "spanish", code: "es" },
	{ label: "english", code: "en" },
];
