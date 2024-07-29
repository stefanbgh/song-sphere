import { FC } from "react";

import { IoTimeOutline, IoPlayOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";

import "./Playlist.less";

const Playlist: FC = () => {
	return (
		<div className="my-playlist">
			<div className="my-playlist_title">
				<h2>Playlist</h2>
				<p>
					Create and manage your custom playlists. Organize your music
					the way you like it.
				</p>
			</div>
			<div className="songs">
				<div className="song">
					<p>#1</p>
					<p>Song Name</p>
					<p>Artist</p>
					<div className="time">
						<IoPlayOutline />
						<IoTimeOutline />
						<p>3:20</p>
						<BsThreeDots />
					</div>
				</div>
				<div className="song">
					<p>#2</p>
					<p>Song Name</p>
					<p>Artist</p>
					<div className="time">
						<IoPlayOutline />
						<IoTimeOutline />
						<p>3:20</p>
						<BsThreeDots />
					</div>
				</div>
				<div className="song">
					<p>#3</p>
					<p>Song Name</p>
					<p>Artist</p>
					<div className="time">
						<IoPlayOutline />
						<IoTimeOutline />
						<p>3:20</p>
						<BsThreeDots />
					</div>
				</div>
				<div className="song">
					<p>#4</p>
					<p>Song Name</p>
					<p>Artist</p>
					<div className="time">
						<IoPlayOutline />
						<IoTimeOutline />
						<p>3:20</p>
						<BsThreeDots />
					</div>
				</div>
				<div className="song">
					<p>#5</p>
					<p>Song Name</p>
					<p>Artist</p>
					<div className="time">
						<IoPlayOutline />
						<IoTimeOutline />
						<p>3:20</p>
						<BsThreeDots />
					</div>
				</div>
				<div className="song">
					<p>#6</p>
					<p>Song Name</p>
					<p>Artist</p>
					<div className="time">
						<IoPlayOutline />
						<IoTimeOutline />
						<p>3:20</p>
						<BsThreeDots />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Playlist;
