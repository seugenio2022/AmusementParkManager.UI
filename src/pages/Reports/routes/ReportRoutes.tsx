import { Route, Routes } from "react-router-dom";
import DrawerFormContextProvider from "@/contexts/drawerFormContext";
import Reports from "../Reports";

function ReportRoutes() {
	return (
		<DrawerFormContextProvider>
			<Routes>
				<Route path="/" element={<Reports />} />
			</Routes>
		</DrawerFormContextProvider>
	);
}
export default ReportRoutes;
