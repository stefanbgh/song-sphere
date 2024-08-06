import { FC } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import AppRoutes from "../../router/Routes";

import mini_logo from "../../assets/mini-logo.webp";

import "./404.less";

const NotFound: FC = (): JSX.Element => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(AppRoutes.HOME);
	};

	return (
		<div className="not-found">
			<div className="message">
				<NavLink to={AppRoutes.HOME} className="logo">
					<img width={100} src={mini_logo} alt="logo" />
				</NavLink>
				<h1>Page Not Found!</h1>
				<p>It seems the page you’re looking for doesn’t exist.</p>
			</div>
			<button className="btn btn-primary" onClick={handleClick}>
				Go Back
			</button>
		</div>
	);
};

export default NotFound;
