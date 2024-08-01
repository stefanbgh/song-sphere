import { Context, FC, ReactNode, useContext, useEffect, useState } from "react";

import { Footer, MusicPlayer, PopUp, Sidebar } from "../components";
import { NavLink, useNavigate } from "react-router-dom";
import AppRoutes from "../router/Routes";

import SongContext from "../context/SongContext";
import { ISongContext } from "../ts/interfaces/ISongContext";

import "./Layout.less";
import { RootState } from "../ts/types/RootState";
import { useAppSelector } from "../hooks/useAppSelector";
import { TOGGLE_POPUP } from "../features/slices/popup.slice";
import { useAppDispatch } from "../hooks/useAppDispatch";

interface IProps {
	children: ReactNode;
}

const Layout: FC<IProps> = ({ children }): JSX.Element | null => {
	const usr_id = localStorage.getItem("usr_id");
	const { popup } = useAppSelector((state: RootState) => state.popup);

	const navigate = useNavigate();

	const { isActive } = useContext(SongContext as Context<ISongContext>);

	useEffect(() => {
		if (!usr_id) {
			navigate("/");

			return;
		}

		// eslint-disable-next-line
	}, [usr_id]);

	return (
		<>
			<div className="layout">
				<Sidebar />
				<div>
					<nav>
						<div>
							<ul>
								<NavLink to={AppRoutes.LOGIN}>
									<li>Login</li>
								</NavLink>
								<NavLink to={AppRoutes.REGISTER}>
									<li className="register-btn">Register</li>
								</NavLink>
							</ul>
						</div>
					</nav>
					<section>{children}</section>
					<Footer />
				</div>
			</div>
			{isActive && <MusicPlayer />}
			{popup && <PopUp />}
		</>
	);
};

export default Layout;
