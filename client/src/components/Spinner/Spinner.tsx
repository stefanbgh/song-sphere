import { FC } from "react";

import "./Spinner.less";

const Spinner: FC = (): JSX.Element => {
	return (
		<div className="spinner">
			<p>Loading...</p>
		</div>
	);
};

export default Spinner;
