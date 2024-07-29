import { Context, FC, ReactNode, useContext, useEffect } from "react";

import { Footer, MusicPlayer, Sidebar } from "../components";
import { NavLink, useNavigate } from "react-router-dom";
import AppRoutes from "../router/Routes";

import SongContext from "../context/SongContext";
import { ISongContext } from "../ts/interfaces/ISongContext";

import "./Layout.less";

interface IProps {
	children: ReactNode;
}

const Layout: FC<IProps> = ({ children }): JSX.Element | null => {
	const usr_id = localStorage.getItem("usr_id");

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
		</>
	);
};

export default Layout;
