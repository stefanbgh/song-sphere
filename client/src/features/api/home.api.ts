import { IHome } from "../../ts/interfaces/IHome";
import rootAPI from "./root.api";

export const homeAPI = rootAPI.injectEndpoints({
	endpoints: (builder) => ({
		getData: builder.query<IHome, void>({
			query: () => "/api/v1",
			providesTags: ["home"],
		}),
	}),
});

export const { useGetDataQuery } = homeAPI;
