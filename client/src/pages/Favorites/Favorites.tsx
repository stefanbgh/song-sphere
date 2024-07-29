import { FC } from "react";

import { IoTimeOutline, IoPlayOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";

import "./Favorites.less";

const Favorites: FC = () => {
	return (
		<div className="my-favorites">
			<div className="my-favorites-title">
				<h2>Favorites</h2>
				<p>
					Your favorite songs, albums, and artists all in one place.{" "}
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

export default Favorites;
