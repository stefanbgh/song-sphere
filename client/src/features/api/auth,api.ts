import { ILoginDTO } from "../../ts/dto/ILoginDTO";
import { IUserDTO } from "../../ts/dto/IUserDTO";
import { IResponse } from "../../ts/interfaces/IResponse";
import { Provider } from "../../ts/types/Provider";

import rootAPI from "./root.api";

export const authAPI = rootAPI.injectEndpoints({
	endpoints: (builder) => ({
		postRegister: builder.mutation<IResponse<[] | string>, IUserDTO>({
			query: (dto) => ({
				method: "POST",
				url: "/api/v1/auth/register",
				body: dto,
			}),
			invalidatesTags: ["auth"],
		}),
		postLogin: builder.mutation<IResponse<[] | string>, ILoginDTO>({
			query: (dto) => ({
				method: "POST",
				url: "/api/v1/auth/login",
				body: dto,
			}),
			invalidatesTags: ["auth"],
		}),
		postGoogleLogin: builder.mutation<
			IResponse<[] | string>,
			{ provider: Provider }
		>({
			query: (dto) => ({
				method: "POST",
				url: "/api/v1/auth/google-login",
				body: dto,
			}),
			invalidatesTags: ["auth"],
		}),
		postForgotPassword: builder.mutation<
			IResponse<[] | string>,
			{ usr_email: string }
		>({
			query: (dto) => ({
				method: "POST",
				url: "/api/v1/auth/forgot-password",
				body: dto,
			}),
			invalidatesTags: ["auth"],
		}),
		postResetPassword: builder.mutation<
			IResponse<[] | string>,
			{ usr_password: string }
		>({
			query: (dto) => ({
				method: "POST",
				url: "/api/v1/auth/reset-password",
				body: dto,
			}),
			invalidatesTags: ["auth"],
		}),
		postLogout: builder.mutation<
			IResponse<[] | string>,
			{ usr_id: number }
		>({
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
