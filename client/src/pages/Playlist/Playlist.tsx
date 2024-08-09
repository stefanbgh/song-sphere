import { FC, useState } from "react";

import {
	IoPlayOutline,
	IoStatsChartOutline,
	IoTrashOutline,
} from "react-icons/io5";
import { Spinner } from "../../components";
import { ISong } from "../../ts/models/ISong";
import { PiHashBold } from "react-icons/pi";
import {
	useDeletePlaylistMutation,
	useGetPlaylistQuery,
} from "../../features/api/playlists.api";

import { sbAuth } from "../../constants/sbAuth.constant";
import { RootState } from "../../ts/types/RootState";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { TOGGLE_POPUP } from "../../features/slices/popup.slice";
import { PLAY_SONG } from "../../features/slices/songs.slice";

import { NavLink } from "react-router-dom";
import AppRoutes from "../../router/Routes";
import { FaMusic } from "react-icons/fa";

import "./Playlist.less";

const Playlist: FC = () => {
	const token = localStorage.getItem(sbAuth) as string;
	const { user: userData } = JSON.parse(token);

	useGetPlaylistQuery(userData.id);
	const { playlist } = useAppSelector((state: RootState) => state.playlists);

	const [viewMore, setViewMore] = useState<number>(8);

	const [deletePlaylist] = useDeletePlaylistMutation();

	const dispatch = useAppDispatch();

	const handlePlay = (song: ISong) => {
		if (!token) {
			dispatch(TOGGLE_POPUP(true));

			return;
		}

		dispatch(PLAY_SONG(song));
	};

	const handleDelete = (sng_id: number, usr_id: string) => {
		deletePlaylist({ sng_id, usr_id });
	};

	return (
		<div className="my-playlist">
			<div className="my-playlist__title">
				<h2>Playlist</h2>
				<p>
					Create and manage your custom playlists. Organize your music
					the way you like it.
				</p>
			</div>
			<div className="my-playlist__songs">
				{playlist ? (
					playlist.length > 0 ? (
						[...playlist]
							.reverse()
							.slice(0, viewMore)
							.map((song: ISong, idx: number) => {
								const { sng_id, sng_title, sng_popularity } =
									song;

								return (
									<div className="song" key={sng_id}>
										<div className="song-num">
											<PiHashBold
												size={20}
												className="icon"
											/>
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
											<p>
												{sng_popularity.toLocaleString()}
											</p>
										</div>
										<div className="song-options">
											<IoPlayOutline
												size={22}
												onClick={() => handlePlay(song)}
												className="song-options__icon"
											/>
											<IoTrashOutline
												size={22}
												className="song-options__icon"
												onClick={() =>
													handleDelete(
														sng_id,
														userData.id
													)
												}
											/>
										</div>
									</div>
								);
							})
					) : (
						<div className="empty">
							<p>
								<FaMusic size={20} /> Your playlist is currently
								empty. Discover new tracks and start building
								your playlist!
							</p>
							<NavLink to={AppRoutes.SONGS} className="songs-btn">
								<div className="songs-btn__view-more">
									Browse Songs
								</div>
							</NavLink>
						</div>
					)
				) : (
					<Spinner />
				)}
				<div className="songs-btn">
					{playlist && playlist.length > viewMore && (
						<button
							className="songs-btn__view-more"
							onClick={() => setViewMore((vm) => vm + 8)}
						>
							View more
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Playlist;
