import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import { Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "@/models";
import { clearLocalStorage } from "@/utilities";
import { UserKey, createUser, resetUser } from "@/redux/states/user";
import { loginService } from "./services";
import { SnackAlert } from "@/components/SnackAlert";
import { useSnackAlert } from "@/hooks";

export default function Login() {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const snackAlert = useSnackAlert();
	React.useEffect(() => {
		clearLocalStorage(UserKey);
		dispatch(resetUser());
		navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
	}, []);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);

		loginService
			.login(data.get("userName")?.toString() ?? "", data.get("password")?.toString() ?? "")
			.then((res) => {
				dispatch(createUser({ ...res.data }));
				navigate(`/${PrivateRoutes.REPORTS}`, { replace: true });
			})
			.catch((err) => {
				snackAlert.showMessage(t("userNotFound"));
			});
	};

	return (
		<>
			<Container maxWidth="xs">
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						{t("login")}
					</Typography>
					<Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
						<TextField margin="normal" required fullWidth label={t("users.userName")} name="userName" autoFocus />
						<TextField
							margin="normal"
							required
							fullWidth
							name="password"
							label={t("users.password")}
							type="password"
							id="password"
						/>

						<Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
							{t("login")}
						</Button>
					</Box>
				</Box>
			</Container>
			<SnackAlert
				type="error"
				isOpen={snackAlert.open}
				message={snackAlert.message}
				onClose={snackAlert.closeSnackAlert}
			/>
		</>
	);
}
