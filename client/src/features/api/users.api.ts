import { IUser } from "../../ts/interfaces/IUser";
import rootAPI from "./root.api";

export const usersAPI = rootAPI.injectEndpoints({
	endpoints: (builder) => ({
		getUsers: builder.query<IUser[], void>({
			query: () => "/users",
			providesTags: ["users"],
		}),
	}),
});

export const { useGetUsersQuery } = usersAPI;
