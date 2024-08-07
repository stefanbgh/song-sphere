import { FC, useState } from "react";

import { CiMusicNote1 } from "react-icons/ci";

import { useAppSelector } from "../../hooks/useAppSelector";
import { RootState } from "../../ts/types/RootState";
import { Spinner } from "../../components";
import { ISong } from "../../ts/models/ISong";
import { useGetSongsQuery } from "../../features/api/songs.api";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { PLAY_SONG } from "../../features/slices/songs.slice";

import "./Songs.less";

const Songs: FC = (): JSX.Element => {
	useGetSongsQuery();
	const { songs } = useAppSelector((state: RootState) => state.songs);

	const [showSongs, setShowSongs] = useState<number>(10);
	const dispatch = useAppDispatch();

	const handleViewMore = () => {
		setShowSongs((showSongs) => showSongs + 10);
	};

	const handlePlay = (song: ISong) => {
		dispatch(PLAY_SONG(song));
	};

	return (
		<section className="songs">
			<h1 className="section-title">Songs</h1>
			<p className="section-desc">
				On this page, you can find the most popular songs on our music
				application.
			</p>
			<div className="songs-list">
				<div className="cards">
					{songs ? (
						songs.slice(0, showSongs).map((song: ISong) => {
							const { sng_id, sng_title } = song;

							return (
								<div
									className="card"
									onClick={() => handlePlay(song)}
									key={sng_id}
								>
									<div>
										<CiMusicNote1
											className="icon"
											size={50}
										/>
									</div>
									<p>{sng_title}</p>
								</div>
							);
						})
					) : (
						<Spinner />
					)}
				</div>
			</div>
			<div className="songs-btn">
				{songs && songs.length !== showSongs && (
					<button
						className="songs-btn__view-more"
						onClick={handleViewMore}
					>
						View more
					</button>
				)}
			</div>
		</section>
	);
};

export default Songs;
