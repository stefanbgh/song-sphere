import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../ts/types/RootState";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
