import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IHome } from "../../ts/interfaces/IHome";
import { homeAPI } from "../api/home.api";

interface InitialState {
	home: IHome | "error" | null;
}

const initialState: InitialState = {
	home: null,
};

export const homeSlice = createSlice({
	name: "home",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addMatcher(
			homeAPI.endpoints.getData.matchFulfilled,
			(state, action: PayloadAction<IHome>) => {
				if (action.payload.err) {
					state.home = "error";

					return;
				}

				state.home = action.payload as IHome;
			}
		);
	},
});
