import { Box, Chip, Container, Drawer, IconButton, Stack, TextField, Typography } from "@mui/material";
import { Field, Form, Formik, useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { DrawerForm } from "@/components/DrawerForm";
import { GenericTableContext, GenericTableContextType } from "@/contexts/genericTableContext";
import { useContext, useState } from "react";
import { Game, Schedule, emptyGame } from "./models";
import { gameService } from "./services/game.service";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { ChipSchedule } from "./components";
function Create() {
	const { t } = useTranslation();
	const { setReload, snackAlert } = useContext(GenericTableContext) as GenericTableContextType;
	const [schedules, setSchedules] = useState<Schedule[]>([]);
	const [currentSchedule, setCurrentSchedule] = useState<Schedule>({});

	const onSubmit = (newGame: Game) => {
		newGame.schedules = schedules;
		gameService
			.create(newGame)
			.then(() => {
				setReload(true);
				snackAlert.showCreatedOk();
			})
			.catch((err) => {
				snackAlert.showCreatedError();
			});
	};

	function handleOnAdd(): void {
		setSchedules((current) => [
			...current,
			{ initialTime: currentSchedule.initialTime, endTime: currentSchedule.endTime },
		]);
	}

	return (
		<DrawerForm title={t("games.addGame")} onSubmit={onSubmit} formValues={emptyGame}>
			<Field fullWidth name="name" label={t("name")} variant="outlined" as={TextField} />
			<Field fullWidth name="price" label={t("games.price")} variant="outlined" as={TextField} />
			<Stack width={"100%"} direction="row" alignContent={"flex-start"} mt={2}>
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
					<ChipSchedule key={key} size="medium" initialTime={sh.initialTime} endTime={sh.endTime} />
				))}
			</Stack>
		</DrawerForm>
	);
}
export default Create;
