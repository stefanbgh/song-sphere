import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./less/main.less";
import App from "./App.tsx";

const root = document.getElementById("root") as HTMLDivElement;

createRoot(root).render(
	<StrictMode>
		<App />
	</StrictMode>
);
