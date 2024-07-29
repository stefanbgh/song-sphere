import { ISong } from "../../ts/interfaces/ISong";
import rootAPI from "./root.api";

export const songsAPI = rootAPI.injectEndpoints({
	endpoints: (builder) => ({
		getSongs: builder.query<ISong[], void>({
			query: () => "/api/v1/songs",
			providesTags: ["songs"],
		}),
		getSingleSong: builder.query<ISong, void>({
			query: (sng_id) => `/api/v1/songs/${sng_id}`,
			providesTags: ["song"],
		}),
	}),
});

export const { useGetSongsQuery, useGetSingleSongQuery } = songsAPI;
