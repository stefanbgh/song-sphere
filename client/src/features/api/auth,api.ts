import { ILoginDTO } from "../../ts/dto/ILoginDTO";
import { IUserDTO } from "../../ts/dto/IUserDTO";
import { Provider } from "../../ts/types/Provider";

import rootAPI from "./root.api";

interface IResponse {
	msg: string;
	data: [] | string;
}

export const authAPI = rootAPI.injectEndpoints({
	endpoints: (builder) => ({
		postRegister: builder.mutation<IResponse, IUserDTO>({
			query: (dto) => ({
				method: "POST",
				url: "/api/v1/auth/register",
				body: dto,
			}),
			invalidatesTags: ["auth"],
		}),
		postLogin: builder.mutation<IResponse, ILoginDTO>({
			query: (dto) => ({
				method: "POST",
				url: "/api/v1/auth/login",
				body: dto,
			}),
			invalidatesTags: ["auth"],
		}),
		postGoogleLogin: builder.mutation<IResponse, { provider: Provider }>({
			query: (dto) => ({
				method: "POST",
				url: "/api/v1/auth/google-login",
				body: dto,
			}),
			invalidatesTags: ["auth"],
		}),
		postForgotPassword: builder.mutation<IResponse, { usr_email: string }>({
			query: (dto) => ({
				method: "POST",
				url: "/api/v1/auth/forgot-password",
				body: dto,
			}),
			invalidatesTags: ["auth"],
		}),
		postResetPassword: builder.mutation<
			IResponse,
			{ usr_password: string }
		>({
			query: (dto) => ({
				method: "POST",
				url: "/api/v1/auth/reset-password",
				body: dto,
			}),
			invalidatesTags: ["auth"],
		}),
		postLogout: builder.mutation<IResponse, { usr_id: number }>({
			query: (dto) => ({
				method: "POST",
				url: "/api/v1/auth/logout",
				body: dto,
			}),
			invalidatesTags: ["auth"],
		}),
	}),
});

export const {
	usePostRegisterMutation,
	usePostLoginMutation,
	usePostGoogleLoginMutation,
	usePostForgotPasswordMutation,
	usePostResetPasswordMutation,
	usePostLogoutMutation,
} = authAPI;
