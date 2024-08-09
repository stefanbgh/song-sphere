import { IResponse } from "./../../ts/interfaces/IResponse";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { playlistsAPI } from "./../api/playlists.api";
import { ISong } from "../../ts/models/ISong";

interface InitialState {
	playlist: ISong[] | null;
	ourPlaylist: ISong[] | null;
	exists: boolean;
}

const initialState: InitialState = {
	playlist: null,
	ourPlaylist: null,
	exists: false,
};

export const playlistsSlice = createSlice({
	name: "playlists",
	initialState,
	reducers: {
		CHECK_PLAYLIST_SONG: (state, action: PayloadAction<number>) => {
			const checkSong = [...(state.playlist as ISong[])].some(
				(favorite: ISong) => favorite.sng_id === action.payload
			);

			state.exists = checkSong;
		},
	},
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

export const { CHECK_PLAYLIST_SONG } = playlistsSlice.actions;
