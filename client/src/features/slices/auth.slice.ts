import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
	status: "idle" | "loggedin" | "loggedout";
}

const initialState: InitialState = {
	status: "idle",
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		LOGIN: () => {
			console.log("login");
		},
		REGISTER: () => {
			console.log("register");
		},
		LOGOUT: () => {
			console.log("logout");
		},
	},
	extraReducers: () => {},
});

export const { LOGIN, REGISTER, LOGOUT } = authSlice.actions;
