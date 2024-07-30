import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFavorite } from "../../ts/interfaces/IFavorite";
import { favoritesAPI } from "../api/favorites.api";

interface InitialState {
	favorites: IFavorite[] | null;
}

const initialState: InitialState = {
	favorites: null,
};

export const favoritesSlice = createSlice({
	name: "favorites",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addMatcher(
			favoritesAPI.endpoints.getFavorites.matchFulfilled,
			(state, action: PayloadAction<IFavorite[]>) => {
				state.favorites = action.payload;
			}
		);
	},
});
