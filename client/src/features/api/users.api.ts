import { IUserDTO } from "../../ts/dto/IUserDTO";
import { IUser } from "../../ts/interfaces/IUser";
import rootAPI from "./root.api";

export const usersAPI = rootAPI.injectEndpoints({
	endpoints: (builder) => ({
		getUser: builder.query<{ msg: string; user: IUser }, void>({
			query: () => "/api/v1/users",
			providesTags: ["users"],
		}),
		addUser: builder.mutation<{ msg: string }, IUserDTO>({
			query: (dto) => ({
				method: "POST",
				url: "/api/v1/users",
				body: dto,
			}),
			invalidatesTags: ["users"],
		}),
		updateUser: builder.mutation<{ msg: string }, IUser>({
			query: (dto) => ({
				method: "PUT",
				url: `/api/v1/users/${dto.usr_id}`,
				body: dto,
			}),
			invalidatesTags: ["users"],
		}),
		deleteUser: builder.mutation<{ msg: string }, number>({
			query: (usr_id) => ({
				method: "DELETE",
				url: `/api/v1/users/${usr_id}`,
			}),
			invalidatesTags: ["users"],
		}),
	}),
});

export const {
	useGetUserQuery,
	useAddUserMutation,
	useUpdateUserMutation,
	useDeleteUserMutation,
} = usersAPI;
