import { Chip, IconButton, Stack, TextField, Typography } from "@mui/material";
import { Field } from "formik";
import { useTranslation } from "react-i18next";
import { DrawerForm } from "@/components/DrawerForm";
import { gameService } from "./services/game.service";
import { GenericTableContext, GenericTableContextType } from "@/contexts/genericTableContext";
import { useContext, useEffect, useState } from "react";
import { Game, Schedule } from "./models";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import { ChipSchedule } from "./components";
import { DrawerFormContext, DrawerFormContextType } from "@/contexts/drawerFormContext";
function Edit() {
	const { t } = useTranslation();
	const { setReload, rowForEdit, snackAlert } = useContext(GenericTableContext) as GenericTableContextType;
	const [schedules, setSchedules] = useState<Schedule[]>([]);
	const [currentSchedule, setCurrentSchedule] = useState<Schedule>({});
	const { drawerIsOpen } = useContext(DrawerFormContext) as DrawerFormContextType;

	useEffect(() => {
		setCurrentSchedule({});
		const sh = rowForEdit.schedules.map(({ initialTime, endTime, id }: any) => {
			return { initialTime, endTime, id };
		});
		setSchedules([...sh]);
	}, [drawerIsOpen]);

	const onSubmit = (newGame: Game) => {
		newGame.schedules = schedules.map(({ initialTime, endTime }: any) => {
			return { initialTime, endTime };
		});

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
	function handleOnAdd(): void {
		setSchedules((current) => [...current, currentSchedule]);
	}
	function onDeleteSchedule(id?: number) {
		setSchedules((schs) => schs.filter((sh) => sh.id !== id));
	}
	return (
		<DrawerForm title={t("games.editGame")} onSubmit={onSubmit} formValues={rowForEdit}>
			<Field defaultValue="" fullWidth name="name" label={t("name")} variant="outlined" as={TextField} />
			<Field defaultValue="" fullWidth name="price" label={t("games.price")} variant="outlined" as={TextField} />
			<Stack defaultValue="" width={"100%"} direction="row" alignContent={"flex-start"} mt={2}>
				<Typography variant="h6">{t("games.schedules")}</Typography>
			</Stack>

			<Stack direction="row">
				<TextField
					type="number"
					value={currentSchedule.initialTime}
					onChange={(e) => setCurrentSchedule({ ...currentSchedule, initialTime: parseInt(e.target.value) })}
					sx={{ ml: "0px !important" }}
					fullWidth
					label={t("games.initialTime")}
					variant="outlined"
				/>
				<TextField
					type="number"
					onChange={(e) => setCurrentSchedule({ ...currentSchedule, endTime: parseInt(e.target.value) })}
					value={currentSchedule.endTime}
					fullWidth
					label={t("games.endTime")}
					variant="outlined"
				/>
				<IconButton onClick={() => handleOnAdd()}>
					<AddCircleIcon />
				</IconButton>
			</Stack>
			<Stack mt={1} spacing={2} width={"100%"} direction="row" alignContent={"flex-start"}>
				{schedules?.map((sh, key) => (
					<ChipSchedule
						handleDelete={() => onDeleteSchedule(sh.id)}
						key={key}
						size="medium"
						initialTime={sh.initialTime}
						endTime={sh.endTime}
					/>
				))}
			</Stack>
		</DrawerForm>
	);
}
export default Edit;
