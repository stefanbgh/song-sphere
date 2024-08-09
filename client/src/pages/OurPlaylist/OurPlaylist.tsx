import { FC } from "react";

import { IoPlayOutline, IoStatsChartOutline } from "react-icons/io5";
import { useGetOurPlaylistQuery } from "../../features/api/playlists.api";
import { useAppSelector } from "../../hooks/useAppSelector";
import { RootState } from "../../ts/types/RootState";
import { ISong } from "../../ts/models/ISong";
import { PiHashBold } from "react-icons/pi";
import { Spinner } from "../../components";
import { useAppDispatch } from "../../hooks/useAppDispatch";

import { TOGGLE_POPUP } from "../../features/slices/popup.slice";
import { PLAY_SONG } from "../../features/slices/songs.slice";
import { sbAuth } from "../../constants/sbAuth.constant";

import "./OurPlaylist.less";

const OurPlaylist: FC = () => {
	const token = localStorage.getItem(sbAuth) as string;
	useGetOurPlaylistQuery();

	const { ourPlaylist } = useAppSelector(
		(state: RootState) => state.playlists
	);

	const dispatch = useAppDispatch();

	const handlePlay = (song: ISong) => {
		if (!token) {
			dispatch(TOGGLE_POPUP(true));

			return;
		}

		dispatch(PLAY_SONG(song));
	};

	return (
		<div className="our-playlist">
			<div className="our-playlist__title">
				<h2>Our Playlist</h2>
				<p>
					Discover curated playlists crafted by our team to enhance
					your listening experience.
				</p>
			</div>
			<div className="our-playlist__songs">
				{ourPlaylist ? (
					ourPlaylist.map((song: ISong, idx: number) => {
						const { sng_id, sng_title, sng_popularity } = song;

						return (
							<div className="song" key={sng_id}>
								<div className="song-num">
									<PiHashBold size={20} className="icon" />
									<p>{idx + 1}</p>
								</div>
								<div className="song-title">
									<p>{sng_title}</p>
								</div>
								<div className="song-stats">
									<IoStatsChartOutline
										size={22}
										className="icon"
									/>
									<p>{sng_popularity.toLocaleString()}</p>
								</div>
								<div className="song-options">
									<IoPlayOutline
										size={22}
										onClick={() => handlePlay(song)}
										className="song-options__icon"
									/>
								</div>
							</div>
						);
					})
				) : (
					<Spinner />
				)}
			</div>
		</div>
	);
};

export default OurPlaylist;
