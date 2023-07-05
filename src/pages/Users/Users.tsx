import { useTranslation } from "react-i18next";
import { GenericTable } from "@/components/GenericTable";
import { User } from "./models";
import { TableColumn } from "@/models";
import DrawerFormContextProvider, { DrawerFormContext, DrawerFormContextType } from "@/contexts/drawerFormContext";
import { useContext, useEffect, useState } from "react";
import GenericTableContextProvider from "@/contexts/genericTableContext";
import { userService } from "./services";
import { Create, Edit } from ".";

export default function Users() {
	const { t } = useTranslation();
	const { setToggleDrawer } = useContext(DrawerFormContext) as DrawerFormContextType;

	const actionForGetAll = () => {
		return userService.getAll();
	};

	const actionForDelete = (id: number) => {
		return userService.delete(id);
	};
	const userColumns: TableColumn[] = [
		{ id: "id", label: "ID", align: "center" },
		{ id: "userName", label: t("users.userName"), align: "center" },
		{ id: "password", label: t("users.password"), align: "center" },
		{ id: "action", label: t("action"), align: "center" },
	];

	return (
		<>
			<GenericTableContextProvider>
				<GenericTable<User>
					columns={userColumns}
					title={t("user.listUsers")}
					onAdd={setToggleDrawer(true)}
					addTitle={t("addButton")}
					actionForGetAll={actionForGetAll}
					actionForDelete={actionForDelete}
					createForm={<Create />}
					editForm={<Edit />}
				/>
			</GenericTableContextProvider>
		</>
	);
}
