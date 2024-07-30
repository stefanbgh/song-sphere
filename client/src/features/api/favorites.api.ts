import { IFavorite } from "./../../ts/interfaces/IFavorite";
import rootAPI from "./root.api";

interface IAddFavoriteDTO {
	sng_id: number;
	usr_id: number;
}

export const favoritesAPI = rootAPI.injectEndpoints({
	endpoints: (builder) => ({
		getFavorites: builder.query<IFavorite[], void>({
			query: () => "/api/v1/favorites",
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
			query: (fav_id) => ({
				method: "DELETE",
				url: `/api/v1/favorites/${fav_id}`,
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
