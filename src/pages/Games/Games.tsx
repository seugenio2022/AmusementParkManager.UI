import { DrawerFormContext, DrawerFormContextType } from "@/contexts/drawerFormContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { gameService } from "./services/game.service";
import { TableColumn } from "@/models";
import GenericTableContextProvider from "@/contexts/genericTableContext";
import { GenericTable } from "@/components/GenericTable";
import { Game } from "./models";
import Create from "./Create";
import Edit from "./Edit";

function Games() {
	const { t } = useTranslation();
	const { setToggleDrawer } = useContext(DrawerFormContext) as DrawerFormContextType;

	const actionForGetAll = () => {
		return gameService.getAll();
	};

	const actionForDelete = (id: number) => {
		return gameService.delete(id);
	};
	const gamesColumns: TableColumn[] = [
		{ id: "id", label: "ID", align: "center" },
		{ id: "name", label: t("name"), align: "center" },
		{ id: "price", label: t("games.price"), align: "center" },
		{ id: "schedules", label: t("games.schedules"), align: "center" },
		{ id: "action", label: t("action"), align: "center" },
	];

	return (
		<>
			<GenericTableContextProvider>
				<GenericTable<Game>
					columns={gamesColumns}
					title={t("games.listGames")}
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
export default Games;
