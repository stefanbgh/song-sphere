import { FC, ReactNode } from "react";

import { Footer, MusicPlayer, PopUp, Sidebar, Navbar } from "../components";

import { RootState } from "../ts/types/RootState";
import { useAppSelector } from "../hooks/useAppSelector";

import "./Layout.less";

interface IProps {
	children: ReactNode;
}

const Layout: FC<IProps> = ({ children }): JSX.Element | null => {
	const { popup } = useAppSelector((state: RootState) => state.popup);

	const { activeSong } = useAppSelector((state: RootState) => state.songs);

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

export default Layout;
