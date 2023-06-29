import { TextField } from "@mui/material";
import { Field } from "formik";
import { useTranslation } from "react-i18next";
import { DrawerForm } from "@/components/DrawerForm";
import { GenericTableContext, GenericTableContextType } from "@/contexts/genericTableContext";
import { useContext } from "react";
import { Game, emptyGame } from "./models";
import { gameService } from "./services/game.service";

function Create() {
	const { t } = useTranslation();
	const { setReload, snackAlert } = useContext(GenericTableContext) as GenericTableContextType;

	const onSubmit = (newGame: Game) => {
		gameService
			.create(newGame)
			.then((result) => {
				setReload(true);
				snackAlert.showCreatedOk();
			})
			.catch((err) => {
				snackAlert.showCreatedError();
			});
	};
	return (
		<DrawerForm title={t("games.addGame")} onSubmit={onSubmit} formValues={emptyGame}>
			<Field fullWidth name="name" label={t("name")} variant="outlined" as={TextField} />
			<Field fullWidth name="price" label={t("games.price")} variant="outlined" as={TextField} />
		</DrawerForm>
	);
}
export default Create;
