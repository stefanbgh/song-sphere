import { FC } from "react";

import { NavLink } from "react-router-dom";
import AppRoutes from "../../router/Routes";

import "./Artists.less";

const Artists: FC = (): JSX.Element => {
	return (
		<section className="artists">
			<h1 className="section-title">Artists</h1>
			<p className="section-desc">
				On this page, you can find all the artists available on our
				music application.
			</p>
			<div className="artists-list">
				<div className="cards">
					<NavLink to={`${AppRoutes.ARTISTS}/1`}>
						<div className="card">
							<div className="image">
								<img
									width={175}
									src="https://i.ibb.co/80v3Vgq/ariana-grande.jpg"
									alt="artist"
								/>
								<div className="overlay"></div>
							</div>
							<p>Ariana Grande</p>
						</div>
					</NavLink>
					<div className="card">
						<div className="image">
							<img
								width={175}
								src="https://i.ibb.co/cyWsPh5/the-weeknd.jpg"
								alt="artist"
							/>
							<div className="overlay"></div>
						</div>
						<p>The Weeknd</p>
					</div>
					<div className="card">
						<div className="image">
							<img
								width={175}
								src="https://i.ibb.co/Y7dGhR1/beyonce.jpg"
								alt="artist"
							/>
							<div className="overlay"></div>
						</div>
						<p>Beyonce</p>
					</div>
					<div className="card">
						<div className="image">
							<img
								width={175}
								src="https://i.ibb.co/1fcBKQC/bruno-mars.jpg"
								alt="artist"
							/>
							<div className="overlay"></div>
						</div>
						<p>Bruno Mars</p>
					</div>
					<div className="card">
						<div className="image">
							<img
								width={175}
								src="https://i.ibb.co/TtrbmBN/rihanna.jpg"
								alt="artist"
							/>
							<div className="overlay"></div>
						</div>
						<p>Rhiana</p>
					</div>
					<div className="card">
						<div className="image">
							<img
								width={175}
								src="https://i.ibb.co/Y8MynSP/eminem.jpg"
								alt="artist"
							/>
							<div className="overlay"></div>
						</div>
						<p>Eminem</p>
					</div>
					<div className="card">
						<div className="image">
							<img
								width={175}
								src="https://i.ibb.co/80v3Vgq/ariana-grande.jpg"
								alt="artist"
							/>
							<div className="overlay"></div>
						</div>
						<p>Ariana Grande</p>
					</div>
					<div className="card">
						<div className="image">
							<img
								width={175}
								src="https://i.ibb.co/cyWsPh5/the-weeknd.jpg"
								alt="artist"
							/>
							<div className="overlay"></div>
						</div>
						<p>The Weeknd</p>
					</div>
					<div className="card">
						<div className="image">
							<img
								width={175}
								src="https://i.ibb.co/Y7dGhR1/beyonce.jpg"
								alt="artist"
							/>
							<div className="overlay"></div>
						</div>
						<p>Beyonce</p>
					</div>
					<div className="card">
						<div className="image">
							<img
								width={175}
								src="https://i.ibb.co/1fcBKQC/bruno-mars.jpg"
								alt="artist"
							/>
							<div className="overlay"></div>
						</div>
						<p>Bruno Mars</p>
					</div>
					<div className="card">
						<div className="image">
							<img
								width={175}
								src="https://i.ibb.co/TtrbmBN/rihanna.jpg"
								alt="artist"
							/>
							<div className="overlay"></div>
						</div>
						<p>Rhiana</p>
					</div>
					<div className="card">
						<div className="image">
							<img
								width={175}
								src="https://i.ibb.co/Y8MynSP/eminem.jpg"
								alt="artist"
							/>
							<div className="overlay"></div>
						</div>
						<p>Eminem</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Artists;
