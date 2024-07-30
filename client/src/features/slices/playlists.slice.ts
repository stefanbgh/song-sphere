import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { playlistsAPI } from "./../api/playlists.api";
import { IPlaylist } from "./../../ts/interfaces/IPlaylist";

interface InitialState {
	playlist: IPlaylist[] | null;
	ourPlaylist: IPlaylist[] | null;
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
			(state, action: PayloadAction<IPlaylist[]>) => {
				state.playlist = action.payload;
			}
		);
		builder.addMatcher(
			playlistsAPI.endpoints.getOurPlaylist.matchFulfilled,
			(state, action: PayloadAction<IPlaylist[]>) => {
				state.ourPlaylist = action.payload;
			}
		);
	},
});
