import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../ts/interfaces/IUser";
import { usersAPI } from "../api/users.api";

interface InitialState {
	users: IUser[] | null;
	user: IUser | null;
}

const initialState: InitialState = {
	users: null,
	user: null,
};

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		SAY_HI: () => {
			console.log("Hi!");
		},
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			usersAPI.endpoints.getUsers.matchFulfilled,
			(state, action: PayloadAction<IUser[]>) => {
				state.users = action.payload;
			}
		);
	},
});

export const { SAY_HI } = usersSlice.actions;
