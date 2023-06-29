import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { PaletteMode, ThemeOptions, colors } from "@mui/material";
import shadows from "@mui/material/styles/shadows";

const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
	palette: {
		mode,
		...(mode === "light"
			? {
					// palette values for light mode
					primary: colors.blue,
					secondary: colors.deepPurple,
					background: {
						default: "#eef2f6",
						paper: "#ffffff",
					},
					// eslint-disable-next-line no-mixed-spaces-and-tabs
			  }
			: {
					// palette values for dark mode
					primary: colors.blue,
					secondary: colors.deepPurple,
					background: {
						default: "#111a35",
						paper: "#111936",
					},

					text: {
						primary: "#d7dcec",
					},
					// eslint-disable-next-line no-mixed-spaces-and-tabs
			  }),
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1920,
		},
	},
	components: {
		MuiButtonBase: {
			styleOverrides: {
				root: {
					fontWeight: 500,
					textTransform: "capitalize",
					borderRadius: "4px",
				},
			},
		},
		MuiDialog: {
			styleOverrides: {
				paper: {
					padding: "12px 0 12px 0",
				},
			},
		},
	},
});

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
				setMode((prevMode: any) => (prevMode === Mode.Ligth ? Mode.Dark : Mode.Ligth));
			},
			mode,
		}),
		[mode]
	);
	const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ColorModeContext.Provider>
	);
}
export const useColorMode = () => React.useContext(ColorModeContext);
