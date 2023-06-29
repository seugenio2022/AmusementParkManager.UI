import { TextField } from "@mui/material";
import { Field } from "formik";
import { useTranslation } from "react-i18next";
import { DrawerForm } from "@/components/DrawerForm";
import { gameService } from "./services/game.service";
import { GenericTableContext, GenericTableContextType } from "@/contexts/genericTableContext";
import { useContext } from "react";
import { Game } from "./models";
function Edit() {
	const { t } = useTranslation();
	const { setReload, rowForEdit, snackAlert } = useContext(GenericTableContext) as GenericTableContextType;
	const onSubmit = (newGame: Game) => {
		gameService
			.update(newGame)
			.then((result) => {
				setReload(true);
				snackAlert.showUpdatedOk();
			})
			.catch((err) => {
				snackAlert.showUpdatedError();
			});
	};
	return (
		<DrawerForm title={t("games.editGame")} onSubmit={onSubmit} formValues={rowForEdit}>
			<Field fullWidth name="name" label={t("name")} variant="outlined" as={TextField} />
			<Field fullWidth name="price" label={t("games.price")} variant="outlined" as={TextField} />
		</DrawerForm>
	);
}
export default Edit;
