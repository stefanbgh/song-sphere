import { IArtist } from "./../../ts/models/IArtist";
import { IResponse } from "./../../ts/interfaces/IResponse";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { artistsAPI } from "../api/artists.api";
import { ISong } from "../../ts/models/ISong";

interface InitialState {
	artists: IArtist[] | null;
	artist: IArtist | null;
	popular_songs: ISong[] | null;
}

const initialState: InitialState = {
	artists: null,
	artist: null,
	popular_songs: null,
};

export const artistsSlice = createSlice({
	name: "artists",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addMatcher(
			artistsAPI.endpoints.getArtists.matchFulfilled,
			(state, action: PayloadAction<IResponse<IArtist[]>>) => {
				state.artists = action.payload.data;
			}
		);
		builder.addMatcher(
			artistsAPI.endpoints.getSingleArtist.matchFulfilled,
			(
				state,
				action: PayloadAction<
					IResponse<{ artist: IArtist; popular_songs: ISong[] }>
				>
			) => {
				const {
					data: { artist, popular_songs },
				} = action.payload;

				state.artist = artist;
				state.popular_songs = popular_songs;
			}
		);
	},
});
