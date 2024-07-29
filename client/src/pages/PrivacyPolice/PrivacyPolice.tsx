import { FC } from "react";

import Container from "../../container/Container";
import { List, SubTitle, Title } from "../../components";

import "./PrivacyPolice.less";

const PrivacyPolice: FC = (): JSX.Element => {
	return (
		<Container cn="privacy-police">
			<Title title="Privacy Police" />
			<p>
				Your privacy is important to us. This Privacy Policy explains
				how we collect, use, and protect your personal information when
				you use our music application.
			</p>

			<SubTitle subTitle="1. Information We Collect" />
			<List>
				<ul>
					<li>
						<strong>Account Information:</strong> When you register,
						we collect your email address and password. If you log
						in with Google, we also collect your Google profile
						information.
					</li>
					<li>
						<strong>Usage Data:</strong> We collect data on how you
						use the application, including playlists you create,
						songs you mark as favorites, and your playback history.
					</li>
					<li>
						<strong>Device Information:</strong> We collect
						information about the device you use to access the
						application, including IP address, operating system, and
						browser type.
					</li>
				</ul>
			</List>

			<SubTitle subTitle="2. How We Use Your Information" />
			<List>
				<ul>
					<li>To provide and improve our services.</li>
					<li>
						To personalize your experience, such as suggesting
						playlists or songs.
					</li>
					<li>
						To communicate with you about your account or changes to
						our policies.
					</li>
				</ul>
			</List>

			<SubTitle subTitle="3. Security" />
			<p>
				We implement a variety of security measures to protect your
				personal information. However, no method of transmission over
				the internet or electronic storage is 100% secure.
			</p>

			<SubTitle subTitle="4. Changes to This Policy" />
			<p>
				We may update this Privacy Policy from time to time. We will
				notify you of any changes by posting the new policy on this
				page.
			</p>

			<p>
				- Thank you for trusting us with your personal information. If
				you have any questions, please contact us.
			</p>
		</Container>
	);
};

export default PrivacyPolice;
