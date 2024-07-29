import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";

import "./less/main.less";

const root = document.getElementById("root") as HTMLDivElement;

createRoot(root).render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>
);
