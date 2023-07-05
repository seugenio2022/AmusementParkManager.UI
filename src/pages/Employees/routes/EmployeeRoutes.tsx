import { Route, Routes } from "react-router-dom";
import { Employees } from "..";
import DrawerFormContextProvider from "@/contexts/drawerFormContext";

function EmployeeRoutes() {
	return (
		<DrawerFormContextProvider>
			<Routes>
				<Route path="/" element={<Employees />} />
			</Routes>
		</DrawerFormContextProvider>
	);
}
export default EmployeeRoutes;
