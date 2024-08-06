import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../ts/interfaces/IUser";

interface InitialState {
	user: IUser | null;
}

const initialState: InitialState = {
	user: null,
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
		REMOVE_USER_INFO: (state) => {
			state.user = null;
		},
	},
});

export const { CREATE_USER_INFO, REMOVE_USER_INFO } = usersSlice.actions;
