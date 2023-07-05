import { Title } from "@mui/icons-material";
import { Container, Grid, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { reportService } from "./services";

function Reports() {
	const [countTicketsBySaleDate, setCountTicketsBySaleDate] = useState<number>(0);
	useEffect(() => {
		reportService.getCountTicketsBySaleDate("05-07-2023").then((response) => {
			setCountTicketsBySaleDate(response.data);
		});
	}, []);

	return (
		<Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
			<Grid container spacing={3}>
				<Grid item xs={12} md={4} lg={3}>
					<Paper
						sx={{
							p: 2,
							display: "flex",
							flexDirection: "column",
							height: 240,
						}}
					>
						<Typography component="h2" variant="h6" color="primary" gutterBottom>
							Cantidad de entradas vendidas
						</Typography>
						<Typography component="p" variant="h4">
							{countTicketsBySaleDate}
						</Typography>
						<Typography color="text.secondary" sx={{ flex: 1 }}>
							Cantidad de entradas vendidas en todos los juegos en una fecha determinada: 05-07-2023
						</Typography>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
}
export default Reports;
