import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { PrivateRoutes, PublicRoutes, Roles } from "../models";
import { AppStore } from "../redux/store";

interface Props {
	rol: Roles;
}

function RoleGuard({ rol }: Props) {
	const userState = useSelector((store: AppStore) => store.user);
	return userState.role === rol ? <Outlet /> : <Navigate replace to={PrivateRoutes.REPORTS} />;
}
export default RoleGuard;
