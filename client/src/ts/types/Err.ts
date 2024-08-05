import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export type Err = FetchBaseQueryError & {
	data: { err: string };
};
