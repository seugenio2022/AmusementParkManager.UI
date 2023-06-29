import Container from "@mui/material/Container";
import { NavBar } from "./components/NavBar";
import { ColorModeContextProvider } from "./contexts";
import { CssBaseline, Paper } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Tickets } from "./pages/Tickets";
import { Users } from "./pages/Users";
import { Sales } from "./pages/Sales";
import { Games } from "./pages/Games";
import { Employees } from "./pages/Employees";
import { BuyerRoutes } from "./pages/Buyers";
import GameRoutes from "./pages/Games/routes/GameRoutes";

function App() {
	const isLogged = true;
	return (
		<BrowserRouter>
			<ColorModeContextProvider>
				<CssBaseline enableColorScheme />

				<Container sx={{ minHeight: "100%", pb: 15, pt: 12 }} component="main" maxWidth="xl">
					<NavBar />
					{/* <Container component={Paper} sx={{ pb: 4, pt: 12, minWidth: "100%" }}> */}
					<Routes>
						<Route path="/login" element={<Login />} />
						<Route path="/buyers/*" element={<BuyerRoutes />} />
						<Route path="/employees" element={<Employees />} />
						<Route path="/games/*" element={<GameRoutes />} />
						<Route path="/sales" element={<Sales />} />
						<Route path="/tickets" element={<Tickets />} />
						<Route path="/users" element={<Users />} />
					</Routes>
				</Container>
			</ColorModeContextProvider>
		</BrowserRouter>
	);
}

export default App;
