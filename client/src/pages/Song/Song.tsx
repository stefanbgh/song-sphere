import { FC, Fragment, useState } from "react";

import { useParams } from "react-router-dom";
import { CiPlay1, CiHeart, CiBookmark } from "react-icons/ci";
import { FaStopCircle } from "react-icons/fa";

import { useAppSelector } from "../../hooks/useAppSelector";
import { RootState } from "../../ts/types/RootState";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { PLAY_SONG, STOP_SONG } from "../../features/slices/songs.slice";
import { ISong } from "../../ts/models/ISong";

import "./Song.less";
import { useGetSingleSongQuery } from "../../features/api/songs.api";
import { Spinner } from "../../components";

const Song: FC = () => {
	const { id } = useParams();
	useGetSingleSongQuery(id as string);

	const { activeSong, song } = useAppSelector(
		(state: RootState) => state.songs
	);

	const dispatch = useAppDispatch();

	const [isFav, setIsFav] = useState<boolean>(false);
	const [isList, setIsList] = useState<boolean>(false);

	const handlePlay = (song: ISong) => {
		if (activeSong) {
			dispatch(STOP_SONG());

			return;
		}

		dispatch(PLAY_SONG(song));
	};

	const formatText = (txt: string) => {
		return txt.split(/(\[.*?\])/).map((part, index) => {
			if (part.match(/\[.*?\]/)) {
				return (
					<Fragment key={index}>
						<br />
						<br />
						<span className="verse">{part}</span>
						<br />
					</Fragment>
				);
			}
			return part;
		});
	};

	return (
		<section className="song">
			<h1 className="section-title">Song</h1>
			<p className="section-desc">
				Here you can find more information about the individual artist.
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
							<CiHeart
								size={24}
								className={isFav ? "icon active" : "icon"}
								onClick={() => setIsFav((iff) => !iff)}
							/>
							<CiBookmark
								size={22}
								className={isList ? "icon active" : "icon"}
								onClick={() => setIsList((il) => !il)}
							/>
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
