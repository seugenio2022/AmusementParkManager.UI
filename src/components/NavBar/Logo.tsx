import logoDark from "@/assets/logo-dark.png";
import logoLigth from "@/assets/logo-ligth.png";
import { Mode, useColorMode } from "@/contexts";
import { Box } from "@mui/material";
function Logo() {
	const { mode } = useColorMode();
	return (
		<Box component={"span"} pr={2} pt={1}>
			<img src={mode == Mode.Dark ? logoDark : logoLigth} />
		</Box>
	);
}
export default Logo;
