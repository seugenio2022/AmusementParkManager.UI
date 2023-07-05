import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { AppStore } from "../redux/store";
import { PrivateRoutes, PublicRoutes } from "@/models";

interface Props {
	privateValidation: boolean;
}

const PrivateValidationFragment = <Outlet />;
const PublicValidationFragment = <Navigate replace to={PrivateRoutes.REPORTS} />;

export const AuthGuard = ({ privateValidation }: Props) => {
	debugger;
	const userState = useSelector((store: AppStore) => store.user);
	return userState.userName ? (
		privateValidation ? (
			PrivateValidationFragment
		) : (
			PublicValidationFragment
		)
	) : (
		<Navigate replace to={PublicRoutes.LOGIN} />
	);
};

export default AuthGuard;
