import { Route, Routes } from "react-router-dom";
import DrawerFormContextProvider from "@/contexts/drawerFormContext";
import { Users } from "..";

function UserRoutes() {
	return (
		<DrawerFormContextProvider>
			<Routes>
				<Route path="/" element={<Users />} />
			</Routes>
		</DrawerFormContextProvider>
	);
}
export default UserRoutes;
