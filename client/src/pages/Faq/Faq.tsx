import { FC, useState } from "react";

import Container from "../../container/Container";
import { Title } from "../../components";

import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

import "./Faq.less";

const Faq: FC = (): JSX.Element => {
	const [isActive, setIsActive] = useState<number>(1);

	const handleClick = (num: number) => setIsActive(num);

	return (
		<Container cn="faq">
			<Title title="FAQ (Frequently Asked Questions)" />

			<div className="faq-card">
				<div
					className={isActive === 1 ? "question active" : "question"}
					onClick={() => handleClick(1)}
				>
					<h3>1. How can I create my own playlist in your app?</h3>
					{isActive === 1 ? (
						<IoMdArrowDropup size={20} />
					) : (
						<IoMdArrowDropdown size={20} />
					)}
				</div>

				<p className={isActive === 1 ? "active" : ""}>
					- To create a playlist, simply go to the 'New Playlist'
					option, give it a name, and add desired songs from our
					database.
				</p>
			</div>

			<div className="faq-card">
				<div
					className={isActive === 2 ? "question active" : "question"}
					onClick={() => handleClick(2)}
				>
					<h3>2. How do I mark a song as a favorite?</h3>
					{isActive === 2 ? (
						<IoMdArrowDropup size={20} />
					) : (
						<IoMdArrowDropdown size={20} />
					)}
				</div>

				<p className={isActive === 2 ? "active" : ""}>
					- To mark a song as a favorite, just click on the heart icon
					next to the song. All your favorite songs can be found in
					the "Your Favorites" section on the main screen of the app.
				</p>
			</div>

			<div className="faq-card">
				<div
					className={isActive === 3 ? "question active" : "question"}
					onClick={() => handleClick(3)}
				>
					<h3>3. How do I reset my password if I forget it?</h3>
					{isActive === 3 ? (
						<IoMdArrowDropup size={20} />
					) : (
						<IoMdArrowDropdown size={20} />
					)}
				</div>

				<p className={isActive === 3 ? "active" : ""}>
					- If you forget your password, simply click on the "Forgot
					password?" option on the login screen. Follow the
					instructions to reset your password via email.
				</p>
			</div>

			<div className="faq-card">
				<div
					className={isActive === 4 ? "question active" : "question"}
					onClick={() => handleClick(4)}
				>
					<h3>4. How can I add a profile picture?</h3>
					{isActive === 4 ? (
						<IoMdArrowDropup size={20} />
					) : (
						<IoMdArrowDropdown size={20} />
					)}
				</div>

				<p className={isActive === 4 ? "active" : ""}>
					- Currently, our app focuses on providing a seamless music
					experience without social interactions between users.
					Therefore, adding a profile picture is not a feature we
					support at this time.
				</p>
			</div>
		</Container>
	);
};

export default Faq;
