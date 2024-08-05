import { FC } from "react";

// import { useParams } from "react-router-dom";

import { CiMusicNote1 } from "react-icons/ci";
import "./Artist.less";
import { NavLink } from "react-router-dom";
import AppRoutes from "../../router/Routes";

const Artist: FC = () => {
	// const { id } = useParams();

	return (
		<section className="artist">
			<h1 className="section-title">Artist</h1>
			<p className="section-desc">
				Here you can find more information about the individual artist.
			</p>
			<div className="artist-top">
				<div className="picture">
					<img
						width={200}
						src="https://i.postimg.cc/gJqSSTcg/adele.webp"
						alt="artist"
					/>
					<div className="overlay"></div>
				</div>
				<div className="stage-name">
					<h3>Stage Name:</h3>
				</div>
				<div className="content">
					<p>Adele</p>
					<p className="popularity">
						Popularity: <span>50.000.000</span>
					</p>
				</div>
			</div>
			<div className="artist-mid">
				<h3>Biography:</h3>
				<br />
				<p style={{ width: "350px" }}>
					<span className="info">Full Name:</span> Adele Laurie Blue
					Adkins <br />
					<span className="info">Date of Birth:</span> May 5, 1988{" "}
					<br />
					<span className="info">Place of Birth:</span> Tottenham,
					London, England <br />
					<br />
					<span className="info">Career:</span> Adele gained
					international recognition with her debut album "19" in 2008.
					Her follow-up albums "21" (2011) and "25" (2015) broke
					numerous records and earned her multiple Grammy Awards.
					Adele is known for her powerful voice and emotive
					songwriting.
				</p>
			</div>
			<div className="artist-bot">
				<h3>Popular Songs:</h3>
				<div className="popular-songs">
					<NavLink to={`${AppRoutes.SONGS}/1`}>
						<div className="song">
							<div>
								<CiMusicNote1 size={50} />
							</div>

							<p className="song-title">Hello</p>
						</div>
					</NavLink>
					<NavLink to={`${AppRoutes.SONGS}/2`}>
						<div className="song">
							<div>
								<CiMusicNote1 size={50} />
							</div>

							<p className="song-title">Rolling in the Deep</p>
						</div>
					</NavLink>
					<NavLink to={`${AppRoutes.SONGS}/3`}>
						<div className="song">
							<div>
								<CiMusicNote1 size={50} />
							</div>
							<p className="song-title">Set Fire to the Rain</p>
						</div>
					</NavLink>
				</div>
			</div>
		</section>
	);
};

export default Artist;
