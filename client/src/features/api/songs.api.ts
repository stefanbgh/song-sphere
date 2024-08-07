import { IResponse } from "./../../ts/interfaces/IResponse";
import { ISong } from "../../ts/models/ISong";
import rootAPI from "./root.api";

export const songsAPI = rootAPI.injectEndpoints({
	endpoints: (builder) => ({
		getSongs: builder.query<IResponse<ISong[]>, void>({
			query: () => "/api/v1/songs",
			providesTags: ["songs"],
		}),
		getSingleSong: builder.query<IResponse<ISong>, string>({
			query: (sng_id) => `/api/v1/songs/${sng_id}`,
			providesTags: ["song"],
		}),
	}),
});

export const { useGetSongsQuery, useGetSingleSongQuery } = songsAPI;
