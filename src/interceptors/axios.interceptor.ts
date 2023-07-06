import store from "@/redux/store";
import axios from "axios";

export const AxiosInterceptor = () => {
	axios.interceptors.request.use((request) => {

		request.auth = { username: store.getState().user.userName, password: store.getState().user.password };
		return request;
	});
};
