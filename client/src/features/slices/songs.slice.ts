import { IResponse } from "./../../ts/interfaces/IResponse";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ISong } from "../../ts/models/ISong";
import { songsAPI } from "../api/songs.api";

interface InitialState {
	songs: ISong[] | null;
	song: ISong | null;
	activeSong: ISong | null;
}

const initialState: InitialState = {
	songs: null,
	song: null,
	activeSong: null,
};

export const songsSlice = createSlice({
	name: "songs",
	initialState,
	reducers: {
		PLAY_SONG: (state, action: PayloadAction<ISong>) => {
			state.activeSong = action.payload;
		},
		RANDOM_SONG: (state) => {
			const filteredSongs = [...state.songs!].filter(
				(song) => song.sng_id !== state.activeSong!.sng_id
			);

			const randomIndex = Math.floor(
				Math.random() * filteredSongs.length
			);

			state.activeSong = filteredSongs[randomIndex];
		},
		STOP_SONG: (state) => {
			state.activeSong = null;
		},
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			songsAPI.endpoints.getSongs.matchFulfilled,
			(state, action: PayloadAction<IResponse<ISong[]>>) => {
				state.songs = action.payload.data;
			}
		);
		builder.addMatcher(
			songsAPI.endpoints.getSingleSong.matchFulfilled,
			(state, action: PayloadAction<IResponse<ISong>>) => {
				state.song = action.payload.data;
			}
		);
	},
});

export const { PLAY_SONG, RANDOM_SONG, STOP_SONG } = songsSlice.actions;
