import { FC } from "react";

import Container from "../../container/Container";
import { List, SubTitle, Title } from "../../components";

import "./About.less";

const About: FC = (): JSX.Element => {
	return (
		<Container cn="about">
			<Title title="About Us" />
			<p>
				Welcome to our music application, your ultimate destination for
				a personalized music experience. Our app allows you to create
				playlists, mark your favorite songs, and enjoy seamless playback
				with controls like play, stop, previous, next, and shuffle.
			</p>

			<SubTitle subTitle="Our Mission" />
			<p>
				Our mission is to bring music lovers closer to their favorite
				artists and tracks by providing a platform that is both
				intuitive and feature-rich. We believe in the power of music to
				inspire and connect people, and we strive to enhance your
				listening experience.
			</p>

			<SubTitle subTitle="Features" />
			<List>
				<ul>
					<li>
						<strong>Playlists:</strong> Create and manage your own
						playlists to suit any mood or occasion.
					</li>
					<li>
						<strong>Favorites:</strong> Easily mark and access your
						favorite songs.
					</li>
					<li>
						<strong>Playback Controls:</strong> Enjoy smooth
						playback with options to play, stop, skip, and shuffle
						songs.
					</li>
					<li>
						<strong>Lyrics and Artist Details:</strong> View
						detailed information and images of artists, along with
						song lyrics to sing along.
					</li>
				</ul>
			</List>

			<div className="desc">
				<p>
					<span>User-Friendly Interface:</span> We designed our app
					with you in mind. With simple navigation and user-friendly
					features, discovering and enjoying music has never been
					easier.
				</p>

				<p>
					<span>Security and Privacy:</span> We prioritize your
					privacy and data security. Our robust measures ensure that
					your personal information remains safe and confidential.
				</p>

				<p>
					- Join us on this musical journey and let our app be the
					soundtrack to your life. Thank you for choosing us to
					enhance your music experience.
				</p>
			</div>
		</Container>
	);
};

export default About;
