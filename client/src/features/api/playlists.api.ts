import { IPlaylist } from "../../ts/interfaces/IPlaylist";
import rootAPI from "./root.api";

interface IAddPlaylistDTO {
	sng_id: number;
	usr_id: number;
}

export const playlistsAPI = rootAPI.injectEndpoints({
	endpoints: (builder) => ({
		getPlaylist: builder.query<IPlaylist[], void>({
			query: () => "/api/v1/playlists/my-playlist",
			providesTags: ["playlists"],
		}),
		getOurPlaylist: builder.query<IPlaylist[], void>({
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
		deletePlaylist: builder.mutation<{ msg: string }, number>({
			query: (ply_id) => ({
				method: "DELETE",
				url: `/api/v1/playlists/my-playlist/${ply_id}`,
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