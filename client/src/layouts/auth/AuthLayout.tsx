import { FC, ReactNode, useEffect } from "react";

import { sbAuth } from "../../constants/sbAuth.constant";
import { useNavigate } from "react-router-dom";
import AppRoutes from "../../router/Routes";
import { RootState } from "../../ts/types/RootState";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { STOP_SONG } from "../../features/slices/songs.slice";

interface IProps {
	children: ReactNode;
}

const AuthLayout: FC<IProps> = ({ children }): JSX.Element | null => {
	const token = localStorage.getItem(sbAuth);
	const { activeSong } = useAppSelector((state: RootState) => state.songs);

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (activeSong) {
			dispatch(STOP_SONG());
		}
	}, []);

	useEffect(() => {
		if (token) {
			navigate(AppRoutes.HOME);
		}

		// eslint-disable-next-line
	}, [token]);

	if (!token) return <>{children}</>;

	return null;
};

export default AuthLayout;
