import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ReactDOM from "react-dom/client";
import "./i18n";
import "./index.css";
import { AxiosInterceptor } from "./interceptors/axios.interceptor.ts";
import App from "./App.tsx";

AxiosInterceptor();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
