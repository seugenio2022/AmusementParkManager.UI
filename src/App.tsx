import Container from "@mui/material/Container";
import { NavBar } from "./components/NavBar";
import { ColorModeContextProvider } from "./contexts";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Tickets } from "./pages/Tickets";
import { Users } from "./pages/Users";
import { Sales } from "./pages/Sales";
import { Games } from "./pages/Games";
import { Employees } from "./pages/Employees";
import { Buyers } from "./pages/Buyers";

function App() {
	const isLogged = true;
	return (
		<BrowserRouter>
			<ColorModeContextProvider>
				<CssBaseline enableColorScheme />
				<NavBar />
				<Container component="main" maxWidth="lg">
					<Routes>
						<Route path="/login" element={<Login />} />
						<Route path="/buyers" element={<Buyers />} />
						<Route path="/employees" element={<Employees />} />
						<Route path="/games" element={<Games />} />
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
