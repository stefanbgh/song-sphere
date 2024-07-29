import { Context, FC, useContext } from "react";

import { CiMusicNote1 } from "react-icons/ci";

import SongContext from "../../context/SongContext";
import { ISongContext } from "../../ts/interfaces/ISongContext";

import "./Songs.less";

const Songs: FC = (): JSX.Element => {
	const { setIsActive } = useContext(SongContext as Context<ISongContext>);

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
					<div className="card" onClick={handlePlay}>
						<div>
							<CiMusicNote1 className="icon" size={50} />
						</div>
						<p>Song 1</p>
					</div>
					<div className="card">
						<div>
							<CiMusicNote1 className="icon" size={50} />
						</div>
						<p>Song 1</p>
					</div>
					<div className="card">
						<div>
							<CiMusicNote1 className="icon" size={50} />
						</div>
						<p>Song 1</p>
					</div>
					<div className="card">
						<div>
							<CiMusicNote1 className="icon" size={50} />
						</div>
						<p>Song 1</p>
					</div>
					<div className="card">
						<div>
							<CiMusicNote1 className="icon" size={50} />
						</div>
						<p>Song 1</p>
					</div>
					<div className="card">
						<div>
							<CiMusicNote1 className="icon" size={50} />
						</div>
						<p>Song 1</p>
					</div>
					<div className="card">
						<div>
							<CiMusicNote1 className="icon" size={50} />
						</div>
						<p>Song 1</p>
					</div>
					<div className="card">
						<div>
							<CiMusicNote1 className="icon" size={50} />
						</div>
						<p>Song 1</p>
					</div>
					<div className="card">
						<div>
							<CiMusicNote1 className="icon" size={50} />
						</div>
						<p>Song 1</p>
					</div>
					<div className="card">
						<div>
							<CiMusicNote1 className="icon" size={50} />
						</div>
						<p>Song 1</p>
					</div>
					<div className="card">
						<div>
							<CiMusicNote1 className="icon" size={50} />
						</div>
						<p>Song 1</p>
					</div>
					<div className="card">
						<div>
							<CiMusicNote1 className="icon" size={50} />
						</div>
						<p>Song 1</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Songs;
