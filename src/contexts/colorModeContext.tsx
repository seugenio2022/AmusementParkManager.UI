import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export enum Mode {
	Ligth = "light",
	Dark = "dark",
}

export const ColorModeContext = React.createContext({
	toggleColorMode: () => {
		return;
	},
	mode: Mode.Ligth,
});

export function ColorModeContextProvider({ children }: any) {
	const [mode, setMode] = React.useState<any>(Mode.Dark);
	const colorMode = React.useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode: any) =>
					prevMode === Mode.Ligth ? Mode.Dark : Mode.Ligth
				);
			},
			mode,
		}),
		[mode]
	);
	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode,
				},
				breakpoints: {
					values: {
						xs: 0,
						sm: 600,
						md: 900,
						lg: 1400,
						xl: 1536,
					},
				},
			}),
		[mode]
	);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ColorModeContext.Provider>
	);
}
export const useColorMode = () => React.useContext(ColorModeContext);
