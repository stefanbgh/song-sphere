import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
	popup: boolean;
}

const initialState: InitialState = {
	popup: false,
};

export const popupSlice = createSlice({
	name: "popup",
	initialState,
	reducers: {
		TOGGLE_POPUP: (state, action: PayloadAction<boolean>) => {
			state.popup = action.payload;
		},
	},
});

export const { TOGGLE_POPUP } = popupSlice.actions;
