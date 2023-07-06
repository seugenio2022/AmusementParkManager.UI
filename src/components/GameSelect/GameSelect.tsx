import useGameSelect from "@/hooks/useGameSelect.hook";
import { Games } from "@/pages/Games";
import { Game } from "@/pages/Games/models";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useTranslation } from "react-i18next";

type GameSelectType = {
	gameSelected: Game;
	games: Game[];
	handleSelectGame: any;
};
function GameSelect({ gameSelected, games, handleSelectGame }: GameSelectType) {
	const { t } = useTranslation();
	return (
		<FormControl fullWidth sx={{ my: 2 }}>
			<InputLabel>{t("tickets.game")}</InputLabel>
			<Select value={gameSelected?.id?.toString()} label={t("tickets.game")} onChange={handleSelectGame}>
				{games.map((b) => (
					<MenuItem value={b.id}>{b.name}</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}
export default GameSelect;
