import { Fragment } from "react";

export const formatText = (txt: string) => {
	return txt.split(/(\[.*?\])/).map((part, index) => {
		if (part.match(/\[.*?\]/)) {
			return (
				<Fragment key={index}>
					<br />
					<br />
					<span className="verse">{part}</span>
					<br />
				</Fragment>
			);
		}
		return part;
	});
};
