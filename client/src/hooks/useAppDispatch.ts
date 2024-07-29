import { useDispatch } from "react-redux";
import { AppDispatch } from "../ts/types/AppDispatch";

export const useAppDispatch = () => useDispatch<AppDispatch>();
