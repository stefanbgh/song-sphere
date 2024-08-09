import { IResponse } from "./../../ts/interfaces/IResponse";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { playlistsAPI } from "./../api/playlists.api";
import { ISong } from "../../ts/models/ISong";

interface InitialState {
	playlist: ISong[] | null;
	ourPlaylist: ISong[] | null;
}

const initialState: InitialState = {
	playlist: null,
	ourPlaylist: null,
};

export const playlistsSlice = createSlice({
	name: "playlists",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addMatcher(
			playlistsAPI.endpoints.getPlaylist.matchFulfilled,
			(state, action: PayloadAction<IResponse<ISong[]>>) => {
				state.playlist = action.payload.data;
			}
		);
		builder.addMatcher(
			playlistsAPI.endpoints.getOurPlaylist.matchFulfilled,
			(state, action: PayloadAction<IResponse<ISong[]>>) => {
				state.ourPlaylist = action.payload.data;
			}
		);
	},
});
