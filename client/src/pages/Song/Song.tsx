import { FC, useState } from "react";

import { useParams } from "react-router-dom";
import { CiPlay1 } from "react-icons/ci";
import { FaStopCircle } from "react-icons/fa";

import { useAppSelector } from "../../hooks/useAppSelector";
import { RootState } from "../../ts/types/RootState";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { PLAY_SONG, STOP_SONG } from "../../features/slices/songs.slice";
import { ISong } from "../../ts/models/ISong";
import { useGetSingleSongQuery } from "../../features/api/songs.api";
import { FavoriteIcon, PlaylistIcon, Spinner } from "../../components";
import { formatText } from "../../utils/formatText";

import "./Song.less";

const Song: FC = () => {
	const { id } = useParams();

	useGetSingleSongQuery(id as string);

	const { activeSong, song } = useAppSelector(
		(state: RootState) => state.songs
	);

	const dispatch = useAppDispatch();

	const handlePlay = (song: ISong) => {
		if (activeSong) {
			dispatch(STOP_SONG());

			return;
		}

		dispatch(PLAY_SONG(song));
	};

	return (
		<section className="song">
			<h1 className="section-title">Song</h1>
			<p className="section-desc">
				Here you can find more information about the individual song.
			</p>
			{song ? (
				<div className="song-info">
					<div className="song-info_top">
						<h2>{song.sng_title}</h2>
						<div className="icons">
							{activeSong ? (
								<FaStopCircle
									size={22}
									className={
										activeSong ? "icon active" : "icon"
									}
									onClick={() => handlePlay(song)}
								/>
							) : (
								<CiPlay1
									size={22}
									className={
										activeSong ? "icon active" : "icon"
									}
									onClick={() => handlePlay(song)}
								/>
							)}
							<FavoriteIcon id={id as string} />
							<PlaylistIcon id={id as string} />
						</div>
					</div>
					<div className="song-info_bot">
						<p className="lyrics">{formatText(song.sng_lyrics)}</p>
					</div>
				</div>
			) : (
				<Spinner />
			)}
		</section>
	);
};

export default Song;
