import { FC } from "react";

import { useParams } from "react-router-dom";

import { CiMusicNote1 } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import AppRoutes from "../../router/Routes";
import { useGetSingleArtistQuery } from "../../features/api/artists.api";

import { useAppSelector } from "../../hooks/useAppSelector";
import { RootState } from "../../ts/types/RootState";
import { Spinner } from "../../components";

import "./Artist.less";
import { ISong } from "../../ts/models/ISong";

const Artist: FC = () => {
	const { id } = useParams();

	useGetSingleArtistQuery(id as string);

	const { artist, popular_songs } = useAppSelector(
		(state: RootState) => state.artists
	);

	return (
		<section className="artist">
			<h1 className="section-title">Artist</h1>
			<p className="section-desc">
				Here you can find more information about the individual artist.
			</p>
			{artist ? (
				<>
					<div className="artist-top">
						<div className="picture">
							<img
								width={200}
								height={200}
								src={artist.art_image}
								alt="artist"
							/>
							<div className="overlay"></div>
						</div>
						<div className="stage-name">
							<h3>Stage Name:</h3>
						</div>
						<div className="content">
							<p>{artist.art_name}</p>
							<p className="popularity">
								Popularity:{" "}
								<span>
									{artist.art_popularity.toLocaleString()}
								</span>
							</p>
						</div>
					</div>
					<div className="artist-mid">
						<h3>Biography:</h3>
						<br />
						<p style={{ width: "350px" }}>
							<span className="info">Full Name:</span>{" "}
							{artist.art_fullname} <br />
							<span className="info">Date of Birth:</span>{" "}
							{artist.art_birth} <br />
							<span className="info">Place of Birth:</span>{" "}
							{artist.art_place} <br />
							<br />
							<span className="info">Career:</span>{" "}
							{artist.art_career}
						</p>
					</div>
					<div className="artist-bot">
						<h3>Popular Songs:</h3>
						<div className="popular-songs">
							{popular_songs ? (
								popular_songs.map((song: ISong) => {
									const { sng_id, sng_title } = song;

									return (
										<NavLink
											to={`${AppRoutes.SONGS}/${sng_id}`}
											key={sng_id}
										>
											<div className="song">
												<div>
													<CiMusicNote1 size={50} />
												</div>

												<p className="song-title">
													{sng_title}
												</p>
											</div>
										</NavLink>
									);
								})
							) : (
								<Spinner />
							)}
						</div>
					</div>
				</>
			) : (
				<Spinner />
			)}
		</section>
	);
};

export default Artist;
