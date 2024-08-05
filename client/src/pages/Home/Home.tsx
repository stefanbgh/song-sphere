import { Context, FC, useContext } from "react";

import AppRoutes from "../../router/Routes";
import {
	CiMusicNote1,
	CiMicrophoneOn,
	CiStar,
	CiViewList,
} from "react-icons/ci";

import SongContext from "../../context/SongContext";
import { ISongContext } from "../../ts/interfaces/ISongContext";
import ProtectedNavLink from "../../hoc/ProtectNavLink";
import { RootState } from "../../ts/types/RootState";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useGetDataQuery } from "../../features/api/home.api";

import { Spinner } from "../../components";
import { IArtist } from "../../ts/interfaces/IArtist";
import { ISong } from "../../ts/interfaces/ISong";
import { sbAuth } from "../../constants/sbAuth.constant";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { TOGGLE_POPUP } from "../../features/slices/popup.slice";

import "./Home.less";

const Home: FC = (): JSX.Element => {
	useGetDataQuery();
	const { home } = useAppSelector((state: RootState) => state.home);
	const dispatch = useAppDispatch();

	const auth = localStorage.getItem(sbAuth);
	const { setIsActive } = useContext(SongContext as Context<ISongContext>);

	const handlePlay = () => {
		if (!auth) {
			dispatch(TOGGLE_POPUP(true));

			return;
		}

		setIsActive(true);
	};

	return (
		<>
			{home ? (
				<section className="home">
					<div className="popular popular-artists">
						<h2>
							<CiMicrophoneOn size={24} className="star" />
							<span>Popular artists</span>
						</h2>
						<div className="cards">
							{home.popular_artists.map((artist: IArtist) => {
								const { art_id, art_image, art_name } = artist;

								return (
									<ProtectedNavLink
										to={`${AppRoutes.ARTISTS}/${art_id}`}
										key={art_id}
									>
										<div className="card">
											<div className="image">
												<img
													width={175}
													src={art_image}
													alt="artist"
												/>
												<div className="overlay"></div>
											</div>
											<p>{art_name}</p>
										</div>
									</ProtectedNavLink>
								);
							})}
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
							{home.popular_songs.map((song: ISong) => {
								const { sng_id, sng_title } = song;

								return (
									<div
										className="card"
										onClick={handlePlay}
										key={sng_id}
									>
										<div>
											<CiMusicNote1 size={50} />
										</div>
										<p>{sng_title}</p>
									</div>
								);
							})}
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
							- Open the world of music with the{" "}
							<span>SongSphere</span> playlist, as our playlist
							has everything you need.
						</p>
						<ProtectedNavLink to={AppRoutes.OUR_PLAYLIST}>
							View playlist
						</ProtectedNavLink>
					</div>
				</section>
			) : (
				<Spinner />
			)}
		</>
	);
};

export default Home;
