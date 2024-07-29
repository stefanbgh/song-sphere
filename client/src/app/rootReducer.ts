import { combineReducers } from "@reduxjs/toolkit";

import rootAPI from "../features/api/root.api";
import { usersSlice } from "../features/slices/users.slice";

const rootReducer = combineReducers({
	[rootAPI.reducerPath]: rootAPI.reducer,
	users: usersSlice.reducer,
});

export default rootReducer;
