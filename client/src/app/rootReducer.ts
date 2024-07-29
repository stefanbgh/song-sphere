import { combineReducers } from "@reduxjs/toolkit";

import rootAPI from "../features/api/root.api";
import { usersSlice } from "../features/slices/users.slice";
import { homeSlice } from "../features/slices/home.slice";

const rootReducer = combineReducers({
	[rootAPI.reducerPath]: rootAPI.reducer,
	users: usersSlice.reducer,
	home: homeSlice.reducer,
});

export default rootReducer;
