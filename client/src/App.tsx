import { FC } from "react";

import Router from "./router/Router";
import { ErrorBoundary } from "./components";

const App: FC = () => {
	return (
		<ErrorBoundary>
			<Router />
		</ErrorBoundary>
	);
};

export default App;
