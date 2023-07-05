import store, { AppStore } from "@/redux/store";
import axios from "axios";
import { useSelector } from "react-redux";

export const AxiosInterceptor = () => {
	axios.interceptors.request.use((request) => {

		request.auth = { username: store.getState().user.userName, password: store.getState().user.password };
		return request;
	});
};
