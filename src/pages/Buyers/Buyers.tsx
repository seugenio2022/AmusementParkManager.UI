import { useTranslation } from "react-i18next";
import { GenericTable } from "@/components/GenericTable";
import { Buyer } from "./models";
import { TableColumn } from "@/models";

export default function Buyers() {
	const { t } = useTranslation();
	const buyers: Buyer[] = [
		{ id: 1, name: "name", dni: 40012190, lastname: "lastname", birthdate: "01/01/1990" },
		{ id: 2, name: "name", dni: 40012190, lastname: "lastname", birthdate: "01/01/1990" },
		{ id: 3, name: "name", dni: 40012190, lastname: "lastname", birthdate: "01/01/1990" },
		{ id: 4, name: "name", dni: 40012190, lastname: "lastname", birthdate: "01/01/1990" },
	];
	const buyersColumns: TableColumn[] = [
		{ id: "id", label: "ID", align: "left" },
		{ id: "name", label: t("name"), align: "right" },
		{ id: "lastname", label: t("lastname"), align: "right" },
		{ id: "dni", label: "DNI", align: "right" },
		{ id: "birthdate", label: t("birthdate"), align: "right" },
	];
	return <GenericTable columns={buyersColumns} rows={buyers} />;
}
