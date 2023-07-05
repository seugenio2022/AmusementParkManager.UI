import { useTranslation } from "react-i18next";
import { GenericTable } from "@/components/GenericTable";
import { TableColumn } from "@/models";
import { DrawerFormContext, DrawerFormContextType } from "@/contexts/drawerFormContext";
import { useContext, useEffect, useState } from "react";
import GenericTableContextProvider from "@/contexts/genericTableContext";
import Edit from "./Edit";
import { ticketService } from "./services";
import { Ticket } from "./models";

export default function Tickets() {
	const { t } = useTranslation();
	const { setToggleDrawer } = useContext(DrawerFormContext) as DrawerFormContextType;

	const actionForGetAll = () => {
		return ticketService.getAll();
	};

	const actionForDelete = (id: number) => {
		return ticketService.delete(id);
	};
	const salesColumns: TableColumn[] = [
		{ id: "id", label: t("tickets.id"), align: "center" },
		{ id: "dateTime", label: t("tickets.dateTime"), align: "center" },
		{ id: "buyerMail", label: t("tickets.buyer"), align: "center" },
		{ id: "gameName", label: t("tickets.game"), align: "center" },
		{ id: "action", label: t("action"), align: "center" },
	];

	return (
		<>
			<GenericTableContextProvider>
				<GenericTable<Ticket>
					columns={salesColumns}
					title={t("tickets.listTickets")}
					onAdd={setToggleDrawer(true)}
					addTitle={t("addButton")}
					actionForGetAll={actionForGetAll}
					actionForDelete={actionForDelete}
					editForm={<Edit />}
				/>
			</GenericTableContextProvider>
		</>
	);
}
