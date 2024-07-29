import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ISong } from "../../ts/interfaces/ISong";
import { songsAPI } from "../api/songs.api";

interface InitialState {
	songs: ISong[] | null;
	song: ISong | null;
}

const initialState: InitialState = {
	songs: null,
	song: null,
};

export const usersSlice = createSlice({
	name: "songs",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addMatcher(
			songsAPI.endpoints.getSongs.matchFulfilled,
			(state, action: PayloadAction<ISong[]>) => {
				state.songs = action.payload;
			}
		);
	},
});
