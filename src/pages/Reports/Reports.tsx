import { Container, Grid, Paper, Stack, TextField, Typography } from "@mui/material";
import TicketsBySaleDate from "./components/TicketsBySaleDate";
import TicketsByGameAndSaleDate from "./components/TicketsByGameAndSaleDate";
import SalesTotalPriceByDay from "./components/SalesTotalPriceByDay";
import SalesTotalPriceByMonthAndYear from "./components/SalesTotalPriceByMonthAndYear";

function Reports() {
	const reports = [
		<TicketsBySaleDate />,
		<TicketsByGameAndSaleDate />,
		<SalesTotalPriceByDay />,
		<SalesTotalPriceByMonthAndYear />,
	];
	return (
		<Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
			<Grid container spacing={5}>
				{reports.map((report) => (
					<Grid item xs={12} md={4} lg={3}>
						{report}
					</Grid>
				))}
			</Grid>
		</Container>
	);
}
export default Reports;
