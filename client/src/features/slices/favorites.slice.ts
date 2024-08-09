import { IResponse } from "./../../ts/interfaces/IResponse";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { favoritesAPI } from "../api/favorites.api";
import { ISong } from "../../ts/models/ISong";

interface InitialState {
	favorites: ISong[] | null;
	exists: boolean;
}

const initialState: InitialState = {
	favorites: null,
	exists: false,
};

export const favoritesSlice = createSlice({
	name: "favorites",
	initialState,
	reducers: {
		CHECK_FAVORITE_SONG: (state, action: PayloadAction<number>) => {
			const checkSong = [...state.favorites!].some(
				(favorite: ISong) => favorite.sng_id === action.payload
			);

			state.exists = checkSong;
		},
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			favoritesAPI.endpoints.getFavorites.matchFulfilled,
			(state, action: PayloadAction<IResponse<ISong[]>>) => {
				state.favorites = action.payload.data;
			}
		);
	},
});

export const { CHECK_FAVORITE_SONG } = favoritesSlice.actions;
