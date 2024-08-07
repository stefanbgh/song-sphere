import { IUserDTO } from "../../ts/dto/IUserDTO";
import { IUser } from "../../ts/models/IUser";
import { IYourActivity } from "../../ts/interfaces/IYourActivity";

import rootAPI from "./root.api";

export const usersAPI = rootAPI.injectEndpoints({
	endpoints: (builder) => ({
		getUser: builder.query<{ msg: string; user: IUser }, string>({
			query: (usr_id) => `/api/v1/users/${usr_id}`,
			providesTags: ["users"],
		}),
		yourActivity: builder.query<IYourActivity, string>({
			query: (usr_id) => `/api/v1/users/your-activity/${usr_id}`,
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
	useYourActivityQuery,
	useAddUserMutation,
	useUpdateUserMutation,
	useDeleteUserMutation,
} = usersAPI;
