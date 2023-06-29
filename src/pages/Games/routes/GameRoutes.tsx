import { Route, Routes } from "react-router-dom";
import { Games } from "..";
import DrawerFormContextProvider from "@/contexts/drawerFormContext";

function GameRoutes() {
	return (
		<DrawerFormContextProvider>
			<Routes>
				<Route path="/" element={<Games />} />
			</Routes>
		</DrawerFormContextProvider>
	);
}
export default GameRoutes;
