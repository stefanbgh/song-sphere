import { configureStore } from "@reduxjs/toolkit";

import rootAPI from "../features/api/root.api";
import rootReducer from "./rootReducer";

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(rootAPI.middleware);
	},
});
