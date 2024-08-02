import { FC, useState } from "react";

import Router from "./router/Router";
import SongContext from "./context/SongContext";
import { ErrorBoundary } from "./components";

const App: FC = () => {
	const [isActive, setIsActive] = useState<boolean>(false);

	return (
		<SongContext.Provider value={{ isActive, setIsActive }}>
			<ErrorBoundary>
				<Router />
			</ErrorBoundary>
		</SongContext.Provider>
	);
};

export default App;
