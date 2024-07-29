import { FC, useState } from "react";

import Router from "./router/Router";
import SongContext from "./context/SongContext";

const App: FC = () => {
	const [isActive, setIsActive] = useState<boolean>(false);

	return (
		<SongContext.Provider value={{ isActive, setIsActive }}>
			<Router />
		</SongContext.Provider>
	);
};

export default App;
