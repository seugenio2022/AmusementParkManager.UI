import { APMButton } from "@/components/Buttons";
import { PublicRoutes } from "@/models";
import { UserKey, resetUser } from "@/redux/states/user";
import { clearLocalStorage } from "@/utilities";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Logout() {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const logOut = () => {
		clearLocalStorage(UserKey);
		dispatch(resetUser());
		navigate(PublicRoutes.LOGIN, { replace: true });
	};
	return (
		<APMButton size="small" onClick={logOut} variant="outlined">
			{t("logout")}
		</APMButton>
	);
}
export default Logout;
