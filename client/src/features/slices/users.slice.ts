import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../ts/models/IUser";
import { usersAPI } from "../api/users.api";
import { IYourActivity } from "../../ts/interfaces/IYourActivity";

interface InitialState {
	user: IUser | null;
	yourActivity: IYourActivity | null;
}

const initialState: InitialState = {
	user: null,
	yourActivity: null,
};

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		CREATE_USER_INFO: (state, action: PayloadAction<IUser>) => {
			const { usr_id, usr_fullname, usr_email, usr_password } =
				action.payload;

			state.user = {
				usr_id,
				usr_fullname,
				usr_email,
				usr_password,
			};
		},
		UPDATE_USER_INFO: (
			state,
			action: PayloadAction<{ usr_fullname: string; usr_email: string }>
		) => {
			const { usr_fullname, usr_email } = action.payload;

			state.user = {
				...(state.user as IUser),
				usr_fullname,
				usr_email,
			};
		},
		REMOVE_USER_INFO: (state) => {
			state.user = null;
		},
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			usersAPI.endpoints.yourActivity.matchFulfilled,
			(state, action: PayloadAction<IYourActivity>) => {
				state.yourActivity = action.payload;
			}
		);
	},
});

export const { CREATE_USER_INFO, UPDATE_USER_INFO, REMOVE_USER_INFO } =
	usersSlice.actions;
