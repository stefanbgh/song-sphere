import { FC } from "react";

import Container from "../../container/Container";
import { List, SubTitle, Title } from "../../components";

import "./TermsOfUse.less";

const TermsOfUse: FC = (): JSX.Element => {
	return (
		<Container cn="terms-of-use">
			<Title title="Terms of Use" />
			<p>
				Welcome! By using our music application, you agree to these
				terms. If you disagree, please do not use our app.
			</p>

			<SubTitle subTitle="1. Use of the Application" />
			<List>
				<ul>
					<li>Users must be at least 13 years old.</li>
					<li>Do not misuse the app or assist others in doing so.</li>
					<li>
						Follow our guidelines for creating playlists, marking
						favorites, and using playback controls.
					</li>
				</ul>
			</List>

			<SubTitle subTitle="2. User Accounts" />
			<List>
				<ul>
					<li>Keep your login details confidential.</li>
					<li>
						Provide accurate information when creating an account.
					</li>
					<li>
						Google login is available for convenience; we do not
						store your Google password.
					</li>
				</ul>
			</List>

			<SubTitle subTitle="3. Content" />
			<List>
				<ul>
					<li>
						Lyrics, artist details, and images are for personal use
						only.
					</li>
					<li>Do not distribute content without authorization.</li>
					<li>
						We may remove content that violates copyright laws or
						our terms.
					</li>
				</ul>
			</List>

			<p>
				- Thank you for using our <span>music</span> app!
			</p>
		</Container>
	);
};

export default TermsOfUse;
