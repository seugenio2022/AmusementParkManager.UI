import { Route, Routes } from "react-router-dom";
import { Buyers, Create, Edit } from "..";
import DrawerFormContextProvider from "@/contexts/drawerFormContext";

function BuyerRoutes() {
	return (
		<DrawerFormContextProvider>
			<Routes>
				<Route path="/" element={<Buyers />} />
			</Routes>
		</DrawerFormContextProvider>
	);
}
export default BuyerRoutes;
