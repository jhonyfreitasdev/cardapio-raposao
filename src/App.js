import { AppRoutes } from "./routes/route";
import { SelectedPageProvider } from "./context/selected-bar";
import "./assets/styles/reset.sass";

export const App = () => {
	return (
		<SelectedPageProvider>
			<AppRoutes />
		</SelectedPageProvider>
	);
};