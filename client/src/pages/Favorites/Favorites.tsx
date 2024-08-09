import { FC, useState } from "react";

import {
	IoStatsChartOutline,
	IoPlayOutline,
	IoTrashOutline,
} from "react-icons/io5";
import { PiHashBold } from "react-icons/pi";
import {
	useDeleteFavoriteMutation,
	useGetFavoritesQuery,
} from "../../features/api/favorites.api";
import { useAppSelector } from "../../hooks/useAppSelector";
import { sbAuth } from "../../constants/sbAuth.constant";
import { RootState } from "../../ts/types/RootState";
import { Spinner } from "../../components";
import { ISong } from "../../ts/models/ISong";

import { useAppDispatch } from "../../hooks/useAppDispatch";
import { TOGGLE_POPUP } from "../../features/slices/popup.slice";
import { PLAY_SONG } from "../../features/slices/songs.slice";

import "./Favorites.less";
import { FaHeartBroken } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import AppRoutes from "../../router/Routes";

const Favorites: FC = () => {
	const token = localStorage.getItem(sbAuth) as string;
	const { user: userData } = JSON.parse(token);

	useGetFavoritesQuery(userData.id);
	const { favorites } = useAppSelector((state: RootState) => state.favorites);

	const [viewMore, setViewMore] = useState<number>(8);

	const [deleteFavorite] = useDeleteFavoriteMutation();

	const dispatch = useAppDispatch();

	const handlePlay = (song: ISong) => {
		if (!token) {
			dispatch(TOGGLE_POPUP(true));

			return;
		}

		dispatch(PLAY_SONG(song));
	};

	const handleDelete = (sng_id: number, usr_id: string) => {
		deleteFavorite({ sng_id, usr_id });
	};

	return (
		<div className="my-favorites">
			<div className="my-favorites__title">
				<h2>Favorites</h2>
				<p>
					Your favorite songs, albums, and artists all in one place.{" "}
				</p>
			</div>
			<div className="my-favorites__songs">
				{favorites ? (
					favorites.length > 0 ? (
						[...favorites]
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
								<FaHeartBroken size={20} /> Your favorites are
								currently empty. Start adding some music!
							</p>
							<NavLink to={AppRoutes.SONGS} className="songs-btn">
								<div className="songs-btn__view-more">
									Explore Songs
								</div>
							</NavLink>
						</div>
					)
				) : (
					<Spinner />
				)}
				<div className="songs-btn">
					{favorites && favorites.length > viewMore && (
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

export default Favorites;
