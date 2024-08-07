import { IResponse } from "../../ts/interfaces/IResponse";
import { IArtist } from "../../ts/models/IArtist";
import rootAPI from "./root.api";

export const artistsAPI = rootAPI.injectEndpoints({
	endpoints: (builder) => ({
		getArtists: builder.query<IResponse<IArtist[]>, void>({
			query: () => "/api/v1/artists",
			providesTags: ["artists"],
		}),
		getSingleArtist: builder.query<IResponse<IArtist>, void>({
			query: (art_id) => `/api/v1/artists/${art_id}`,
			providesTags: ["artist"],
		}),
	}),
});

export const { useGetArtistsQuery, useGetSingleArtistQuery } = artistsAPI;
