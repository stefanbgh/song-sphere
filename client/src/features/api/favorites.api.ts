import { IResponse } from "./../../ts/interfaces/IResponse";
import rootAPI from "./root.api";
import { ISong } from "../../ts/models/ISong";

interface IAddFavoriteDTO {
	sng_id: number;
	usr_id: string;
}

export const favoritesAPI = rootAPI.injectEndpoints({
	endpoints: (builder) => ({
		getFavorites: builder.query<IResponse<ISong[]>, string>({
			query: (usr_id) => `/api/v1/favorites/${usr_id}`,
			providesTags: ["favorites"],
		}),
		addFavorite: builder.mutation<{ msg: string }, IAddFavoriteDTO>({
			query: (dto) => ({
				method: "POST",
				url: "/api/v1/favorites",
				body: dto,
			}),
			invalidatesTags: ["favorites"],
		}),
		deleteFavorite: builder.mutation<{ msg: string }, number>({
			query: (sng_id) => ({
				method: "DELETE",
				url: `/api/v1/favorites/${sng_id}`,
			}),
			invalidatesTags: ["favorites"],
		}),
	}),
});

export const {
	useGetFavoritesQuery,
	useAddFavoriteMutation,
	useDeleteFavoriteMutation,
} = favoritesAPI;
