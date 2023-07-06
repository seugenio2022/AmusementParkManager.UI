import { Game, emptyGame } from "@/pages/Games/models";
import { gameService } from "@/pages/Games/services";
import { SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";

function useGameSelect() {
	const [games, setGames] = useState<Game[]>([]);
	const [gameSelected, setGameSelected] = useState<Game>(emptyGame);

	useEffect(() => {
		gameService.getAll().then((response) => {
			setGames(response.data);
		});
	}, []);

	const handleSelectGame = (event: SelectChangeEvent) => {
		const game = games.find((b) => b.id == parseInt(event.target.value));
		setGameSelected(game ?? emptyGame);
	};

	return { setGames, games, setGameSelected, gameSelected, handleSelectGame }
}
export default useGameSelect