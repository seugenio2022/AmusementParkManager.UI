import { useTranslation } from "react-i18next";
import { GenericTable } from "@/components/GenericTable";
import { Buyer } from "./models";
import { TableColumn } from "@/models";
import { Create, Edit } from ".";
import DrawerFormContextProvider, { DrawerFormContext, DrawerFormContextType } from "@/contexts/drawerFormContext";
import { useContext, useEffect, useState } from "react";
import { buyerService } from "./services/buyer.service";
import GenericTableContextProvider from "@/contexts/genericTableContext";

export default function Buyers() {
	const { t } = useTranslation();
	const { setToggleDrawer } = useContext(DrawerFormContext) as DrawerFormContextType;

	const actionForGetAll = () => {
		return buyerService.getAll();
	};

	const actionForDelete = (id: number) => {
		return buyerService.delete(id);
	};
	const buyersColumns: TableColumn[] = [
		{ id: "id", label: "ID", align: "center" },
		{ id: "name", label: t("name"), align: "center" },
		{ id: "lastName", label: t("lastname"), align: "center" },
		{ id: "mail", label: "Mail", align: "center" },
		{ id: "phone", label: t("phone"), align: "center" },
		{ id: "action", label: t("action"), align: "center" },
	];

	return (
		<>
			<GenericTableContextProvider>
				<GenericTable<Buyer>
					columns={buyersColumns}
					title={t("listBuyers")}
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
