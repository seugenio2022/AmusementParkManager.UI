import { APMButton } from "@/components/Buttons";
import {
	Box,
	Container,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TextField,
	Typography,
} from "@mui/material";
import { Field } from "formik";
import { useTranslation } from "react-i18next";

import { DrawerForm } from "@/components/DrawerForm";
import { GenericTableContext, GenericTableContextType } from "@/contexts/genericTableContext";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Sale, emptySale } from "./models";
import { saleService } from "./services";
import { buyerService } from "../Buyers/services/buyer.service";
import { Buyer, emptyBuyer } from "../Buyers";
import { DeleteButton } from "@/components/GenericTable";
import { Game } from "../Games/models";
import { gameService } from "../Games/services/game.service";
import { Ticket } from "../Tickets/models";
import { changeFormatToLocalDate, changeFormatToLocalDateTime } from "@/utilities";

type TicketRowType = {
	id: number;
	buyerId?: number;
	buyerMail: string;
	gameId?: number;
	gameName?: string;
	dateTime: string;
};
function Create() {
	const { t } = useTranslation();
	const { setReload, snackAlert } = useContext(GenericTableContext) as GenericTableContextType;
	const [ticketDateTime, setTicketDateTime] = useState<string>("");
	const [buyers, setBuyers] = useState<Buyer[]>([]);
	const [games, setGames] = useState<Game[]>([]);
	const [buyerSelected, setBuyerSelected] = useState<Buyer>(emptyBuyer);
	const [gameSelected, setGameSelected] = useState<Game>();
	const [ticketsRows, setTicketsRows] = useState<TicketRowType[]>([]);

	const onSubmit = (newSale: Sale) => {
		const ticketsToSend: Ticket[] = ticketsRows.map((row) => {
			return {
				dateTime: changeFormatToLocalDateTime(row.dateTime),
				buyerId: row.buyerId ?? 0,
				gameId: row.gameId ?? 0,
			};
		});

		newSale.ticketsDto = ticketsToSend;
		newSale.saleDate = changeFormatToLocalDate(newSale.saleDate);
		saleService
			.create(newSale)
			.then((result) => {
				setReload(true);
				snackAlert.showCreatedOk();
				setTicketsRows([]);
				setBuyerSelected(emptyBuyer);
				setGameSelected(undefined);
				setTicketDateTime("");
			})
			.catch((err) => {
				snackAlert.showCreatedError();
			});
	};

	useEffect(() => {
		buyerService.getAll().then((response) => {
			setBuyers(response.data);
		});

		gameService.getAll().then((response) => {
			setGames(response.data);
		});
	}, []);

	const handleSelectBuyer = (event: SelectChangeEvent) => {
		const buyer = buyers.find((b) => b.id == parseInt(event.target.value));
		setBuyerSelected(buyer ?? emptyBuyer);
	};
	const handleSelectGame = (event: SelectChangeEvent) => {
		const game = games.find((b) => b.id == parseInt(event.target.value));
		setGameSelected(game);
	};
	const handleOnDelete = (key: number) => {
		setTicketsRows((rows) => rows.filter((r) => r.id !== key));
	};

	const onAddTicket = () => {
		setTicketsRows((current) => [
			...current,
			{
				id: current.length,
				buyerId: buyerSelected?.id,
				buyerMail: buyerSelected?.mail,
				gameId: gameSelected?.id,
				gameName: gameSelected?.name,
				dateTime: ticketDateTime,
			},
		]);

		// setBuyerSelected(emptyBuyer);
		// setGameSelected(undefined);
		setTicketDateTime("");
	};
	function handleChangeTicketDateTime(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
		setTicketDateTime(event.target.value.toString());
	}

	return (
		<DrawerForm title={t("sales.addSale")} onSubmit={onSubmit} formValues={emptySale} width={600}>
			{/* <DateField label="Basic date field" /> */}
			<Field type="date" fullWidth name="saleDate" variant="outlined" as={TextField} />
			<Stack width={"100%"} direction="row" alignContent={"flex-start"} my={2}>
				<Typography variant="h6">{t("sales.addTicket")}</Typography>
			</Stack>

			<FormControl fullWidth sx={{ pb: 2 }}>
				<InputLabel>{t("tickets.buyer")}</InputLabel>
				<Select value={buyerSelected?.id?.toString()} label={t("tickets.buyer")} onChange={handleSelectBuyer}>
					{buyers.map((b) => (
						<MenuItem value={b.id}>{b.mail}</MenuItem>
					))}
				</Select>
			</FormControl>
			<FormControl fullWidth sx={{ pb: 2 }}>
				<InputLabel>{t("tickets.game")}</InputLabel>
				<Select value={gameSelected?.id?.toString()} label={t("tickets.game")} onChange={handleSelectGame}>
					{games.map((b) => (
						<MenuItem value={b.id}>{b.name}</MenuItem>
					))}
				</Select>
			</FormControl>
			<TextField
				value={ticketDateTime}
				onChange={handleChangeTicketDateTime}
				type={"datetime-local"}
				fullWidth
				name="dateTime"
				variant="outlined"
			/>

			<APMButton onClick={onAddTicket}>{t("addButton")}</APMButton>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell align={"left"}>{t("tickets.buyer")}</TableCell>
							<TableCell align={"left"}>{t("tickets.game")}</TableCell>
							<TableCell align={"left"}>{t("tickets.dateTime")}</TableCell>
							<TableCell align={"left"}>{t("action")}</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{ticketsRows.map((t, key) => (
							<TableRow key={key}>
								<TableCell align={"left"}>{t.buyerMail}</TableCell>
								<TableCell align={"left"}>{t.gameName}</TableCell>
								<TableCell align={"left"}>{t.dateTime}</TableCell>
								<TableCell align={"left"}>
									<Stack justifyContent={"center"} direction="row" spacing={1}>
										<DeleteButton onClick={() => handleOnDelete(key)} />
									</Stack>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</DrawerForm>
	);
}
export default Create;
