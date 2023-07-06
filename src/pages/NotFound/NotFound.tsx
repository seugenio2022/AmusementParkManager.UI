import { Container, Typography } from "@mui/material";

function NotFound() {
	return (
		<Container sx={{ mt: 10, textAlign: "center", justifyItems: "center" }}>
			<Typography variant="h1">404 Not Found</Typography>
		</Container>
	);
}
export default NotFound;
