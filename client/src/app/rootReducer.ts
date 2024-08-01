import { combineReducers } from "@reduxjs/toolkit";

import rootAPI from "../features/api/root.api";

import { artistsSlice } from "../features/slices/artists.slice";
import { authSlice } from "../features/slices/auth.slice";
import { favoritesSlice } from "../features/slices/favorites.slice";
import { homeSlice } from "../features/slices/home.slice";
import { playlistsSlice } from "../features/slices/playlists.slice";
import { songsSlice } from "../features/slices/songs.slice";
import { usersSlice } from "../features/slices/users.slice";
import { popupSlice } from "../features/slices/popup.slice";

const rootReducer = combineReducers({
	[rootAPI.reducerPath]: rootAPI.reducer,
	artists: artistsSlice.reducer,
	auth: authSlice.reducer,
	favorites: favoritesSlice.reducer,
	home: homeSlice.reducer,
	playlists: playlistsSlice.reducer,
	popup: popupSlice.reducer,
	songs: songsSlice.reducer,
	users: usersSlice.reducer,
});

export default rootReducer;
