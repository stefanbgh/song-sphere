import { FC } from "react";

import "./Spinner.less"; // Uvezi svoj .less fajl

const Spinner: FC = (): JSX.Element => {
	return (
		<div className="spinner">
			<div className="dot"></div>
			<div className="dot"></div>
			<div className="dot"></div>
		</div>
	);
};

export default Spinner;
