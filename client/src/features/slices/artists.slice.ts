import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IArtist } from "../../ts/models/IArtist";
import { artistsAPI } from "../api/artists.api";

interface IResponse {
	msg: string;
	artists: IArtist[];
}

interface InitialState {
	artists: IArtist[] | null;
	artist: IArtist | null;
}

const initialState: InitialState = {
	artists: null,
	artist: null,
};

export const artistsSlice = createSlice({
	name: "artists",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addMatcher(
			artistsAPI.endpoints.getArtists.matchFulfilled,
			(state, action: PayloadAction<IArtist[]>) => {
				const {} = action.payload;

				state.artists = action.payload;
			}
		);
	},
});
