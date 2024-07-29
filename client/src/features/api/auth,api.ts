import rootAPI from "./root.api";

export const authAPI = rootAPI.injectEndpoints({
	endpoints: (builder) => ({
		postRegister: builder.mutation<{ id: string }, { id: string }>({
			query: (dto) => ({
				method: "POST",
				url: "/api/v1/register",
				body: dto,
			}),
			invalidatesTags: ["auth"],
		}),
		postLogin: builder.mutation<{ id: string }, { id: string }>({
			query: (dto) => ({
				method: "POST",
				url: "/api/v1/login",
				body: dto,
			}),
			invalidatesTags: ["auth"],
		}),
		getLogout: builder.query<{ msg: string }, void>({
			query: (usr_id) => `/api/v1/logout?usr_id=${usr_id}`,
			providesTags: ["auth"],
		}),
	}),
});

export const {
	usePostRegisterMutation,
	usePostLoginMutation,
	useGetLogoutQuery,
} = authAPI;
