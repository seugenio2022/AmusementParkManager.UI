import { useTranslation } from "react-i18next";
import { GenericTable } from "@/components/GenericTable";
import { TableColumn } from "@/models";

import { DrawerFormContext, DrawerFormContextType } from "@/contexts/drawerFormContext";
import { useContext, useEffect, useState } from "react";
import { saleService } from "./services/sale.service";
import GenericTableContextProvider from "@/contexts/genericTableContext";
import { Sale } from "./models/sale.model";
import Create from "./Create";
import Edit from "./Edit";

export default function Sales() {
	const { t } = useTranslation();
	const { setToggleDrawer } = useContext(DrawerFormContext) as DrawerFormContextType;

	const actionForGetAll = () => {
		return saleService.getAll();
	};

	const actionForDelete = (id: number) => {
		return saleService.delete(id);
	};
	const salesColumns: TableColumn[] = [
		{ id: "id", label: "ID", align: "center" },
		{ id: "saleDate", label: t("sales.date"), align: "center" },
		{ id: "totalPrice", label: t("sales.totalPrice"), align: "center" },
		{ id: "action", label: t("action"), align: "center" },
	];

	return (
		<>
			<GenericTableContextProvider>
				<GenericTable<Sale>
					columns={salesColumns}
					title={t("sales.listSales")}
					onAdd={setToggleDrawer(true)}
					addTitle={t("addButton")}
					actionForGetAll={actionForGetAll}
					actionForDelete={actionForDelete}
					createForm={<Create />}
					editForm={<Edit />}
					messageDelete={t("sales.messageDelete") as string}
				/>
			</GenericTableContextProvider>
		</>
	);
}
