import { FC } from "react";

import { NavLink } from "react-router-dom";
import AppRoutes from "../../router/Routes";

import "./Artists.less";
import { useGetArtistsQuery } from "../../features/api/artists.api";
import { useAppSelector } from "../../hooks/useAppSelector";
import { RootState } from "../../ts/types/RootState";
import { Spinner } from "../../components";
import { IArtist } from "../../ts/models/IArtist";

const Artists: FC = (): JSX.Element => {
	useGetArtistsQuery();

	const { artists } = useAppSelector((state: RootState) => state.artists);

	return (
		<section className="artists">
			<h1 className="section-title">Artists</h1>
			<p className="section-desc">
				On this page, you can find all the artists available on our
				music application.
			</p>
			<div className="artists-list">
				<div className="cards">
					{artists ? (
						artists.map((artist: IArtist) => {
							const { art_id, art_image, art_name } = artist;

							return (
								<NavLink
									to={`${AppRoutes.ARTISTS}/${art_id}`}
									key={art_id}
								>
									<div className="card">
										<div className="image">
											<img
												width={175}
												height={175}
												src={art_image}
												alt="artist"
											/>
											<div className="overlay"></div>
										</div>
										<p>{art_name}</p>
									</div>
								</NavLink>
							);
						})
					) : (
						<Spinner />
					)}
				</div>
			</div>
		</section>
	);
};

export default Artists;
