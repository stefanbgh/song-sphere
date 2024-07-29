import { Context, FC, useContext, useEffect } from "react";

import AppRoutes from "../../router/Routes";
import {
	CiMusicNote1,
	CiMicrophoneOn,
	CiStar,
	CiViewList,
} from "react-icons/ci";

import "./Home.less";
import SongContext from "../../context/SongContext";
import { ISongContext } from "../../ts/interfaces/ISongContext";
import ProtectedNavLink from "../../hoc/ProtectNavLink";
import { RootState } from "../../ts/types/RootState";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useGetDataQuery } from "../../features/api/home.api";

const Home: FC = (): JSX.Element => {
	useGetDataQuery();
	const { home } = useAppSelector((state: RootState) => state.home);

	const usr_id = localStorage.getItem("usr_id");
	const { setIsActive } = useContext(SongContext as Context<ISongContext>);

	useEffect(() => {
		console.log(home);
	}, [home]);

	const handlePlay = () => {
		if (!usr_id) {
			alert("You need to log in to access this page.");

			return;
		}

		setIsActive(true);
	};

	return (
		<section className="home">
			<div className="popular popular-artists">
				<h2>
					<CiMicrophoneOn size={24} className="star" />
					<span>Popular artists</span>
				</h2>
				<div className="cards">
					<ProtectedNavLink to={`${AppRoutes.ARTISTS}/1`}>
						<div className="card">
							<div className="image">
								<img
									width={175}
									src="https://i.ibb.co/80v3Vgq/ariana-grande.jpg"
									alt="artist"
								/>
								<div className="overlay"></div>
							</div>
							<p>Ariana Grande</p>
						</div>
					</ProtectedNavLink>
					<div className="card">
						<div className="image">
							<img
								width={175}
								src="https://i.ibb.co/cyWsPh5/the-weeknd.jpg"
								alt="artist"
							/>
							<div className="overlay"></div>
						</div>
						<p>The Weeknd</p>
					</div>
					<div className="card">
						<div className="image">
							<img
								width={175}
								src="https://i.ibb.co/Y7dGhR1/beyonce.jpg"
								alt="artist"
							/>
							<div className="overlay"></div>
						</div>
						<p>Beyonce</p>
					</div>
					<div className="card">
						<div className="image">
							<img
								width={175}
								src="https://i.ibb.co/1fcBKQC/bruno-mars.jpg"
								alt="artist"
							/>
							<div className="overlay"></div>
						</div>
						<p>Bruno Mars</p>
					</div>
					<div className="card">
						<div className="image">
							<img
								width={175}
								src="https://i.ibb.co/TtrbmBN/rihanna.jpg"
								alt="artist"
							/>
							<div className="overlay"></div>
						</div>
						<p>Rhiana</p>
					</div>
					<div className="card">
						<div className="image">
							<img
								width={175}
								src="https://i.ibb.co/Y8MynSP/eminem.jpg"
								alt="artist"
							/>
							<div className="overlay"></div>
						</div>
						<p>Eminem</p>
					</div>
					<ProtectedNavLink to={AppRoutes.ARTISTS}>
						Show more
					</ProtectedNavLink>
				</div>
			</div>
			<div className="popular popular-songs">
				<h2>
					<CiStar size={24} className="star" />
					<span>Popular Songs</span>
				</h2>
				<div className="cards">
					<div className="card" onClick={handlePlay}>
						<div>
							<CiMusicNote1 size={50} />
						</div>
						<p>Song 1</p>
					</div>
					<div className="card">
						<div>
							<CiMusicNote1 size={50} />
						</div>
						<p>Song 1</p>
					</div>
					<div className="card">
						<div>
							<CiMusicNote1 size={50} />
						</div>
						<p>Song 1</p>
					</div>
					<div className="card">
						<div>
							<CiMusicNote1 size={50} />
						</div>
						<p>Song 1</p>
					</div>
					<div className="card">
						<div>
							<CiMusicNote1 size={50} />
						</div>
						<p>Song 1</p>
					</div>
					<div className="card">
						<div>
							<CiMusicNote1 size={50} />
						</div>
						<p>Song 1</p>
					</div>
					<ProtectedNavLink to={AppRoutes.SONGS}>
						Show more
					</ProtectedNavLink>
				</div>
			</div>
			<div className="popular popular-playlist">
				<h2>
					<CiViewList size={24} className="star" />
					<span>SongSphere Playlist</span>
				</h2>
				<p>
					- Open the world of music with the <span>SongSphere</span>{" "}
					playlist, as our playlist has everything you need.
				</p>
				<ProtectedNavLink to={AppRoutes.OUR_PLAYLIST}>
					View playlist
				</ProtectedNavLink>
			</div>
		</section>
	);
};

export default Home;
