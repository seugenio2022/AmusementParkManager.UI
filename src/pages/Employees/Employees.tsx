import { useTranslation } from "react-i18next";
import { GenericTable } from "@/components/GenericTable";
import { TableColumn } from "@/models";
import DrawerFormContextProvider, { DrawerFormContext, DrawerFormContextType } from "@/contexts/drawerFormContext";
import { useContext, useEffect, useState } from "react";
import { employeeService } from "./services/employee.service";
import GenericTableContextProvider from "@/contexts/genericTableContext";
import { Employee } from "./models";
import { Create, Edit } from ".";

export default function Employees() {
	const { t } = useTranslation();
	const { setToggleDrawer } = useContext(DrawerFormContext) as DrawerFormContextType;

	const actionForGetAll = () => {
		return employeeService.getAll();
	};

	const actionForDelete = (id: number) => {
		return employeeService.delete(id);
	};
	const employeesColumns: TableColumn[] = [
		{ id: "id", label: "ID", align: "center" },
		{ id: "name", label: t("name"), align: "center" },
		{ id: "lastName", label: t("lastname"), align: "center" },
		{ id: "mail", label: "Mail", align: "center" },
		{ id: "phone", label: t("phone"), align: "center" },
		{ id: "type", label: t("employees.type"), align: "center" },
		{ id: "action", label: t("action"), align: "center" },
	];

	return (
		<>
			<GenericTableContextProvider>
				<GenericTable<Employee>
					columns={employeesColumns}
					title={t("employees.listBuyers")}
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
