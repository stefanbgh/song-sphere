import { Context, FC, ReactNode, useContext } from "react";

import { Footer, MusicPlayer, PopUp, Sidebar, Navbar } from "../components";

import SongContext from "../context/SongContext";
import { ISongContext } from "../ts/interfaces/ISongContext";

import { RootState } from "../ts/types/RootState";
import { useAppSelector } from "../hooks/useAppSelector";

import "./Layout.less";

interface IProps {
	children: ReactNode;
}

const Layout: FC<IProps> = ({ children }): JSX.Element | null => {
	const { popup } = useAppSelector((state: RootState) => state.popup);

	const { isActive } = useContext(SongContext as Context<ISongContext>);

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
			{isActive && <MusicPlayer />}
			{popup && <PopUp />}
		</>
	);
};

export default Layout;
