import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypes } from "./../../constants/tagTypes.constant";

const rootAPI = createApi({
	tagTypes,
	reducerPath: "api",
	endpoints: () => ({}),
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_BASE_URL,
		prepareHeaders: (headers) => {
			headers.append("Content-Type", "application/json");
			return headers;
		},
	}),
});

export default rootAPI;
