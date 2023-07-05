import { Route, Routes } from "react-router-dom";
import { Sales } from "..";
import DrawerFormContextProvider from "@/contexts/drawerFormContext";

function SaleRoutes() {
	return (
		<DrawerFormContextProvider>
			<Routes>
				<Route path="/" element={<Sales />} />
			</Routes>
		</DrawerFormContextProvider>
	);
}
export default SaleRoutes;
