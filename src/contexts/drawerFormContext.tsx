import { debug } from "console";
import { ReactNode, createContext, useState } from "react";

export type DrawerFormContextType = {
	drawerIsOpen: boolean;
	setToggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
	closeDrawer: () => void;
	openDrawer: () => void;
};

export const DrawerFormContext = createContext<DrawerFormContextType | null>(null);

function DrawerFormContextProvider({ children }: any) {
	const [drawerIsOpen, setDrawer] = useState(false);

	const setToggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
		/*if (
			event.type === "keydown" &&
			((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
		) {
			return;
		}
*/

		setDrawer(open);
	};
	const closeDrawer = () => setDrawer(false);
	const openDrawer = () => setDrawer(true);
	return (
		<DrawerFormContext.Provider
			value={{
				drawerIsOpen,
				setToggleDrawer,
				closeDrawer,
				openDrawer,
			}}
		>
			{children}
		</DrawerFormContext.Provider>
	);
}
export default DrawerFormContextProvider;
