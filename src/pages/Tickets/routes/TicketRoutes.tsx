import { Route, Routes } from "react-router-dom";
import { Tickets } from "..";
import DrawerFormContextProvider from "@/contexts/drawerFormContext";

function SaleRoutes() {
	return (
		<DrawerFormContextProvider>
			<Routes>
				<Route path="/" element={<Tickets />} />
			</Routes>
		</DrawerFormContextProvider>
	);
}
export default SaleRoutes;
