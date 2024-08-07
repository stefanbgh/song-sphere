import { IResponse } from "./../../ts/interfaces/IResponse";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ISong } from "../../ts/models/ISong";
import { songsAPI } from "../api/songs.api";

interface InitialState {
	songs: ISong[] | null;
	song: ISong | null;
}

const initialState: InitialState = {
	songs: null,
	song: null,
};

export const songsSlice = createSlice({
	name: "songs",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addMatcher(
			songsAPI.endpoints.getSongs.matchFulfilled,
			(state, action: PayloadAction<IResponse<ISong[]>>) => {
				state.songs = action.payload.data;
			}
		);
	},
});
