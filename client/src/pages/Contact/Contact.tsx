import { FC } from "react";

import Container from "../../container/Container";
import { Title } from "../../components";

import "./Contact.less";

const Contact: FC = (): JSX.Element => {
	return (
		<Container cn="contact">
			<Title title="Contact" />
			<p>
				If you have any questions, suggestions, or need support, please
				do not hesitate to contact us. We are here to help you and
				ensure you have the best experience with our music application.
			</p>
			<p>
				Our team is dedicated to providing prompt and efficient support
				to address any concerns or feedback you may have. We value your
				input and are always looking for ways to improve our service.
			</p>
			<p>
				For any inquiries or support, please contact us at{" "}
				<a href="mailto:songsphere.help@gmail.com">
					songsphere.help@gmail.com
				</a>
				.
			</p>
			<p>
				- Thank you for choosing our music application. We appreciate
				your support and look forward to assisting you.
			</p>
		</Container>
	);
};

export default Contact;
