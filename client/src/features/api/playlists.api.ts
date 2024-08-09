import { IResponse } from "./../../ts/interfaces/IResponse";
import { ISong } from "../../ts/models/ISong";
import { IAddPlaylistDTO } from "../../ts/dto/IAddPlaylistDTO";
import rootAPI from "./root.api";

interface IDeletePlaylistParams {
	sng_id: number;
	usr_id: string;
}

export const playlistsAPI = rootAPI.injectEndpoints({
	endpoints: (builder) => ({
		getPlaylist: builder.query<IResponse<ISong[]>, string>({
			query: (usr_id) => `/api/v1/playlists/my-playlist/${usr_id}`,
			providesTags: ["playlists"],
		}),
		getOurPlaylist: builder.query<IResponse<ISong[]>, void>({
			query: () => "/api/v1/playlists/our-playlist",
			providesTags: ["our-playlist"],
		}),
		addPlaylist: builder.mutation<{ msg: string }, IAddPlaylistDTO>({
			query: (dto) => ({
				method: "POST",
				url: "/api/v1/playlists/my-playlist",
				body: dto,
			}),
			invalidatesTags: ["playlists"],
		}),
		deletePlaylist: builder.mutation<
			{ msg: string },
			IDeletePlaylistParams
		>({
			query: ({ sng_id, usr_id }) => ({
				method: "DELETE",
				url: `/api/v1/playlists/my-playlist`,
				params: { sng_id, usr_id },
			}),
			invalidatesTags: ["playlists"],
		}),
	}),
});

export const {
	useGetPlaylistQuery,
	useGetOurPlaylistQuery,
	useAddPlaylistMutation,
	useDeletePlaylistMutation,
} = playlistsAPI;
