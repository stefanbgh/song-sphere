import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IArtist } from "../../ts/models/IArtist";
import { artistsAPI } from "../api/artists.api";
import { IResponse } from "../../ts/interfaces/IResponse";

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
			(state, action: PayloadAction<IResponse<IArtist[]>>) => {
				state.artists = action.payload.data;
			}
		);
	},
});
