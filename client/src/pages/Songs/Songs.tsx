import { Context, FC, useContext, useState } from "react";

import { CiMusicNote1 } from "react-icons/ci";

import SongContext from "../../context/SongContext";
import { ISongContext } from "../../ts/interfaces/ISongContext";
import { useAppSelector } from "../../hooks/useAppSelector";
import { RootState } from "../../ts/types/RootState";
import { Spinner } from "../../components";
import { ISong } from "../../ts/models/ISong";
import { useGetSongsQuery } from "../../features/api/songs.api";

import "./Songs.less";

const Songs: FC = (): JSX.Element => {
	useGetSongsQuery();
	const { setIsActive } = useContext(SongContext as Context<ISongContext>);
	const { songs } = useAppSelector((state: RootState) => state.songs);

	const [showSongs, setShowSongs] = useState<number>(10);

	const handleViewMore = () => {
		setShowSongs((showSongs) => showSongs + 10);
	};

	const handlePlay = () => setIsActive(true);

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
									onClick={handlePlay}
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
			{songs && songs.length !== showSongs && (
				<button onClick={handleViewMore}>View more</button>
			)}
		</section>
	);
};

export default Songs;
