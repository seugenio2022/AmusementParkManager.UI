import Container from "@mui/material/Container";
import { NavBar } from "./components/NavBar";
import { ColorModeContextProvider } from "./contexts";
import { CssBaseline, Paper } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { TicketRoutes } from "./pages/Tickets";
import { UserRoutes, Users } from "./pages/Users";
import { Employees } from "./pages/Employees";
import { BuyerRoutes } from "./pages/Buyers";
import GameRoutes from "./pages/Games/routes/GameRoutes";
import { SaleRoutes } from "./pages/Sales/routes";
import AuthGuard from "./guards/auth.guard";
import { RoutesWithNotFound } from "./utilities";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
	const isLogged = true;
	return (
		<Provider store={store}>
			<BrowserRouter>
				<ColorModeContextProvider>
					<CssBaseline enableColorScheme />

					<Container sx={{ minHeight: "100%", pb: 15, pt: 12 }} component="main" maxWidth="xl">
						<NavBar />
						<RoutesWithNotFound>
							<Route path="/" element={<Login />} />
							<Route path="/login" element={<Login />} />
							<Route path="*" element={<>NOT FOUND</>} />
							<Route element={<AuthGuard privateValidation={true} />}>
								<Route path="/buyers/*" element={<BuyerRoutes />} />
							</Route>
							<Route element={<AuthGuard privateValidation={true} />}>
								<Route path="/employees/*" element={<Employees />} />
							</Route>
							<Route element={<AuthGuard privateValidation={true} />}>
								<Route path="/games/*" element={<GameRoutes />} />
							</Route>
							<Route element={<AuthGuard privateValidation={true} />}>
								<Route path="/sales/*" element={<SaleRoutes />} />
							</Route>
							<Route element={<AuthGuard privateValidation={true} />}>
								<Route path="/tickets/*" element={<TicketRoutes />} />
							</Route>
							<Route element={<AuthGuard privateValidation={true} />}>
								<Route path="/users/*" element={<UserRoutes />} />
							</Route>
						</RoutesWithNotFound>
					</Container>
				</ColorModeContextProvider>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
