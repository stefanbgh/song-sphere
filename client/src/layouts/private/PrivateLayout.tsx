import { FC, ReactNode, useEffect } from "react";

import { Footer, MusicPlayer, PopUp, Sidebar, Navbar } from "../../components";

import { RootState } from "../../ts/types/RootState";
import { useAppSelector } from "../../hooks/useAppSelector";
import { sbAuth } from "../../constants/sbAuth.constant";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { TOGGLE_POPUP } from "../../features/slices/popup.slice";
import { useLocation, useNavigate } from "react-router-dom";
import AppRoutes from "../../router/Routes";

import "./PrivateLayout.less";

interface IProps {
	children: ReactNode;
}

const PrivateLayout: FC<IProps> = ({ children }): JSX.Element | null => {
	const token = localStorage.getItem(sbAuth);
	const { popup } = useAppSelector((state: RootState) => state.popup);

	const { activeSong } = useAppSelector((state: RootState) => state.songs);

	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (!token && location.pathname !== AppRoutes.HOME) {
			navigate(AppRoutes.HOME);
			dispatch(TOGGLE_POPUP(true));

			return;
		}
		//eslint-disable-next-line
	}, [token]);

	return (
		<>
			<div className="layout">
				<Sidebar />
				<div>
					<Navbar />
					<section>{children}</section>
					<Footer />
				</div>
			</div>
			{activeSong && <MusicPlayer />}
			{popup && <PopUp />}
		</>
	);
};

export default PrivateLayout;
