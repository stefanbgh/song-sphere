import { IResponse } from "./../../ts/interfaces/IResponse";
import { ISong } from "../../ts/models/ISong";
import { IAddFavoriteDTO } from "../../ts/dto/IAddFavoriteDTO";
import rootAPI from "./root.api";

interface IDeleteFavoriteParams {
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
		deleteFavorite: builder.mutation<
			{ msg: string },
			IDeleteFavoriteParams
		>({
			query: ({ sng_id, usr_id }) => ({
				method: "DELETE",
				url: `/api/v1/favorites`,
				params: { sng_id, usr_id },
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
