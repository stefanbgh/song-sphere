import { FC } from "react";

import { IoTimeOutline, IoPlayOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";

import "./OurPlaylist.less";

const OurPlaylist: FC = () => {
	return (
		<div className="our-playlist">
			<div className="our-playlist_title">
				<h2>Our Playlist</h2>
				<p>
					Discover curated playlists crafted by our team to enhance
					your listening experience.
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
				<div className="song">
					<p>#7</p>
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
					<p>#8</p>
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
					<p>#9</p>
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

export default OurPlaylist;
