import { IUserDTO } from "../../ts/dto/IUserDTO";
import rootAPI from "./root.api";

interface ILoginDTO {
	email: string;
	password: string;
}

export const authAPI = rootAPI.injectEndpoints({
	endpoints: (builder) => ({
		postRegister: builder.mutation<{ msg: string; data: [] }, IUserDTO>({
			query: (dto) => ({
				method: "POST",
				url: "/api/v1/register",
				body: dto,
			}),
			invalidatesTags: ["auth"],
		}),
		postLogin: builder.mutation<{ msg: string; data: [] }, ILoginDTO>({
			query: (dto) => ({
				method: "POST",
				url: "/api/v1/login",
				body: dto,
			}),
			invalidatesTags: ["auth"],
		}),
		postLogout: builder.mutation<{ msg: string }, void>({
			query: (dto) => ({
				method: "POST",
				url: "/api/v1/logout",
				body: dto,
			}),
			invalidatesTags: ["auth"],
		}),
	}),
});

export const {
	usePostRegisterMutation,
	usePostLoginMutation,
	usePostLogoutMutation,
} = authAPI;
